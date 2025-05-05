import React, { useRef, useState, useEffect } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";
import { Resident } from "./resident-portal-component";
interface Props {
  onRegister: (face: Resident) => void;
  onCancel: () => void;
}

const FaceRegister: React.FC<Props> = ({ onRegister, onCancel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      setStreaming(true);
    }
    setTimeout(() => detectFaceLoop(), 1000);
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
    }
    setStreaming(false);
    canvasRef.current?.getContext("2d")?.clearRect(0, 0, 640, 480);
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

    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (!detection) {
      alert("No face detected.");
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
    const res = await axios.post(
      "https://grumpy-trains-pump.loca.lt/api/image",
      {
        firstName,
        lastName,
        descriptor,
      }
    );

    onRegister(res.data);
    setFirstName("");
    setLastName("");
    stopCamera();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-xl rounded-xl mt-10">
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
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <p className="text-center font-medium text-gray-700">{angleMessage}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <button
          onClick={validateAndRegister}
          disabled={!firstName || !lastName}
          className={`px-6 py-2 rounded text-white transition ${
            firstName && lastName
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Register
        </button>
        <button
          onClick={onCancel}
          className="px-6 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FaceRegister;
