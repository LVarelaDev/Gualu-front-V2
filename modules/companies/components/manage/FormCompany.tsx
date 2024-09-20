'use client'
import type { Company } from '@/modules/companies/interfaces/company'
import type { InputCompany } from '@/modules/companies/interfaces/inputCompany'
import { Input } from '@nextui-org/input'
import { Button, Checkbox } from '@nextui-org/react'
import { type SubmitHandler, useForm } from 'react-hook-form'

interface Props {
	companyData?: Company
}

const FormCompany = ({ companyData }: Props) => {
	const { register, handleSubmit } = useForm<InputCompany>()

	const handleData: SubmitHandler<InputCompany> = (data) => {
		console.log(data)
	}
	return (
		<form
			onSubmit={handleSubmit(handleData)}
			className="w-full py-8 px-4 flex flex-col gap-y-8 border rounded-2xl"
		>
			<h1 className="text-xl font-bold text-center py-3">
				{companyData ? 'Editar compañia' : 'Agregar nueva compañia'}
			</h1>

			<Input
				type="file"
				label="Imagen de la compañia"
				labelPlacement="outside"
				size="lg"
				variant="bordered"
				{...register('picture', { required: true })}
			/>

			<Input
				label="Nombre de la compañia"
				labelPlacement="outside"
				placeholder="Ingresa el nombre de la compañia"
				size="lg"
				variant="bordered"
				defaultValue={companyData?.name}
				{...register('name')}
			/>

			<div className="flex items-center gap-x-1">
				<Checkbox
					color="primary"
					defaultSelected={companyData?.active ?? true}
					{...register('active')}
				/>
				<label htmlFor="active">Compañia Activa</label>
			</div>

			<Button type="submit" color="primary">
				{companyData ? 'Editar Compañia' : 'Agregar Compañia'}
			</Button>
		</form>
	)
}

export default FormCompany
