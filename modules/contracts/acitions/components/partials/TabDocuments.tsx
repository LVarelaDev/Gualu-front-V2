import FCard from "@/components/ui/Card/FCard";
import InputSearch from "@/components/ui/Inputs/InputSearch";
import { FTable, FTableColumn } from "@/components/ui/Table/FTable";
import { FileUploadIcon } from "hugeicons-react";
import { UseFormReturn } from "react-hook-form";
import { DocumentsDto } from "../../interfaces/InformationAction";
import imageNotFount from "../../../../../assets/images/Documents-bro.svg";
import Image from "next/image";
import { Button } from "@heroui/react";

interface TabDocumentsProps {
  form: UseFormReturn<any, any>;
  data: DocumentsDto[];
}

const TabDocuments = ({ form, data }: TabDocumentsProps) => {
  return (
    <FCard title="Documentos del Contrato">
      <div className="flex justify-between items-center">
        <div className="w-1/4">
          <InputSearch form={form} name="search" placeholder="Buscar..." />
        </div>
        <Button
          className="bg-purple-800 text-white"
          size="sm"
          startContent={<FileUploadIcon size={16} />}
        >
          Subir Documento
        </Button>
      </div>
      {data.length !== 0 ? (
        <FTable<DocumentsDto>
          dataList={data}
          keyIdentifier="id"
          isLoading={data.length === 0}
          shadow="none"
        >
          <FTableColumn<DocumentsDto>
            labelHeader="Nombre"
            colRender={(_, doc) => `${doc.name}`}
          />
          <FTableColumn<DocumentsDto>
            labelHeader="Tipo"
            colRender={(_, doc) => `${doc.name}`}
          />
          <FTableColumn<DocumentsDto>
            labelHeader="Fecha creacion"
            colRender={(_, doc) => `${doc.createdAt}`}
          />
        </FTable>
      ) : (
        <div className="flex gap-4 items-center justify-center p-4">
          <span className="text-slate-500 font-bold">
            No hay documentos para mostrar
          </span>
        </div>
      )}
    </FCard>
  );
};

export default TabDocuments;
