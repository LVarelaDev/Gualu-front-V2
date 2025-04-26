"use client";

import InputText from "@/components/ui/Inputs/InputText";
import { Button } from "@nextui-org/button";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm();
  return (
    <div className="flex flex-col gap-3">
      <InputText
        form={form}
        label="IBAN"
        name="iban"
        placeholder="Escribe IBAN"
        typeValidation="IBAN"
      />
      <InputText
        form={form}
        label="CUPS"
        name="cups"
        placeholder="Escribe CUPS"
        typeValidation="CUPS"
      />
      <InputText
        form={form}
        label="CONSUMO_KW_ANO"
        name="consumo"
        placeholder="Escribe CONSUMO_KW_ANO"
        typeValidation="CONSUMO_KW_ANO"
      />
      <InputText
        form={form}
        label="FEE_EURO_MW"
        name="FEE_EURO_MW"
        placeholder="Escribe FEE_EURO_MW"
        typeValidation="FEE_EURO_MW"
      />
      <Button
        className="bg-default-200 border text-slate-600 shadow"
        onClick={form.handleSubmit((data) => console.log(data))}
      >
        Cancelar
      </Button>
    </div>
  );
}
