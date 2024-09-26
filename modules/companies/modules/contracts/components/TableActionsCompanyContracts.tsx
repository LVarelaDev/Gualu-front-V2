'use client'
import GenericDeleteModal from '@/modules/core/components/GenericDeleteModal'
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
	Files01Icon,
	MoreHorizontalIcon,
	TaskEdit01Icon,
} from 'hugeicons-react'

interface Props {
	id: string
	name: string
	deleteAction: (id: string) => Promise<MessageResponse | undefined>
}

const TableActionsCompanyContracts = ({ id, name, deleteAction }: Props) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	return (
		<>
			<Dropdown>
				<DropdownTrigger>
					<Button isIconOnly variant="light" radius="full">
						<MoreHorizontalIcon strokeWidth={3} color="#374151" />
					</Button>
				</DropdownTrigger>
				<DropdownMenu className="text-gray-800">
					<DropdownItem
						key="Show details"
						startContent={<Files01Icon size={20} />}
						href={`/companies/contracts/details/${id}`}
					>
						Ver todos los detalles
					</DropdownItem>
					<DropdownItem
						key="edit contract"
						startContent={<TaskEdit01Icon size={20} />}
						href={`/contracts/manage?id=${id}`}
					>
						Editar contrato
					</DropdownItem>
					<DropdownItem
						key="delete contract"
						variant="flat"
						color="danger"
						className="text-danger"
						startContent={<Delete02Icon size={20} />}
						onClick={onOpen}
					>
						Eliminar contrato
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

export default TableActionsCompanyContracts
