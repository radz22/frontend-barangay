import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";

interface FaceData {
  _id: string;
  firstName: string;
  lastName: string;
  descriptor: number[];
}

const FaceRecognition: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [faces, setFaces] = useState<FaceData[]>([]);
  const [recognizedUser, setRecognizedUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Load models and known faces
  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
          faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
        ]);
        setIsLoading(false);
        loadKnownFaces();
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };

    const loadKnownFaces = async () => {
      try {
        const response = await axios.get<FaceData[]>(
          "http://localhost:3000/api/image"
        );
        setFaces(response.data);
      } catch (error) {
        console.error("Error loading known faces:", error);
      }
    };

    loadModels();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startVideo();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isLoading]);

  // Face detection and recognition
  useEffect(() => {
    if (isLoading || !videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const displaySize = {
      width: videoRef.current.width,
      height: videoRef.current.height,
    };
    faceapi.matchDimensions(canvas, displaySize);

    const detectFaces = async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current!)
        .withFaceLandmarks()
        .withFaceDescriptors();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);

      if (faces.length > 0 && detections.length > 0) {
        const labeledDescriptors = faces.map(
          (face) =>
            new faceapi.LabeledFaceDescriptors(
              `${face.firstName} ${face.lastName}`,
              [new Float32Array(face.descriptor)]
            )
        );

        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
        const results = resizedDetections.map((d) =>
          faceMatcher.findBestMatch(d.descriptor)
        );

        results.forEach((result, i) => {
          const box = resizedDetections[i].detection.box;
          const drawBox = new faceapi.draw.DrawBox(box, {
            label: result.toString(),
          });
          drawBox.draw(canvas);

          if (result.label !== "unknown") {
            const [firstName, lastName] = result.label.split(" ");
            setRecognizedUser({ firstName, lastName });
          } else {
            setRecognizedUser(null);
          }
        });
      }
    };

    const interval = setInterval(detectFaces, 500);
    return () => clearInterval(interval);
  }, [isLoading, faces]);

  const registerFace = async () => {
    if (!videoRef.current || !firstName || !lastName) return;

    try {
      const detections = await faceapi
        .detectSingleFace(videoRef.current)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (detections) {
        const descriptor = Array.from(detections.descriptor as Float32Array);

        const response = await axios.post("http://localhost:3000/api/image", {
          firstName,
          lastName,
          descriptor,
        });

        setFaces([...faces, response.data]);
        setFirstName("");
        setLastName("");
        setShowRegistration(false);
      }
    } catch (error) {
      console.error("Error registering face:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Face Recognition System</h1>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <video
          ref={videoRef}
          width="720"
          height="560"
          autoPlay
          muted
          playsInline
          style={{ width: "100%", border: "1px solid #ccc" }}
        />
        <canvas
          ref={canvasRef}
          width="720"
          height="560"
          style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />
      </div>
      {recognizedUser ? (
        <div
          style={{
            padding: "10px",
            margin: "10px 0",
            backgroundColor: "#e6f7ff",
            border: "1px solid #91d5ff",
          }}
        >
          <h2>
            Recognized: {recognizedUser.firstName} {recognizedUser.lastName}
          </h2>
        </div>
      ) : (
        <div
          style={{
            padding: "10px",
            margin: "10px 0",
            backgroundColor: "#fff2e8",
            border: "1px solid #ffbb96",
          }}
        >
          <p>No recognized face detected</p>
        </div>
      )}
      <button
        onClick={() => setShowRegistration(!showRegistration)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#1890ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {showRegistration ? "Cancel Registration" : "Register New Face"}
      </button>
      {showRegistration && (
        <div
          style={{
            padding: "20px",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            marginBottom: "20px",
          }}
        >
          <h2>Register New Face</h2>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              First Name:
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Last Name:
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button
            onClick={registerFace}
            disabled={!firstName || !lastName}
            style={{
              padding: "10px 15px",
              backgroundColor: "#52c41a",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Register Face
          </button>
        </div>
      )}
      {isLoading && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f6ffed",
            border: "1px solid #b7eb8f",
          }}
        >
          <p>Loading face recognition models...</p>
        </div>
      )}{" "}
    </div>
  );
};

export default FaceRecognition;
