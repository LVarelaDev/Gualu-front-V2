'use client'

import {
	Button,
	ButtonProps,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react'
import { Delete02Icon, MoreVerticalIcon, TaskEdit01Icon } from 'hugeicons-react'

interface Props extends ButtonProps {
	id: string
	onOpen: () => void
}

const DropdownActions = ({ id, onOpen, ...props }: Props) => {
	return (
		<>
			<Dropdown>
				<DropdownTrigger {...props}>
					<Button isIconOnly radius="full" variant="light">
						<MoreVerticalIcon className="text-gray-700" strokeWidth={3.5} />
					</Button>
				</DropdownTrigger>
				<DropdownMenu aria-label="Dropdown Actions">
					<DropdownItem
						key="editar"
						className="text-gray-700"
						startContent={<TaskEdit01Icon size={20} />}
						href={`/teams/${id}`}
					>
						Editar
					</DropdownItem>
					<DropdownItem
						key="eliminar"
						className="text-danger"
						color="danger"
						startContent={<Delete02Icon size={20} />}
						variant="flat"
						onClick={onOpen}
					>
						Eliminar
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}

export default DropdownActions
