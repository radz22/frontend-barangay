import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";
import FaceDetector from "../components/FaceDetector";
export interface Resident {
  _id?: string;
  staffaccountcreate?: string;
  cencusid?: string;
  firstName: string;
  lastName: string;
  middlename?: string;
  dateofbirth: string;
  gender: "male" | "female" | "other";
  civilstatus: "single" | "married" | "widowed" | "separated";
  descriptor: number[]; // Fixed to 128 elements in implementation
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

const ResidentPortalComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [faces, setFaces] = useState<Resident[]>([]);

  useEffect(() => {
    const loadModelsAndFaces = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
          faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
        ]);

        const { data } = await axios.get(
          "http://localhost:3000/api/resident/resident"
        );
        setFaces(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Initialization error:", error);
      }
    };

    loadModelsAndFaces();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Face Recognition System</h1>
      {isLoading ? <p>Loading models...</p> : <FaceDetector faces={faces} />}
    </div>
  );
};

export default ResidentPortalComponent;
