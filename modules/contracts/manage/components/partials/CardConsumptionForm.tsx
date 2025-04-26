import FCard from "@/components/ui/Card/FCard";
import InputText from "@/components/ui/Inputs/InputText";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export type CardConsumptionFormProps = {
  title: string;
  cupsName: string;
  feeName: string;
  ibanName: string;
  consumptionName: string;
  form: UseFormReturn<any, any>;
};

const CardConsumptionForm = ({
  title,
  consumptionName,
  cupsName,
  feeName,
  form,
  ibanName,
}: CardConsumptionFormProps) => {
  return (
    <FCard border title={title}>
      <div className="grid grid-cols-2 gap-3">
        <InputText
          form={form}
          name={cupsName}
          typeValidation="CUPS"
          label="Cups"
          placeholder="Escribe el cups"
        />
        <InputText
          form={form}
          name={feeName}
          typeValidation="FEE_EURO_MW"
          label="Fee"
          placeholder="Escribe el fee"
        />
        <InputText
          form={form}
          name={ibanName}
          label="Iban"
          typeValidation="IBAN"
          placeholder="Escribe el iban"
        />
        <InputText
          form={form}
          name={consumptionName}
          label="Consumo KW/Año"
          typeValidation="CONSUMO_KW_ANO"
          placeholder="Escribe el consumo"
        />
      </div>
    </FCard>
  );
};

export default CardConsumptionForm;
