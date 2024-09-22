'use client'
import { handleSubmitCompany } from '@/modules/companies/helpers/handleSubmitCompany'
import type {
	Company,
	InputCompany,
} from '@/modules/companies/interfaces/company'
import { toBase64 } from '@/modules/core/utils/convertToBase64'
import { Input } from '@nextui-org/input'
import { Button, Checkbox } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'

interface Props {
	companyData?: Company
}

const FormCompany = ({ companyData }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InputCompany>()
	const router = useRouter()

	const handleData: SubmitHandler<InputCompany> = async (data) => {
		let imgBase64 = ''
		if (data.picture.length > 0) {
			imgBase64 = await toBase64(data.picture[0])
		}

		const message = await handleSubmitCompany(
			{ ...data, picture: imgBase64 ?? undefined },
			companyData?.id,
		)
		console.log(message)
		reset()
		router.push('/companies')
		router.refresh()
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(handleData)}
				className="w-full py-4 px-4 flex flex-col gap-y-8 border rounded-2xl bg-white"
			>
				<h1 className="text-xl font-bold text-center py-3">
					{companyData ? 'Editar compañia' : 'Agregar nueva compañia'}
				</h1>

				{companyData?.picture && (
					<img
						src={companyData?.picture}
						alt={companyData?.name}
						width={56}
						height={30}
						className="w-14 h-auto"
					/>
				)}

				<Input
					type="file"
					label="Imagen de la compañia"
					labelPlacement="outside"
					size="lg"
					variant="bordered"
					accept="image/*"
					draggable
					{...register('picture', { required: !companyData })}
					isInvalid={errors.picture?.type === 'required'}
					errorMessage="Este campo es requerido!"
				/>
				<Input
					label="Nombre de la compañia"
					labelPlacement="outside"
					placeholder="Ingresa el nombre de la compañia"
					size="lg"
					variant="bordered"
					defaultValue={companyData?.name}
					{...register('name', { required: !companyData })} // si la compañia no existe entonces el campo es requerido
					isInvalid={errors.name?.type === 'required'}
					errorMessage="Este campo es requerido!"
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
		</>
	)
}

export default FormCompany
