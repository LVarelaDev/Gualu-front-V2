import axiosIntance from '@/lib/axios.config'
import type { Company } from '@/modules/companies/interfaces/company'

export const getAllCompanies = async () => {
	try {
		const { data } = await axiosIntance.get<Company[]>('/companies')
		return data
	} catch (error) {
		console.error(error)
	}
}
