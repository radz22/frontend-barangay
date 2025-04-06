import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { FaceData } from "../pages/face-detection";

interface Props {
  faces: FaceData[];
  onRegisterClick: () => void;
}

const FaceDetector: React.FC<Props> = ({ faces, onRegisterClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [recognizedUser, setRecognizedUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      if (videoRef.current) videoRef.current.srcObject = stream;
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current || faces.length === 0) return;

    const displaySize = {
      width: videoRef.current.width,
      height: videoRef.current.height,
    };
    faceapi.matchDimensions(canvasRef.current, displaySize);

    const detect = async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current!)
        .withFaceLandmarks()
        .withFaceDescriptors();

      const resized = faceapi.resizeResults(detections, displaySize);
      canvasRef
        .current!.getContext("2d")
        ?.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      faceapi.draw.drawDetections(canvasRef.current!, resized);

      const labeledDescriptors = faces.map(
        (face) =>
          new faceapi.LabeledFaceDescriptors(
            `${face.firstName} ${face.lastName}`,
            [new Float32Array(face.descriptor)]
          )
      );

      const matcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
      const results = resized.map((d) => matcher.findBestMatch(d.descriptor));

      results.forEach((result, i) => {
        const box = resized[i].detection.box;
        const drawBox = new faceapi.draw.DrawBox(box, {
          label: result.toString(),
        });
        drawBox.draw(canvasRef.current!);

        if (result.label !== "unknown") {
          const [firstName, lastName] = result.label.split(" ");
          setRecognizedUser({ firstName, lastName });
        } else {
          setRecognizedUser(null);
        }
      });
    };

    const interval = setInterval(detect, 500);
    return () => clearInterval(interval);
  }, [faces]);

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <div className="relative w-full max-w-[720px] aspect-video border rounded-xl overflow-hidden shadow-md">
        <video
          ref={videoRef}
          width="720"
          height="560"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <canvas
          ref={canvasRef}
          width="720"
          height="560"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {recognizedUser ? (
        <h3 className="text-green-600 text-lg font-semibold">
          Recognized: {recognizedUser.firstName} {recognizedUser.lastName}
        </h3>
      ) : (
        <p className="text-gray-500">No recognized face detected</p>
      )}

      <button
        onClick={onRegisterClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
      >
        Register New Face
      </button>
    </div>
  );
};

export default FaceDetector;
