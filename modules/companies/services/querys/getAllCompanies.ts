import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import type {
  Company,
  CompanyDto,
} from "@/modules/companies/interfaces/company";

export enum EndpointCompanies {
  companies = "Companies",
}

export const getAllCompanies = async () => {
  try {
    const { data } = await axiosIntance.get<GenericResponse<Company[]>>(
      EndpointCompanies.companies
    );
    console.log("data.data", data.data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
