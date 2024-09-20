import axiosIntance from '@/lib/axios.config'
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'

interface Params {
	id: string
}
export const deleteTeam = async ({ id }: Params) => {
	try {
		const { data } = await axiosIntance.delete<MessageResponse>(`/teams/${id}`)
		return data
	} catch (error) {
		console.error(error)
	}
}
