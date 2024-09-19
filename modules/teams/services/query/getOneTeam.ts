import axiosIntance from '@/lib/axios.config'
import type { Team } from '@/modules/teams/interfaces/team'
import { AxiosError } from 'axios'

export const getOneTeam = async (id?: string) => {
	try {
		const { data } = await axiosIntance.get<Team>(`/teams/${id}`)
		return data
	} catch (error) {
		if (error instanceof AxiosError) {
			return undefined
		}
	}
}
