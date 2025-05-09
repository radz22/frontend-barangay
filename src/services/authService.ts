import axios from "axios";
import { signinAndsignupType } from "../type/user/signin-zod";
import {
  signintype,
  resetpasswordtype,
  forgotpasswordtype,
} from "../type/user/auth-type";

export const signupService = async (signup: signinAndsignupType) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/auth/signup`,
      signup,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signinService = async (signin: signintype) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/auth/signin`,
      signin,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutService = async () => {
  const response = await axios.post(
    "http://localhost:3000/api/auth/logout",
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};
export const forgotPasswordService = async (email: forgotpasswordtype) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/forgot-password",
      email
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordService = async (data: resetpasswordtype) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/auth/${data.id}`,
      {
        newpassword: data.newpassword,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getStaffAccountData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/auth");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteAccount = async (id: string | null) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/auth/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAdminAccountData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/auth/data/admin"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
