import axiosIntance from '@/lib/axios.config'
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'
import type { InputTeam } from '@/modules/teams/interfaces/team'
import { AxiosError } from 'axios'

export const updateTeam = async (team: InputTeam, id: string) => {
	try {
		const { data } = await axiosIntance.put<MessageResponse>(
			`/teams/${id}`,
			team,
		)
		return data
	} catch (error) {
		if (error instanceof AxiosError) {
			console.error(error.response?.data)
		}
	}
}
