import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";

export const InputFileService = async (
  formData: FormData
): Promise<GenericResponse<any>> => {
  try {
    const { data } = await axiosIntance.post(
      "Configurations/import-commissions-file",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al importar el archivo de comisiones");
  }
};
