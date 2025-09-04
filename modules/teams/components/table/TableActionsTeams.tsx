'use client'
import MoreButtonTable from '@/modules/core/components/table/MoreButtonTable'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

import {
	Delete02Icon,
	MoreHorizontalIcon,
	TaskEdit01Icon,
} from 'hugeicons-react'
import type { FC } from 'react'

interface Props {
	id: string
}

const TableActionsTeams: FC<Props> = ({ id }) => {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Button isIconOnly radius="full" variant="light">
					<MoreHorizontalIcon strokeWidth={3} />
				</Button>
			</DropdownTrigger>

			<DropdownMenu>
				<DropdownItem
					key="edit"
					startContent={<TaskEdit01Icon size={20} />}
					href={`/teams/manage?id=${id}`}
				>
					Editar
				</DropdownItem>

				<DropdownItem
					key="delete"
					className="text-red-500"
					color="danger"
					variant="flat"
					startContent={<Delete02Icon size={20} />}
				>
					Eliminar
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}

export default TableActionsTeams
