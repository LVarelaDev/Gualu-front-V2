import axiosIntance from "@/lib/axios.config";
import type { NotFoundResponse } from "@/modules/core/interfaces/api/notFoundResponse";
import type { Team } from "@/modules/teams/interfaces/team";
import { AxiosError } from "axios";

interface DataResponse extends Team, NotFoundResponse {}

export const getOneTeam = async (id?: string) => {
  try {
    const { data } = await axiosIntance.get<DataResponse>(`/teams/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
