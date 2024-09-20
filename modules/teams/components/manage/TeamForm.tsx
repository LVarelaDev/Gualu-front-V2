'use client'

import type { UserDto } from '@/models/users/userDTO'
import useHandleSubmit from '@/modules/teams/hooks/useHandleSubmit'
import type { InputTeam, Team } from '@/modules/teams/interfaces/team'
import { Button } from '@nextui-org/button'
import {
	AutocompleteItem,
	Checkbox,
	Input,
	Select,
	SelectItem,
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'

interface Props {
	userData: UserDto[]
	teamData?: Team
}
const TeamForm = ({ userData, teamData }: Props) => {
	const { refresh } = useRouter()
	const { handleSubmitTeam } = useHandleSubmit()
	const memberIds = teamData?.team_members.map((member) => member.user_id)

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<InputTeam>()

	const submitData: SubmitHandler<InputTeam> = (data) => {
		handleSubmitTeam({ data, teamId: teamData?.id })
		reset()
		refresh()
	}
	return (
		<>
			<form
				onSubmit={handleSubmit(submitData)}
				className="w-full flex flex-col gap-y-5 border rounded-2xl px-4 py-4 bg-white"
			>
				<h1 className="text-xl font-bold text-center py-3">
					{teamData ? 'Editar Equipo' : 'Agregar nuevo Equipo'}
				</h1>
				<Input
					label=" Nombre del equipo"
					placeholder="Agregar nombre"
					labelPlacement="outside"
					variant="bordered"
					size="lg"
					isInvalid={errors.name && true}
					errorMessage={errors?.name && 'Este campo es requerido'}
					defaultValue={teamData?.name}
					{...register('name', {
						required: true,
					})}
				/>

				<Select
					label="Jefe de equipo"
					placeholder="Selecciona un jefe de equipo"
					items={userData}
					variant="bordered"
					size="lg"
					labelPlacement="outside"
					defaultSelectedKeys={[`${teamData?.leader_id}`]}
					{...register('leader_id', { required: true })}
				>
					{(user) => (
						<AutocompleteItem key={user.id} value={user.id}>
							{`${user.first_name} ${user.last_name}`}
						</AutocompleteItem>
					)}
				</Select>

				<Select
					disabledKeys={[`${teamData?.leader_id}`]}
					label="Miembros del equipo"
					placeholder="Selecciona miembros"
					variant="bordered"
					size="lg"
					labelPlacement="outside"
					selectionMode="multiple"
					defaultSelectedKeys={memberIds}
					{...register('team_members')}
				>
					{userData.map((user) => (
						<SelectItem key={user.id} value={user.id}>
							{`${user.first_name} ${user.last_name}`}
						</SelectItem>
					))}
				</Select>

				<div className="">
					<Checkbox
						defaultSelected={teamData?.active ?? true}
						color="primary"
						{...register('active')}
					/>
					<label htmlFor="" className="text-gray-800">
						Equipo Activo
					</label>
				</div>

				<Button type="submit" color="primary">
					{teamData ? 'Editar equipo' : 'Crear equipo'}
				</Button>
			</form>
		</>
	)
}

export default TeamForm
