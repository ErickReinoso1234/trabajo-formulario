import AxiosInstance from "./axios";
import { user } from "@/interfaces/user";
// Crear usuarios 
export const createUsers = async (user: user) => {
  try {
    const response = await AxiosInstance.post("/Rutas", user);
    return response.data;
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al crear usuario:", error);
    throw error;
  }
};


