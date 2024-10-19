import axiosIntance from '@/lib/axios.config'
import type { OneContract } from '@/modules/contracts/modules/details/interfaces/oneContract'

export const getOneContract = async (id: string) => {
	try {
		const { data } = await axiosIntance.get<OneContract>(`/contracts/${id}`)
		return data
	} catch (error) {
		console.error(error)
	}
}
