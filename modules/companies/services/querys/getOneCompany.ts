import axiosIntance from '@/lib/axios.config'
import type { OneCompany } from '@/modules/companies/interfaces/company'

export const getOneCompany = async (id: string) => {
	try {
		const { data } = await axiosIntance.get<OneCompany>(`/companies/${id}`)
		return data
	} catch (error) {
		console.error(error)
	}
}
