import axios from "axios";
import { residentType } from "../type/user/resident-profilling-zod";
import { ResidentFormData } from "../components/face-verified-details";
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
      `https://backend-api-5m5k.onrender.com/api/resident/${id}`,
      { descriptor }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateResident = async (data: ResidentFormData) => {
  try {
    const response = await axios.put(
      `https://backend-api-5m5k.onrender.com/api/resident/update/resident/${data.id}`,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        middlename: data.middlename,
        dateofbirth: data.dateofbirth,
        gender: data.gender,
        civilstatus: data.civilstatus,
        nationality: data.nationality,
        mobilenumber: Number(data.mobilenumber),
        address: data.address,
        streetname: data.streetname,
        province: data.province,
        isUpdated: data.isUpdated,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
