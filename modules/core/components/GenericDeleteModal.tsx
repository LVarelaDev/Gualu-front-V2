'use client'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'
import type { MessageResponse } from '../interfaces/messageResponse'

interface Props {
	trigger: React.ReactNode
	itemId: string
	itemName: string
	deleteAction: (itemId: string) => Promise<MessageResponse | undefined>
}

const GenericDeleteModal = ({
	trigger,
	itemId,
	itemName,
	deleteAction,
}: Props) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const router = useRouter()

	const handleDelete = async () => {
		toast.promise(deleteAction(itemId), {
			loading: `Eliminando ${itemName}...`,
			success: (response) => {
				console.log(response)
				router.refresh()
				return response?.message ?? `${itemName} eliminado con exito`
			},
			error: `Error al eliminar ${itemName}`,
		})
	}

	return (
		<>
			{React.cloneElement(trigger as React.ReactElement, { onClick: onOpen })}
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Atención
							</ModalHeader>
							<ModalBody>
								<p className="text-gray-700">
									¿Estás seguro de que deseas eliminar{' '}
									<strong>{itemName}</strong> ?
								</p>
							</ModalBody>
							<ModalFooter>
								<Button color="default" variant="light" onPress={onClose}>
									Cancelar
								</Button>
								<Button color="danger" onPress={handleDelete}>
									Sí, Seguro
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default GenericDeleteModal
