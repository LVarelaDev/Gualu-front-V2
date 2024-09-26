import axiosIntance from '@/lib/axios.config'
import type { Contract } from '@/modules/contracts/interfaces/contract'

export const getAllContracts = async () => {
	try {
		const { data } = await axiosIntance.get<Contract[]>('/contracts')
		return data
	} catch (error) {
		console.error(error)
	}
}
