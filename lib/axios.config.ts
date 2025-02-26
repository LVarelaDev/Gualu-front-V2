import axios from "axios";
import { getSession } from "next-auth/react";

// Verifica que la URL base esté configurada
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL no está configurado");
}

export const axiosIntance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosIntance.interceptors.response.use(
  async (response) => {
    const session = await getSession();
    console.log("session", session);
    if (session && session.user.token) {
      console.log("session", session);
      response.headers.Authorization = `Bearer ${session.user.token}`;
    }
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Error response:", error.response);
      if (error.response.status === 401) {
        console.error("No autorizado");
      } else if (error.response.status === 500) {
        console.error("Error interno del servidor");
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up request:", error.message);
    }

    return Promise.reject(new Error(error));
  }
);

export default axiosIntance;
