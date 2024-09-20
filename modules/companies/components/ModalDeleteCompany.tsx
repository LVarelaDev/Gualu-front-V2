import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'

import { deleteCompany } from '@/modules/companies/services/mutations/deleteCompany'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
  name: string
  id: string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
}

const ModalDeleteCompany = ({ id, name, isOpen, onOpenChange }: Props) => {
  const router = useRouter()
  const handleDeleteCompany = async (onClose: () => void) => {
    toast.promise(deleteCompany(id), {
      loading: 'Eliminando compañia...',
      success: () => {
        router.refresh()

        return `${name} eliminado con exito`
      },
      error: 'Error al eliminar la compañia',
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
                ¿ Estás seguro de que deseas eliminar La Compañia{' '}
                <strong>{name}</strong> ?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancelar</Button>
              <Button color="danger" onClick={() => handleDeleteCompany(onClose)}>
                Sí,Seguro
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ModalDeleteCompany
