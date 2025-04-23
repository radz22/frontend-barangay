import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";
import { Resident } from "./resident-portal-component";
import FaceVerifiedDetails from "./face-verified-details";

interface Props {
  faces: Resident[];
}

const FaceDetector: React.FC<Props> = ({ faces }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firstName = localStorage.getItem("firstName") || "";
  const lastName = localStorage.getItem("lastName") || "";

  const [recognizedUser, setRecognizedUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);
  const [faceMatch, setFaceMatch] = useState<boolean>(false);
  const [residentDetails, setResidentDetails] = useState<Resident | null>(null);
  const [cameraOn, setCameraOn] = useState<boolean>(true);
  const [detectionStatus, setDetectionStatus] = useState<string>(
    "Loading face detection models..."
  );
  const [modelsLoaded, setModelsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        ]);
        setModelsLoaded(true);
        setDetectionStatus("Scanning for faces...");
      } catch (error) {
        console.error("Failed to load models:", error);
        setDetectionStatus("Failed to load face detection models");
      }
    };

    loadModels();
  }, []);

  // Start/stop camera
  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            setDetectionStatus("Camera ready - scanning for faces...");
          };
        }
      } catch (error) {
        console.error("Camera access denied:", error);
        setDetectionStatus("Camera access denied");
      }
    };

    if (cameraOn && modelsLoaded) {
      startCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [cameraOn, modelsLoaded]);

  // Face detection and recognition
  useEffect(() => {
    let isMounted = true;

    const detect = async () => {
      try {
        if (!isMounted || !videoRef.current || !canvasRef.current) {
          return;
        }

        if (videoRef.current.readyState !== 4) {
          return;
        }

        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceDescriptors();

        if (!isMounted) return;

        if (detections.length === 0) {
          setDetectionStatus("No faces detected");
          return;
        }

        const displaySize = {
          width: videoRef.current.width,
          height: videoRef.current.height,
        };
        const resized = faceapi.resizeResults(detections, displaySize);

        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          faceapi.draw.drawDetections(canvasRef.current, resized);
        }

        const labeledDescriptors = faces.map(
          (face) =>
            new faceapi.LabeledFaceDescriptors(
              `${face.firstName} ${face.lastName}`,
              [new Float32Array(face.descriptor)]
            )
        );

        const matcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
        const results = resized.map((d) => matcher.findBestMatch(d.descriptor));

        let foundMatch = false;
        results.forEach((result, i) => {
          const box = resized[i].detection.box;
          const isExpectedUser = result.label === `${firstName} ${lastName}`;

          if (canvasRef.current) {
            const drawBox = new faceapi.draw.DrawBox(box, {
              label: isExpectedUser ? result.label : "Not a match",
              boxColor: isExpectedUser ? "green" : "red",
              lineWidth: 2,
            });
            drawBox.draw(canvasRef.current);
          }

          if (isExpectedUser) {
            foundMatch = true;
            const [firstName, lastName] = result.label.split(" ");
            setRecognizedUser({ firstName, lastName });
          }
        });

        if (!foundMatch) {
          setRecognizedUser(null);
          setDetectionStatus("No matching face found");
        }
      } catch (error) {
        if (isMounted) {
          console.error("Face detection error:", error);
          setDetectionStatus("Detection error - try refreshing");
        }
      }
    };

    if (
      modelsLoaded &&
      videoRef.current &&
      canvasRef.current &&
      faces.length > 0
    ) {
      const interval = setInterval(detect, 500);
      return () => {
        isMounted = false;
        clearInterval(interval);
      };
    } else {
      setDetectionStatus(
        !modelsLoaded
          ? "Loading models..."
          : faces.length === 0
          ? "No registered faces to compare"
          : "Initializing video..."
      );
    }
  }, [faces, firstName, lastName, modelsLoaded]);

  // Handle recognized user
  useEffect(() => {
    let isMounted = true;

    const verifyAndFetchDetails = async () => {
      if (!isMounted) return;

      if (
        recognizedUser?.firstName === firstName &&
        recognizedUser?.lastName === lastName
      ) {
        try {
          setFaceMatch(true);
          const response = await axios.get(
            `http://localhost:3000/api/image/${firstName}/${lastName}`
          );

          if (isMounted) {
            setResidentDetails(response.data);

            // Stop camera stream
            if (videoRef.current?.srcObject) {
              const stream = videoRef.current.srcObject as MediaStream;
              stream.getTracks().forEach((track) => track.stop());
              videoRef.current.srcObject = null;
            }

            setCameraOn(false);
          }
        } catch (error) {
          if (isMounted) {
            setCameraOn(true); // Keep camera on if fetch fails
          }
        }
      } else if (isMounted) {
        setFaceMatch(false);
      }
    };

    verifyAndFetchDetails();

    return () => {
      isMounted = false;
    };
  }, [recognizedUser, firstName, lastName]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {faceMatch ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Identity Verified
          </h2>
          {residentDetails ? (
            <FaceVerifiedDetails residentDetails={residentDetails} />
          ) : (
            <p className="text-gray-600">Loading resident details...</p>
          )}
        </div>
      ) : cameraOn ? (
        <div className="w-full max-w-3xl space-y-4">
          <div className="relative w-full aspect-video border-2 border-gray-200 rounded-xl overflow-hidden">
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
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
            />
          </div>

          <div className="text-center">
            {recognizedUser ? (
              <p className="text-yellow-600 font-medium">
                Recognized: {recognizedUser.firstName} {recognizedUser.lastName}
                (not the expected user)
              </p>
            ) : (
              <p className="text-gray-600">{detectionStatus}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-red-600">
            Verification Failed
          </h2>
          <p className="text-gray-600">
            The detected face didn't match the expected user.
          </p>
          <button
            onClick={() => {
              setCameraOn(true);
              setRecognizedUser(null);
              setFaceMatch(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default FaceDetector;
