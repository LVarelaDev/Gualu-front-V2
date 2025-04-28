"use client";
import FCard from "@/components/ui/Card/FCard";
import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import { useFileUpload } from "./hooks/useFileUpload";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { CompanyDto } from "../companies/interfaces/company";
import { getAllCompanies } from "../companies/services/querys/getAllCompanies";
import DragDropFileUpload from "../core/components/form/DropAndDragInput";
import { toast } from "sonner";
import { InputFileService } from "./services/ImportFileService";
interface CommissionsFormData {
  companyId: string;
  commissionFile: File | null;
  // otros campos del formulario
}

const Comisions = () => {
  const form = useForm<CommissionsFormData>();
  const [companies, setCompanies] = useState<CompanyDto[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      if (companies.length === 0) {
        setCompanies((await getAllCompanies()) ?? []);
      }
    };

    fetchCompanies();
  }, []);

  const onSubmit = async (data: CommissionsFormData) => {
    console.log(data);

    const formData = new FormData();
    if (data.commissionFile) {
      formData.append("file", data.commissionFile);
      formData.append("companyId", data.companyId);

      const response = await InputFileService(formData);
      if (response.success) {
        toast.success("Archivo de comisiones importado correctamente");
        form.reset();
        return;
      } else {
        toast.error("Error al importar el archivo de comisiones");
        return;
      }
    }
    toast.error("Por favor selecciona un archivo de comisiones");
  };

  return (
    <FCard title="Importar Catalogo de Comisiones">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-between items-center w-full">
          <div className="min-w-[500px]">
            <SelectComponent
              dataList={companies}
              displayValue="name"
              form={form}
              itemValue="id"
              keyIdentifier="id"
              label="Comercializadora"
              name="companyId"
              placeholder="Selecciona una comercializadora"
            />
          </div>
        </div>

        <DragDropFileUpload
          accept=".xlsx,.xls,.csv"
          name="commissionFile"
          setValue={form.setValue}
          description="Arrastra tu archivo de comisiones aquí o haz clic para seleccionar"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          Enviar Comisiones
        </button>
      </form>
    </FCard>
  );
};

export default Comisions;
