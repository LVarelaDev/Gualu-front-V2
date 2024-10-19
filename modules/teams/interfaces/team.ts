import type { Key } from 'react'

interface User {
	id: string
	first_name: string
	last_name: string
}

export interface TeamMember {
	id: string
	team_id: string
	user_id: string
	created_at: string
	updated_at: string
}

export interface Team {
	id: string
	name: string
	active: boolean
	leader_id: string
	created_at: string
	updated_at: string
	leader_team: User
	team_members: TeamMember[]
}

export interface InputTeam extends Pick<Team, 'name' | 'leader_id' | 'active'> {
	team_members?: string
}

export interface SubmitTeam extends Omit<InputTeam, 'team_members'> {
	team_members?: string[]
}
