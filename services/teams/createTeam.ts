import axiosIntance from "@/lib/axios.config";
import type { InputTeam } from "@/models/teams/team";

export const createTeam = async (newTeam: InputTeam) => {
  try {
    const response = await axiosIntance.post("/teams", newTeam)
    const data = await response.data
    return data
  } catch (error) {
    console.error(error);

  }
}