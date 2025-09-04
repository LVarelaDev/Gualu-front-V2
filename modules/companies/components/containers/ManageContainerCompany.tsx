"use client";
import FormCompany from "@/modules/companies/components/FormCompany";
import { getOneCompany } from "@/modules/companies/services/querys/getOneCompany";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Company, InputCompany } from "../../interfaces/company";
import FCard from "@/components/ui/Card/FCard";
import InputText from "@/components/ui/Inputs/InputText";
import { useForm } from "react-hook-form";
import DragDropFileUpload from "@/modules/core/components/form/DropAndDragInput";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { createCompany } from "../../services/mutations/createCompany";
interface Props {
  id?: string;
}

const ManageContainerCompany = ({ id }: Props) => {
  const router = useRouter();
  const form = useForm<InputCompany>();
  const [companie, setCompanie] = useState<Company>();

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        const companie = await getOneCompany(id);
        setCompanie(companie);
      }
    };
    fetch();
  }, [id]);

  const handleCreateCompany = (data: InputCompany) => {
    toast.promise(createCompany(data), {
      error: "Error al crear la comercializadora",
      loading: "Intentando crear la comercializadora...",
      success: (response): any => {
        router.push("/companies");
        return "Comercializadora creada exitosamente";
      },
    });
  };

  return (
    <div className="w-1/2">
      <FCard title="Formulario de comercializadoras">
        <InputText form={form} name="name" label="Nombre de comercializadora" />
        <DragDropFileUpload
          name="picture"
          setValue={form.setValue}
          accept=".png,.jpg,.jpeg"
        />
        <Button
          onClick={form.handleSubmit(handleCreateCompany)}
          className="bg-purple-800 text-white"
        >
          Crear comercializadora
        </Button>
      </FCard>
    </div>
  );
};

export default ManageContainerCompany;
