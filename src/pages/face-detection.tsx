import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";
import FaceRegister from "../components/FaceRegister";
import FaceDetector from "../components/FaceDetector";
export interface FaceData {
  _id: string;
  firstName: string;
  lastName: string;
  descriptor: number[];
}

const FaceRecognition: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [faces, setFaces] = useState<FaceData[]>([]);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const loadModelsAndFaces = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
          faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
        ]);

        const { data } = await axios.get("http://localhost:3000/api/image");
        setFaces(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Initialization error:", error);
      }
    };

    loadModelsAndFaces();
  }, []);
  console.log(faces);
  const handleNewFace = (face: FaceData) => {
    setFaces((prev) => [...prev, face]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Face Recognition System</h1>
      {isLoading ? (
        <p>Loading models...</p>
      ) : showRegister ? (
        <FaceRegister
          onRegister={handleNewFace}
          onCancel={() => setShowRegister(false)}
        />
      ) : (
        <FaceDetector
          faces={faces}
          onRegisterClick={() => setShowRegister(true)}
        />
      )}
    </div>
  );
};

export default FaceRecognition;
