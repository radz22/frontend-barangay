import axios from "axios";
export const getUserData = async (id: string | undefined) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/auth/${id}`);
    return response.data; // Return data as needed
  } catch (error) {
    throw error;
  }
};
