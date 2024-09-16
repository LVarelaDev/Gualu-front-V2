import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { CreateUserDto } from '@/models/users/userDTO'
import { createUser } from '@/services/users/user.service'
import { TypeResponse } from '@/utils/enums/enums'
import { toast } from 'sonner'

export const useCreateOrUpdate = (id?: string) => {
	const router = useRouter()
	const notify = (message: string, key: number) => {
		if (key === TypeResponse.success) {
			toast.success(message)
		} else {
			toast.error(message)
		}
	}

	const [loading, setLoading] = useState(false)

	const handleCreateUser = async (data: any) => {
		setLoading(true)
		const payload: CreateUserDto = {
			names: data.names,
			lastNames: data.lastNames,
			email: data.email,
			nif: data.nif,
			rol: data.rol,
			typeCategory: data.typeCategory,
			permissions: data.permissions,
			autoInvoiceData: {
				dni: data.dni,
				addres: data.addres,
				bankAccount: data.bankAccount,
				iban: data.iban,
				iva: data.iva,
				population: data.population,
				postalCode: data.postalCode,
				province: data.province,
				retentionImport: data.retentionImport,
			},
		}
		const response = await createUser(payload)

		setLoading(false)
		notify(response.value, response.key)

		if (response.key === TypeResponse.success) {
			router.push('/users')
		}
	}

	const handleUpdateUser = async (data: any) => {
		setLoading(true)
		const payload: CreateUserDto = {
			names: data.names,
			lastNames: data.lastNames,
			email: data.email,
			nif: data.nif,
			rol: data.rol,
			typeCategory: data.typeCategory,
			permissions: data.permissions,
			autoInvoiceData: {
				dni: data.dni,
				addres: data.addres,
				bankAccount: data.bankAccount,
				iban: data.iban,
				iva: data.iva,
				population: data.population,
				postalCode: data.postalCode,
				province: data.province,
				retentionImport: data.retentionImport,
			},
		}
		const response = await createUser(payload)

		setLoading(false)
		notify(response.value, response.key)

		if (response.key === 0) {
			router.push('/users')
		}
	}

	return {
		handleCreateUser,
		loading,
		handleUpdateUser,
	}
}
