import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import type { InputCompany } from "@/modules/companies/interfaces/company";

export const createCompany = async (newCompany: InputCompany) => {
  try {
    const formData = new FormData();

    formData.append("name", newCompany.name);
    formData.append("picture", newCompany.picture);

    const { data } = await axiosIntance.post<GenericResponse<any>>(
      "companies",
      newCompany,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
