"use client";
import BackButton from "@/modules/core/components/common/BackButton";
import { Button } from "@nextui-org/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createContract } from "../../services/mutations/createContract";
import { createPayload } from "./adapters/createPayload";
import InformationClientForm from "./partials/InformationClientForm";
import InformationSupplyForm from "./partials/InformationSupplyForm";

const ManageContainerContracts = () => {
  const form = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const session = useSession();
  console.log("session", session);

  const handleCreateContract = async (data: any) => {
    const payload = createPayload(data);
    setLoading(true);
    try {
      const response = await createContract(payload);
      if (response.success) {
        setLoading(false);
        toast.success("Contrato creado con éxito");
        router.push("/contracts");
        return;
      }
    } catch (e: any) {
      setLoading(false);
      toast.error(e.message || "Error al crear el contrato");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border">
        <BackButton />
        <div className="flex gap-3">
          <Button
            className="bg-default-200 border text-slate-600 shadow"
            onClick={() => router.back()}
          >
            Cancelar
          </Button>
          <Button
            disabled={loading}
            className={`flex gap-2 ${loading ? "bg-gray-500 " : "bg-sky-900 text-white"}  shadow`}
            onClick={form.handleSubmit(handleCreateContract)}
          >
            Guardar
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_2fr] gap-5 mt-1">
        <div>
          <InformationClientForm form={form} />
        </div>
        <div>
          <InformationSupplyForm form={form} />
        </div>
      </div>
    </div>
  );
};

export default ManageContainerContracts;
