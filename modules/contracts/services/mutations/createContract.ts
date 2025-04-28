import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import type { ContractPayload } from "@/modules/core/interfaces/contract/contract";

export const createContract = async (
  contract: ContractPayload
): Promise<GenericResponse<any>> => {
  try {
    const { data } = await axiosIntance.post<GenericResponse<any>>(
      "/Contract",
      contract
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
