import type { Team, TeamTable } from "@/modules/teams/interfaces/team";

import axiosIntance from "@/lib/axios.config";
import type { DataResponse } from "@/modules/core/interfaces/dataResponse";
import { GenericResponse } from "@/models/responses/GenericResponse.model";

// interface Params {
//   page?: number;
//   limit?: number;
//   sort?: string;
// }
// {
// 	page,
// 	limit = 5,
// 	sort = "desc",
//   }: Params
export const getAllTeams = async (): Promise<TeamTable[]> => {
  try {
    const { data } =
      await axiosIntance.get<GenericResponse<TeamTable[]>>(`teams`);
    // const {data} = await axiosIntance.get<GenericResponse<TeamTable[]>>(
    //   `teams?page=${page ?? 1}&limit=${limit ?? 5}&sort=${sort ?? "desc"}`
    // );

    return data.data;
  } catch (error) {
    throw new Error("error en getAllTeams");
  }
};
