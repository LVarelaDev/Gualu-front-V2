import axiosIntance from '@/lib/axios.config'
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'
import type { SubmitTeam } from '@/modules/teams/interfaces/team'

export const createTeam = async (newTeam: SubmitTeam) => {
	try {
		const { data } = await axiosIntance.post<MessageResponse>('/teams', newTeam)
		return data
	} catch (error) {
		console.error(error)
	}
}
