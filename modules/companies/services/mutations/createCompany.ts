import axiosIntance from '@/lib/axios.config'
import { GenericResponse } from '@/models/responses/GenericResponse.model'
import type {
	SubmitCompany
} from '@/modules/companies/interfaces/company'

export const createCompany = async (newCompany: SubmitCompany) => {
	try {
		const { data } = await axiosIntance.post<GenericResponse<any>>(
			'companies',
			newCompany,
		)
		return data
	} catch (error) {
		console.error(error)
	}
}
