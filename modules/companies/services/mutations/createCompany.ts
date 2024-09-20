import axiosIntance from '@/lib/axios.config'
import type { InputCompany } from '@/modules/companies/interfaces/inputCompany'
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'

export const createTeam = async (newCompany: InputCompany) => {
	try {
		const { data } = await axiosIntance.post<MessageResponse>(
			'/companies',
			newCompany,
		)
		return data
	} catch (error) {
		console.error(error)
	}
}
