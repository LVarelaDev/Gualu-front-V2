import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import { SelectedDocumentDto } from "../DocumentsForm";

export const saveDocumentService = async (
  cups: string,
  filesSelected: SelectedDocumentDto[]
): Promise<GenericResponse<any>> => {
  const formData = new FormData();

  filesSelected.forEach((doc, index) => {
    formData.append("cups", cups);
    formData.append(`file`, doc.file);
    formData.append(`files[${index}].typeDocument`, doc.type);
  });
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
  } catch {
    throw "Error creando el documento";
  }
};
