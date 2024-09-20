import axiosIntance from '@/lib/axios.config'
import type { Company } from '@/modules/companies/interfaces/company'

export const getOneCompany = async (id: string) => {
	try {
		const { data } = await axiosIntance.get<Company>(`/companies/${id}`)
		return data
	} catch (error) {
		console.error(error)
	}
}
