'use client'

import dynamic from 'next/dynamic'

const GenericDeleteModal = dynamic(
	() => import('@/modules/core/components/GenericDeleteModal'),
)
import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'

import {
	Delete02Icon,
	Files01Icon,
	MoreHorizontalIcon,
	TaskEdit01Icon,
} from 'hugeicons-react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@heroui/react'

interface Props {
	id: string
	name: string
	deleteAction: (id: string) => Promise<MessageResponse | undefined>
}

const TableActionsCompanies = ({ id, name, deleteAction }: Props) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Dropdown>
				<DropdownTrigger>
					<Button isIconOnly variant="light" radius="full">
						<MoreHorizontalIcon strokeWidth={3} className="text-foreground" />
					</Button>
				</DropdownTrigger>
				<DropdownMenu className="text-foreground">
					<DropdownItem
						key="editar"
						startContent={<TaskEdit01Icon size={20} />}
						href={`/companies/manage?id=${id}`}
					>
						Editar compañia
					</DropdownItem>
					<DropdownItem
						key="show contracts"
						startContent={<Files01Icon size={20} />}
						href={`/companies/contracts/${id}`}
					>
						Ver contratos
					</DropdownItem>
					<DropdownItem
						key="delete"
						variant="flat"
						color="danger"
						className="text-danger"
						startContent={<Delete02Icon size={20} />}
						onClick={onOpen}
					>
						Eliminar Compañia
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<GenericDeleteModal
				itemId={id}
				isOpenModal={isOpen}
				onOpenChangeModal={onOpenChange}
				itemName={name}
				deleteAction={deleteAction}
			/>
		</>
	)
}

export default TableActionsCompanies
