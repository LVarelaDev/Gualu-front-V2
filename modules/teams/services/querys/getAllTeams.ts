import type { TeamTable } from "@/modules/teams/interfaces/team";

import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";

export const getAllTeams = async (): Promise<TeamTable[]> => {
  try {
    const { data } =
      await axiosIntance.get<GenericResponse<TeamTable[]>>(`teams`);

    return data.data;
  } catch (error) {
    throw new Error("error en getAllTeams");
  }
};
