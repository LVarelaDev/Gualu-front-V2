import axiosIntance from '@/lib/axios.config'
import type {
	InputCompany,
	SubmitCompany,
} from '@/modules/companies/interfaces/company'
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'

export const createCompany = async (newCompany: SubmitCompany) => {
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
