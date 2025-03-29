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
    const response = await axios.get("http://localhost:3000/api/cencus");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserCencusData = async (emaillaccount: string | undefined) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/cencus/${emaillaccount}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUserCencusDataById = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/cencus/user/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (id: string | null) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/cencus/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
