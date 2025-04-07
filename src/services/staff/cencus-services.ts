import axios from "axios";
import { cencusType } from "../../type/user/cencus-zod";

export const createCencus = async (data: cencusType) => {
  try {
    const response = await axios.post("http://localhost:3000/api/cencus", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllData = async () => {
  try {
    const response = await axios.get(
      "https://backend-api-5m5k.onrender.com/api/cencus"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserCencusData = async (emaillaccount: string | undefined) => {
  try {
    const response = await axios.get(
      `https://backend-api-5m5k.onrender.com/api/cencus/${emaillaccount}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUserCencusDataById = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://backend-api-5m5k.onrender.com/api/cencus/user/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (id: string | null | undefined) => {
  try {
    const response = await axios.delete(
      `https://backend-api-5m5k.onrender.com/api/cencus/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteArchiveCencusbyId = async (id: string | null) => {
  try {
    const response = await axios.delete(
      `https://backend-api-5m5k.onrender.com/api/cencus/archive/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const restoredCencusbyId = async (id: string | null | undefined) => {
  try {
    const response = await axios.post(
      "https://backend-api-5m5k.onrender.com/api/cencus/restore",
      {
        id: id,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
