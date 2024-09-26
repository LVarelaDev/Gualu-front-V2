import axiosIntance from '@/lib/axios.config'
import { Contract } from '@/modules/contracts/interfaces/contract'

export const updateContract = async (contract: Contract, id: string) => {
	try {
		const { data } = await axiosIntance.put(`/contracts/${id}`, contract)
		return data
	} catch (error) {
		console.error(error)
	}
}
