import axiosIntance from '@/lib/axios.config'
import type { Contract } from '@/modules/contracts/interfaces/contract'

export const getOneContract = async (id: string) => {
	try {
		const { data } = await axiosIntance.get<Contract>(`/contracts/${id}`)
		return data
	} catch (error) {
		console.error(error)
	}
}
