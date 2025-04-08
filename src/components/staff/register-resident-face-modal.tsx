import React, { useRef, useState, useEffect } from "react";
import * as faceapi from "face-api.js";
import ResidentHook from "../../hooks/resident-hook";
interface RegisterResidentFaceModalProps {
  id: string | undefined;
}
const RegisterResidentFaceModal: React.FC<RegisterResidentFaceModalProps> = ({
  id,
}) => {
  const { faceRegisterMutation, handleRegisterFace } = ResidentHook();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [streaming, setStreaming] = useState(false);
  const [angleMessage, setAngleMessage] = useState("");
  const loadModels = async () => {
    const MODEL_URL = "/models";
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    ]);
  };

  useEffect(() => {
    loadModels();
  }, []);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      setStreaming(true);
      setAngleMessage("Open Camera");
    }
    setTimeout(() => detectFaceLoop(), 1000);
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null; // clear the video feed
    }

    setStreaming(false);
    setAngleMessage("Close Camera");

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Fill canvas with black or white screen
        ctx.fillStyle = "#000"; // change to "#fff" for white
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const detectFaceLoop = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const result = await faceapi
      .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    const canvas = canvasRef.current;
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);
    canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);

    if (result) {
      const resizedResult = faceapi.resizeResults(result, displaySize);
      faceapi.draw.drawDetections(canvas, resizedResult);
      faceapi.draw.drawFaceLandmarks(canvas, resizedResult);

      const leftEye = resizedResult.landmarks.getLeftEye();
      const rightEye = resizedResult.landmarks.getRightEye();
      const eyeDistance = Math.abs(leftEye[0].x - rightEye[3].x);

      if (eyeDistance >= 40) {
        setAngleMessage("✅ Angle OK");
      } else {
        setAngleMessage("❌ Face the camera directly.");
      }
    } else {
      setAngleMessage("❌ No face detected.");
    }

    if (streaming) setTimeout(() => detectFaceLoop(), 300);
  };
  const validateAndRegister = async () => {
    if (!videoRef.current) return;

    try {
      const detection = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!detection) {
        return;
      }

      const leftEye = detection.landmarks.getLeftEye();
      const rightEye = detection.landmarks.getRightEye();
      const eyeDistance = Math.abs(leftEye[0].x - rightEye[3].x);

      if (eyeDistance < 40) {
        alert("Face the camera directly.");
        return;
      }

      const descriptor = Array.from(detection.descriptor as Float32Array);

      handleRegisterFace(id, descriptor);
      stopCamera();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="mx-auto p-6 space-y-6 bg-white shadow-xl rounded-xl mt-10 w-[500px]">
      <h2 className="text-2xl font-bold text-center">Register New Face</h2>

      <div className="flex justify-center gap-4">
        {!streaming ? (
          <button
            onClick={startCamera}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Open Camera
          </button>
        ) : (
          <button
            onClick={stopCamera}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Close Camera
          </button>
        )}
      </div>

      <div className="relative w-full max-w-xl mx-auto aspect-video border rounded overflow-hidden">
        <video
          ref={videoRef}
          width="640"
          height="480"
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover bg-black"
        />
        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <p className="text-center font-medium text-gray-700">{angleMessage}</p>
      <button
        className="px-3 py-3 bg-[#7F265B] rounded-lg cursor-pointe text-white font-semibold w-full"
        onClick={validateAndRegister}
        disabled={faceRegisterMutation.isPending}
      >
        Register Face
      </button>
    </div>
  );
};

export default RegisterResidentFaceModal;
