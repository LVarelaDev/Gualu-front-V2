import axiosIntance from '@/lib/axios.config'
import type { Contract } from '@/modules/core/interfaces/contract/contract'

export const updateContract = async (contract: Contract, id: string) => {
	try {
		const { data } = await axiosIntance.put(`/contracts/${id}`, contract)
		return data
	} catch (error) {
		console.error(error)
	}
}
