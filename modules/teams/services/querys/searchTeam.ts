import type { DataResponse } from '@/modules/core/interfaces/dataResponse'
import type { Team } from '@/modules/teams/interfaces/team'

import axiosIntance from '@/lib/axios.config'

interface Params {
	q: string
	page?: number
	limit?: number
}
export const searchTeam = async ({ q, page = 1, limit = 5 }: Params) => {
	try {
		const { data } = await axiosIntance.get<DataResponse<Team>>(
			`/teams/search?q=${q}&page=${page}&limit=${limit}`,
		)

		return data
	} catch (error) {
		console.error(error)
	}
}
