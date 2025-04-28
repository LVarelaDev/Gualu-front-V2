import React, { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { getPlansByAccessTariff } from "../services/ApiClientCatalogPlans";
import SelectComponent from "@/components/ui/Inputs/AutoComplete";

interface PlansSelectProps {
  form: UseFormReturn<any, any>;
  accessTariffId: string;
}

const PlansSelect = ({ accessTariffId, form }: PlansSelectProps) => {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    const fetchAccessTariffs = async () => {
      if (accessTariffId === "" || !accessTariffId) return;
      const response = await getPlansByAccessTariff(+accessTariffId);
      setPlans(response ?? []);
    };

    fetchAccessTariffs();
  }, [accessTariffId]);
  return (
    <SelectComponent
      dataList={plans}
      displayValue="name"
      form={form}
      itemValue="name"
      keyIdentifier="id"
      label="Plan"
      name="planId"
      placeholder="Selecciona un plan"
      rules={{
        required: "Campo requerido",
      }}
    />
  );
};

export default PlansSelect;
