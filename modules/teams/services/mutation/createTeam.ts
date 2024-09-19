import axiosIntance from '@/lib/axios.config'
import type { InputTeam } from '@/modules/teams/interfaces/team'

interface MessageResponse {
	message: string
}

export const createTeam = async (newTeam: InputTeam) => {
	try {
		const response = await axiosIntance.post('/teams', newTeam)
		const data: MessageResponse = await response.data
		return data
	} catch (error) {
		console.error(error)
	}
}
