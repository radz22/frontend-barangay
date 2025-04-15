import axios from "axios";
import { residentType } from "../type/user/resident-profilling-zod";
import {
  residentUpdate,
  ResidentNew,
} from "../type/user/resident-profilling-zod";
export const createResident = async (data: residentType) => {
  try {
    const response = await axios.post(
      "https://barangay-api-backend.onrender.com/api/resident",
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
      "https://barangay-api-backend.onrender.com/api/resident"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUserResidentDataById = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://barangay-api-backend.onrender.com/api/resident/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (id: string | null) => {
  try {
    const response = await axios.delete(
      `https://barangay-api-backend.onrender.com/api/resident/${id}`
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
      `https://barangay-api-backend.onrender.com/api/resident/${id}`,
      { descriptor }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateResident = async (data: ResidentNew) => {
  try {
    const response = await axios.put(
      `https://barangay-api-backend.onrender.com/api/resident/update/resident/${data.id}`,
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
        cloudinaryid: data.cloudinaryid,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateResidentValidate = async (data: residentUpdate) => {
  try {
    const response = await axios.post(
      `https://barangay-api-backend.onrender.com/api/residentupdate`,
      {
        updateid: data.updateid,
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
        image: data.cloudinaryphoto,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllUpdateApproval = async () => {
  try {
    const response = await axios.get(
      "https://barangay-api-backend.onrender.com/api/residentupdate"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const decline = async ({
  reason,
  reasonid,
}: {
  reason: string;
  reasonid: string;
}) => {
  try {
    const response = await axios.post(
      "https://barangay-api-backend.onrender.com/api/residentupdate/decline",
      {
        reason,
        reasonid,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReasonbyResident = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://barangay-api-backend.onrender.com/api/residentupdate/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
