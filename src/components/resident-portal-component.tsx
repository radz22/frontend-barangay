import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";
import FaceDetector from "../components/FaceDetector";
import SkeletonLoader from "./loading/loading-screen";
import { Link } from "react-router-dom";
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
  descriptor: number[];
  mobilenumber?: number;
  age: number;
  streetname?: string;
  province?: string;

  citizenship: string;
  city: string;
  currentschoolenrollment: string;
  educationalattainment: string;
  emailadress: string;
  emergencycontactname: string;
  emergencycontactnumber: string;
  employmentstatus: string;
  placeofbirth: string;
  relationshiptoemergencycontact: string;
  schooltype: string;

  isUpdated?: boolean;
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
          "https://grumpy-trains-pump.loca.lt/api/resident/resident"
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
      <div>
        <Link to="/page/resident-portal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 48 48"
          >
            <path
              fill="#797979"
              fillRule="evenodd"
              stroke="#797979"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M44 40.836q-7.34-8.96-13.036-10.168t-10.846-.365V41L4 23.545L20.118 7v10.167q9.523.075 16.192 6.833q6.668 6.758 7.69 16.836Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      {isLoading ? <SkeletonLoader /> : <FaceDetector faces={faces} />}
    </div>
  );
};

export default ResidentPortalComponent;
