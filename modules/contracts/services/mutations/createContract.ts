import axiosIntance from '@/lib/axios.config'
import type { Contract } from '@/modules/contracts/interfaces/contract'

export const createContract = async (contract: Contract) => {
	try {
		const { data } = await axiosIntance.post('/contracts', contract)
		return data
	} catch (error) {
		console.error(error)
	}
}
