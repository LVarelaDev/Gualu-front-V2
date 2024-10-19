'use client'

import type { UserDto } from '@/models/users/userDTO'
import AutoCompleteField from '@/modules/core/components/form/AutoCompleteField'
import CheckboxField from '@/modules/core/components/form/CheckboxField'
import InputField from '@/modules/core/components/form/InputField'
import SelectField from '@/modules/core/components/form/SelectField'
import { handleSubmitTeam } from '@/modules/teams/helpers/handleSubmitTeam'
import type { InputTeam, Team } from '@/modules/teams/interfaces/team'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'

interface Props {
	userData: UserDto[]
	teamData?: Team
}
const TeamForm = ({ userData, teamData }: Props) => {
	const router = useRouter()
	const memberIds = teamData?.team_members.map((member) => member.user_id)
	const {
		reset,
		handleSubmit,
		control,
		watch
	} = useForm<InputTeam>()

	console.log(watch("team_members"))
	console.log(watch("leader_id"))
	const leader_seleted = teamData?.leader_id ?? watch("leader_id")
	const submitData: SubmitHandler<InputTeam> = (data) => {
		// Si en la data teams member existe entonces se convierte en un array de string y se pasa al backend
		let team_members: string[] = []
		if (data.team_members && data.team_members.length > 0) {
			team_members = data.team_members?.split(',')
		}

		handleSubmitTeam({ ...data, team_members: team_members }, teamData?.id)
		reset()
		router.push('/teams')
		router.refresh()
	}
	return (
		<>
			<form
				onSubmit={handleSubmit(submitData)}
				className="w-full flex flex-col gap-y-5 border rounded-2xl px-4 py-4 bg-background dark:border-white/20"
			>
				<h1 className="text-xl font-bold text-center py-3">
					{teamData ? 'Editar Equipo' : 'Agregar nuevo Equipo'}
				</h1>

				<InputField
					control={control}
					name="name"
					label=" Nombre del equipo"
					placeholder="Agregar nombre"
					defaultValue={teamData?.name}
					rules={{ required: 'Este campo es requerido' }}
				/>

				<AutoCompleteField
					control={control}
					name="leader_id"
					label="Jefe de equipo"
					placeholder="Selecciona un jefe de equipo"
					defaultSelectedKey={teamData?.leader_id}
					options={userData.map((user) => ({
						value: user.id,
						label: `${user.first_name} ${user.last_name}`,
					}))}
					rules={{ required: 'Este campo es requerido' }}
				/>

				<SelectField
					name="team_members"
					label="Miembros del equipo"
					placeholder="Selecciona miembros"
					selectionMode="multiple"
					control={control}
					disabledKeys={[leader_seleted]}
					defaultSelectedKeys={memberIds}
					options={userData.map((user) => ({
						label: `${user.first_name} ${user.last_name}`,
						value: user.id,
					}))}
				/>

				{/* 	<Select
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
				</Select> */}

				<CheckboxField
					control={control}
					defaultSelected={teamData?.active}
					name="active"
				>
					Equipo Activo
				</CheckboxField>

				<Button type="submit" color="primary">
					{teamData ? 'Editar equipo' : 'Crear equipo'}
				</Button>
			</form>
		</>
	)
}

export default TeamForm
