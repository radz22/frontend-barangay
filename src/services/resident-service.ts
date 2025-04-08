import axios from "axios";
import { residentType } from "../type/user/resident-profilling-zod";
export const createResident = async (data: residentType) => {
  try {
    const response = await axios.post(
      "https://backend-api-5m5k.onrender.com/api/resident",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllResidentData = async () => {
  try {
    const response = await axios.get(
      "https://backend-api-5m5k.onrender.com/api/resident"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUserResidentDataById = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://backend-api-5m5k.onrender.com/api/resident/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (id: string | null) => {
  try {
    const response = await axios.delete(
      `https://backend-api-5m5k.onrender.com/api/resident/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const registerFace = async ({
  id,
  descriptor,
}: {
  id: string;
  descriptor: number[];
}) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/resident/${id}`,
      { descriptor }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
