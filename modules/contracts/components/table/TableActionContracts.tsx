"use client"

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { Delete02Icon, MoreHorizontalIcon, TaskEdit01Icon, ViewIcon } from "hugeicons-react"

interface Props {
	id: string
}

const TableActionContracts = ({ id }: Props) => {

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button isIconOnly radius="full" variant="light">
					<MoreHorizontalIcon strokeWidth={3} color="#374151" />
				</Button>
			</DropdownTrigger>
			<DropdownMenu className="text-gray-800">
				<DropdownItem
					key="show-details"
					startContent={<ViewIcon size={20} />}
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
