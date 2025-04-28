import React, { useEffect, useState } from "react";
import { getExtrasByPlanId } from "../services/ApiClientCatalogPlans";
import { UseFormReturn } from "react-hook-form";
import SelectComponent from "@/components/ui/Inputs/AutoComplete";

interface ExtrasSelectProps {
  form: UseFormReturn<any, any>;
  planId: string | null;
}

const ExtrasSelect = ({ planId, form }: ExtrasSelectProps) => {
  const [extras, setExtras] = useState<any[]>([]);

  useEffect(() => {
    if (!planId || planId === "") return;
    const fetchAccessTariffs = async () => {
      const response = await getExtrasByPlanId(+planId);
      setExtras(response ?? []);
    };

    fetchAccessTariffs();
  }, []);
  return (
    <SelectComponent
      dataList={extras}
      displayValue="name"
      form={form}
      itemValue="name"
      keyIdentifier="id"
      label="Servicio extra"
      name="extraId"
      placeholder="Selecciona un extra"
    />
  );
};

export default ExtrasSelect;
