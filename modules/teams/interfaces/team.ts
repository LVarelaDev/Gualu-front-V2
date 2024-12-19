import { UserDto } from "@/models/users/userDTO";
import type { Key } from "react";

interface User {
  id: string;
  first_name: string;
  last_name: string;
}

export interface TeamMember {
  id: string;
  team_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface Team {
  id: string;
  name: string;
  active: boolean;
  leaderId: number;
  createdAt: string;
  updatedAt: string;
  leader_team: User;
  membersId: TeamMember[];
}

export interface TeamTable extends Omit<Team, "membersId" | "leader_team"> {
  leader: UserDto;
}

export interface InputTeam extends Pick<Team, "name" | "leaderId" | "active"> {
  membersId?: string;
}

export interface SubmitTeam extends Omit<InputTeam, "membersId"> {
  membersId?: number[];
}
