import axios from "axios";

export const verifyCode = async ({
  email,
  code,
  password,
}: {
  email: string;
  code: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      "https://barangay-api-backend.onrender.com/api/verification/verify-code",
      { email, code, password },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
