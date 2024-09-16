interface User {
  id: string;
  first_name: string;
  last_name: string;
}

export interface Team {
  id: string;
  name: string;
  active: boolean;
  leader_id: string;
  created_at: string;
  updated_at: string;
  users: User;
}

export interface InputTeam extends Pick<Team, "name" | "leader_id" | "active"> {
  team_members?: string[]
}