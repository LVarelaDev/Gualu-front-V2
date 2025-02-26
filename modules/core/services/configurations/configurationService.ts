import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import { getSession } from "next-auth/react";

export const importTariffFile = async (data: {
  companyId: string;
  file: File;
}): Promise<GenericResponse<any>> => {
  try {
    const formData = new FormData();

    formData.append("file", data.file);
    formData.append("companyId", data.companyId);

    const session = await getSession();

    const response = await axiosIntance.post<GenericResponse<any>>(
      `Configuration/ImportCommissionsFile`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "Content-type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch {
    throw "Error in importTariffFile";
  }
};
