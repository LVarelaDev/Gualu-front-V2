import axiosIntance from '@/lib/axios.config'

interface Params {
	id: string
}
export const deleteTeam = async ({ id }: Params) => {
	try {
		const response = await axiosIntance.delete(`/teams/${id}`)
		const data = await response.data

		return data
	} catch (error) {
		console.error(error)
	}
}
