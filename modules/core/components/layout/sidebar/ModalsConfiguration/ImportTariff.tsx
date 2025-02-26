import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import FormImportTariff from "./partials/FormImportTariff";
import { useForm } from "react-hook-form";
import { importTariffFile } from "@/modules/core/services/configurations/configurationService";
import { toast } from "sonner";

interface ImportTariffPros {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

const ImportTariff = ({ isOpen, onOpen, onOpenChange }: ImportTariffPros) => {
  const form = useForm<{ companyId: string; file: File[] }>();

  const handleImportFile = async (data: {
    companyId: string;
    file: File[];
  }) => {
    const payload = {
      companyId: data.companyId,
      file: data.file[0],
    };
    toast.promise(importTariffFile(payload), {
      loading: "Cargando archivo...",
      error(err) {
        return err.message ?? "Ocurrió un error al importar el archivo";
      },
      success(response) {
        return response.message ?? "Se importó el archivo correctamente!";
      },
    });
  };

  return (
    <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Importar tarifas
            </ModalHeader>
            <ModalBody>
              <FormImportTariff form={form} />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button
                color="primary"
                onClick={form.handleSubmit(handleImportFile)}
              >
                Guardar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ImportTariff;
