import type { Team } from "@/models/teams/team";
import type { DataResponse } from "@/types/dataResponse";

import axiosIntance from "@/lib/axios.config";

interface Params {
  q: string;
  page?: number;
  limit?: number;
}
export const searchTeam = async ({ q, page = 1, limit = 6 }: Params) => {
  try {
    const response = await axiosIntance.get(
      `/teams/search?q=${q}&page=${page}&limit=${limit}`,
    );
    const data: DataResponse<Team> = await response.data;


    return data;
  } catch (error) {
    console.error(error);
  }
};
