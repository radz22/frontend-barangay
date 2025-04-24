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
      "https://backend-barangay-production.up.railway.app/api/verification/verify-code",
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
