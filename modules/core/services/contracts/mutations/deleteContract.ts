import axiosIntance from '@/lib/axios.config'

export const deleteContracts = async (id: string) => {
	const { data } = await axiosIntance.delete(`/contracts/${id}`)
	return data
}
