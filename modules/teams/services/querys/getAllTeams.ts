import type { Team } from '@/modules/teams/interfaces/team'

import axiosIntance from '@/lib/axios.config'
import type { DataResponse } from '@/modules/core/interfaces/dataResponse'

interface Params {
	page?: number
	limit?: number
	sort?: string
}
export const getAllTeams = async ({ page, limit = 7, sort }: Params) => {
	try {
		const response = await axiosIntance.get(
			`/teams?page=${page}&limit=${limit}&sort=${sort}`,
		)
		const data: DataResponse<Team> = await response.data

		return data
	} catch (error) {
		console.error(error)
	}
}
