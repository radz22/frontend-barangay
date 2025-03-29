import axios from "axios";
import { residentType } from "../type/user/resident-profilling-zod";
export const createResident = async (data: residentType) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/resident",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllResidentData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/resident");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUserResidentDataById = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/resident/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (id: string | null) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/resident/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
