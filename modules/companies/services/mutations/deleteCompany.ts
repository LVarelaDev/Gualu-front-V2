import axiosIntance from '@/lib/axios.config'
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'

export const deleteCompany = async (id: string) => {
	try {
		const { data } = await axiosIntance.delete<MessageResponse>(
			`/companies/${id}`,
		)
		return data
	} catch (error) {
		console.error(error)
	}
}
