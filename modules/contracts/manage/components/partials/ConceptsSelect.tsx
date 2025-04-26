import React, { useEffect, useState } from "react";
import {
  getAccessTariffs,
  getConceptsByPlanId,
} from "../services/ApiClientCatalogPlans";
import { UseFormReturn } from "react-hook-form";
import SelectComponent from "@/components/ui/Inputs/AutoComplete";

interface SelectComponentProps {
  form: UseFormReturn<any, any>;
  planId: string | null;
}

const ConceptsSelect = ({ planId = null, form }: SelectComponentProps) => {
  const [concepts, setConcepts] = useState<any[]>([]);

  useEffect(() => {
    const fetchAccessTariffs = async () => {
      if (planId === null || planId === "") return;

      const response = await getConceptsByPlanId(+planId);
      setConcepts(response ?? []);
    };

    fetchAccessTariffs();
  }, [planId]);
  return (
    <SelectComponent
      dataList={concepts}
      displayValue="name"
      form={form}
      itemValue="id"
      keyIdentifier="id"
      label="Concepto"
      name="conceptId"
      placeholder="Selecciona un concepto"
      rules={{
        required: "Campo requerido",
      }}
    />
  );
};

export default ConceptsSelect;
