'use client'

import { InputTeam } from '@/models/teams/team'
import { UserDto } from '@/models/users/userDTO'
import { createTeam } from '@/services/teams/createTeam'
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Select,
	Selection,
	SelectItem,
	Switch,
	useDisclosure,
} from '@nextui-org/react'
import { PlusSignIcon } from 'hugeicons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface Props {
	id?: string
	userData: UserDto[]
}
const ModalSaveTeam = ({ id, userData }: Props) => {
	const [members, setMembers] = useState<string[]>([])
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const { register, reset, handleSubmit } = useForm<InputTeam>()
	const router = useRouter()

	const handleSubmitTeam: SubmitHandler<InputTeam> = async (data) => {
		// muestra el toast de creando el equipo
		toast.promise(createTeam({ ...data, team_members: members }), {
			loading: 'Creando equipo equipo...',
			success: (data) => {
				router.refresh()

				return data.message
			},
			error: 'Error al crear equipo',
		})
		reset()
		onClose()
	}
	return (
		<>
			<Button
				className="bg-emerald-500 text-white"
				endContent={<PlusSignIcon size={20} />}
				onClick={onOpen}
			>
				Agregar
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>{id ? 'Editar equipo' : 'Crear equipo'}</ModalHeader>
							<form onSubmit={handleSubmit(handleSubmitTeam)} id="saveTeamForm">
								<ModalBody>
									<label htmlFor="" className="text-gray-800">
										Nombre del equipo
									</label>
									<Input
										placeholder="Agregar nombre"
										variant="bordered"
										size="lg"
										{...register('name', { minLength: 1 })}
									/>
									<label htmlFor="" className="text-gray-800">
										Jefe de equipo
									</label>
									<Select
										items={userData}
										variant="bordered"
										size="lg"
										placeholder="Selecciona un jefe de equipo"
										{...register('leader_id')}
									>
										{(user) => (
											<SelectItem key={user.id} value={user.id}>
												{`${user.first_name} ${user.last_name}`}
											</SelectItem>
										)}
									</Select>
									<label htmlFor="" className="text-gray-800">
										Agregar miembros
									</label>
									<Select
										items={userData}
										variant="bordered"
										size="lg"
										selectionMode="multiple"
										placeholder="Selecciona miembros"
										selectedKeys={members}
										onSelectionChange={(selected) => {
											setMembers(Array.from(selected) as string[])
										}}
										{...register('team_members')}
									>
										{(user) => (
											<SelectItem key={user.id} value={user.id}>
												{`${user.first_name} ${user.last_name}`}
											</SelectItem>
										)}
									</Select>

									<div className="flex items-center justify-between">
										<label htmlFor="" className="text-gray-800">
											Equipo Activo
										</label>
										<Switch
											defaultSelected
											size="sm"
											classNames={{
												wrapper: 'group-data-[selected=true]:bg-emerald-500',
											}}
											{...register('active')}
										/>
									</div>
								</ModalBody>
							</form>
							<ModalFooter>
								<Button onClick={onClose}>Cancelar</Button>
								<Button
									type="submit"
									form="saveTeamForm"
									className="bg-emerald-500 text-white"
								>
									Crear equipo
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default ModalSaveTeam
