import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import type { CompanyDto } from "@/modules/companies/interfaces/company";

export const getAllCompanies = async () => {
  try {
    const { data } =
      await axiosIntance.get<GenericResponse<CompanyDto[]>>("companies");
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
