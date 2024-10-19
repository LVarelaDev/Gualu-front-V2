'use client'
import axiosIntance from '@/lib/axios.config'

export const deleteContract = async (id: string) => {
	try {
		const { data } = await axiosIntance.delete(`/contracts/${id}`)
		return data
	} catch (error) {
		console.error(error)
	}
}
