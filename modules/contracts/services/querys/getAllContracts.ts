import axiosIntance from "@/lib/axios.config";
import { ContractDto } from "../../manage/types/contractDto";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import { InformationActionsContractDto } from "../../acitions/interfaces/InformationAction";

export enum EndpointsContract {
  Contract = "Contract",
}

export const getAllContracts = async (): Promise<ContractDto[]> => {
  try {
    const { data } = await axiosIntance.get<GenericResponse<ContractDto[]>>(
      EndpointsContract.Contract
    );
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching contracts");
  }
};

export const getContractByCups = async (
  cups: string
): Promise<InformationActionsContractDto> => {
  try {
    const { data } = await axiosIntance.get<
      GenericResponse<InformationActionsContractDto>
    >(`${EndpointsContract.Contract}/${cups}`);
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching contracts");
  }
};
