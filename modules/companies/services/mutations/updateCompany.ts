import axiosIntance from '@/lib/axios.config'
import type { InputCompany } from '@/modules/companies/interfaces/inputCompany'
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'

export const updateCompany = async (company: InputCompany, id: string) => {
	try {
		const { data } = await axiosIntance.put<MessageResponse>(
			`/companies/${id}`,
			company,
		)
		return data
	} catch (error) {
		console.error(error)
	}
}
