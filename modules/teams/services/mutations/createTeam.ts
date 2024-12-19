import axiosIntance from '@/lib/axios.config'
import { GenericResponse } from '@/models/responses/GenericResponse.model'
import type { SubmitTeam } from '@/modules/teams/interfaces/team'

export const createTeam = async (newTeam: SubmitTeam) => {
	try {
		const { data } = await axiosIntance.post<GenericResponse<any>>('teams', newTeam)
		return data
	} catch (error) {
		console.error(error)
	}
}
