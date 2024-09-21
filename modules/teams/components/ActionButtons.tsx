'use client'
import { Button, Tooltip, useDisclosure } from '@nextui-org/react'
import { Delete02Icon, TaskEdit01Icon } from 'hugeicons-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const ModalDeleteTeams = dynamic(
	() => import('@/modules/teams/components/ModalDeleteTeams'),
)

interface Props {
	id: string
	name: string
}

const ActionButtons = ({ id, name }: Props) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	console.log(id, name, isOpen)
	return (
		<>
			<div className="flex items-center gap-x-3">
				<Tooltip content="Editar">
					<Button
						isIconOnly
						variant="light"
						as={Link}
						href={`/teams/manage?id=${id}`}
					>
						<TaskEdit01Icon size={20} className="text-gray-700" />
					</Button>
				</Tooltip>
				<Tooltip content="Eliminar">
					<Button isIconOnly variant="light" onClick={onOpen}>
						<Delete02Icon size={20} className="text-danger" />
					</Button>
				</Tooltip>
			</div>
			<ModalDeleteTeams
				id={id}
				name={name}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
		</>
	)
}

export default ActionButtons
