import axiosIntance from '@/lib/axios.config'
import type { Allcontract } from '@/modules/contracts/interfaces/allContract'

export const getAllContracts = async () => {
	try {
		const { data } = await axiosIntance.get<Allcontract[]>('/contracts')
		return data
	} catch (error) {
		console.error(error)
	}
}
