import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import type {
  InputCompany,
  SubmitCompany,
} from "@/modules/companies/interfaces/company";
import type { MessageResponse } from "@/modules/core/interfaces/messageResponse";

export const updateCompany = async (
  company: Partial<SubmitCompany>,
  id: string
) => {
  try {
    const { data } = await axiosIntance.put<GenericResponse<any>>(
      `companies/${+id}`,
      company
    );
    return data;
  } catch (error) {
    throw error;
  }
};
