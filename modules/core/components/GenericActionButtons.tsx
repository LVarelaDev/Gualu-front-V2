'use client'

import type { MessageResponse } from '@/modules/core/interfaces/messageResponse'
import { Button, Tooltip } from '@nextui-org/react'
import { Delete02Icon, TaskEdit01Icon } from 'hugeicons-react'
import Link from 'next/link'
import GenericDeleteModal from './GenericDeleteModal'

interface Props {
	id: string
	name: string
	editPath: string
	deleteAction: (id: string) => Promise<MessageResponse | undefined>
	entityName: string
}

const GenericActionButtons = ({
	id,
	name,
	editPath,
	deleteAction,
	entityName,
}: Props) => {
	return (
		<section className="flex items-center gap-x-3">
			<Tooltip content={`Editar ${entityName}`}>
				<Button
					isIconOnly
					variant="light"
					as={Link}
					href={`${editPath}?id=${id}`}
				>
					<TaskEdit01Icon size={20} className="text-foreground" />
				</Button>
			</Tooltip>
			<Tooltip content={`Eliminar ${entityName}`}>
				<div>
					<GenericDeleteModal
						itemId={id}
						itemName={name}
						deleteAction={deleteAction}
						trigger={
							<Button isIconOnly variant="light">
								<Delete02Icon size={20} className="text-danger" />
							</Button>
						}
					/>
				</div>
			</Tooltip>
		</section>
	)
}

export default GenericActionButtons
