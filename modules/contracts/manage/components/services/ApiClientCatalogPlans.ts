import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";

export const getAccessTariffs = async (
  companyId: number
): Promise<any[] | null> => {
  try {
    const response = (
      await axiosIntance.get<GenericResponse<any[]>>(
        `AccessTariff?company=${companyId}`
      )
    ).data;
    return response.data;
  } catch {
    return null;
  }
};

export const getPlansByAccessTariff = async (
  accessTariffId: number
): Promise<any[] | null> => {
  try {
    const response = (
      await axiosIntance.get<GenericResponse<any[]>>(
        `Plans?accessTariffId=${accessTariffId}`
      )
    ).data;
    return response.data;
  } catch {
    return null;
  }
};

export const getConceptsByPlanId = async (
  planId: number
): Promise<any[] | null> => {
  try {
    const response = (
      await axiosIntance.get<GenericResponse<any[]>>(
        `Concepts?planId=${planId}`
      )
    ).data;
    return response.data;
  } catch {
    return null;
  }
};

export const getExtrasByPlanId = async (
  planId: number
): Promise<any[] | null> => {
  try {
    const response = (
      await axiosIntance.get<GenericResponse<any[]>>(`Extras?planId=${planId}`)
    ).data;
    return response.data;
  } catch {
    return null;
  }
};
