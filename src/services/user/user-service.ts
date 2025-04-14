import axios from "axios";
export const getUserData = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://backend-api-5m5k.onrender.com/api/auth/${id}`
    );
    return response.data; // Return data as needed
  } catch (error) {
    throw error;
  }
};
