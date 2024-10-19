'use client'

import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	useDisclosure,
} from '@nextui-org/react'
import {
	Delete02Icon,
	MoreHorizontalIcon,
	TaskEdit01Icon,
	ViewIcon,
} from 'hugeicons-react'

interface Props {
	id: string
	name: string
	deleteAction: (id: string) => Promise<MessageResponse | undefined>
}

const TableActionContracts = ({ id }: Props) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	return (
		<Dropdown>
			<DropdownTrigger>
				<Button isIconOnly radius="full" variant="light">
					<MoreHorizontalIcon strokeWidth={3} />
				</Button>
			</DropdownTrigger>
			<DropdownMenu className="text-foreground">
				<DropdownItem
					key="show-details"
					startContent={<ViewIcon size={20} />}
					href={`/contracts/details/${id}`}
				>
					Ver Detalles
				</DropdownItem>
				<DropdownItem
					key="edit-contract"
					startContent={<TaskEdit01Icon size={20} />}
					href={`/contracts/manage/${id}`}
				>
					Editar contrato
				</DropdownItem>
				<DropdownItem
					key="delete-contract"
					variant="flat"
					color="danger"
					className="text-danger"
					startContent={<Delete02Icon size={20} />}
				>
					Eliminar contrato
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}

export default TableActionContracts
