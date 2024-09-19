import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from '@nextui-org/react'

import { deleteTeam } from '@/modules/teams/services/mutation/deleteTeam'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
	name: string
	id: string
	isOpen: boolean
	onOpenChange: (value: boolean) => void
}

const ModalDeleteTeams = ({ id, name, isOpen, onOpenChange }: Props) => {
	const router = useRouter()
	const handleDeleteTeam = async (onClose: () => void) => {
		toast.promise(deleteTeam({ id }), {
			loading: 'Eliminando equipo...',
			success: () => {
				router.refresh()

				return `${name} eliminado con exito`
			},
			error: 'Error al eliminar equipo',
		})
		onClose()
	}
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>Atención</ModalHeader>
						<ModalBody>
							<p className="text-gray-700">
								¿ Estás seguro de que deseas eliminar El equipo{' '}
								<strong>{name}</strong> ?
							</p>
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose}>Cancelar</Button>
							<Button color="danger" onClick={() => handleDeleteTeam(onClose)}>
								Sí,Seguro
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default ModalDeleteTeams
