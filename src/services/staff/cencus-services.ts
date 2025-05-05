import axios from "axios";
import { cencusType } from "../../type/user/cencus-zod";

export const createCencus = async (data: cencusType) => {
  try {
    const response = await axios.post(
      "https://grumpy-trains-pump.loca.lt/api/cencus",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllData = async () => {
  try {
    const response = await axios.get(
      "https://grumpy-trains-pump.loca.lt/api/cencus"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserCencusData = async (emaillaccount: string | undefined) => {
  try {
    const response = await axios.get(
      `https://grumpy-trains-pump.loca.lt/api/cencus/${emaillaccount}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUserCencusDataById = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://grumpy-trains-pump.loca.lt/api/cencus/user/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (id: string | null | undefined) => {
  try {
    const response = await axios.delete(
      `https://grumpy-trains-pump.loca.lt/api/cencus/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteArchiveCencusbyId = async (id: string | null) => {
  try {
    const response = await axios.delete(
      `https://grumpy-trains-pump.loca.lt/api/cencus/archive/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const restoredCencusbyId = async (id: string | null | undefined) => {
  try {
    const response = await axios.post(
      "https://grumpy-trains-pump.loca.lt/api/cencus/restore",
      {
        id: id,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
