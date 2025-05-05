import axios from "axios";

export const getCookie = async () => {
  try {
    const response = await axios.get(
      "https://grumpy-trains-pump.loca.lt/api/cookie",
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching cookies:", error);
    throw error;
  }
};
