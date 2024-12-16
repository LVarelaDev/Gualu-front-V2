import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import type { OneCompany } from "@/modules/companies/interfaces/company";

export const getOneCompany = async (id: string) => {
  try {
    const { data } = await axiosIntance.get<GenericResponse<OneCompany>>(
      `companies/${id}`
    );
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
