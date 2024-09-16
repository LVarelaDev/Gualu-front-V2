import type { Team } from '@/models/teams/team'

import axiosIntance from '@/lib/axios.config'
import { DataResponse } from '@/types/dataResponse'

interface Params {
	page?: number
	limit?: number
}
export const getAllTeams = async ({ page, limit }: Params) => {
	try {
		const response = await axiosIntance.get(
			`/teams?page=${page}&limit=${limit}`,
		)
		const data: DataResponse<Team> = await response.data

		return data
	} catch (error) {
		console.error(error)
	}
}
