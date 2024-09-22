'use server'
import axiosIntance from '@/lib/axios.config'
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'

export const deleteTeam = async (id: string) => {
	try {
		const { data } = await axiosIntance.delete<MessageResponse>(`/teams/${id}`)
		return data
	} catch (error) {
		console.error(error)
	}
}
