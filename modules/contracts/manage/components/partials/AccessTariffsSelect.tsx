import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { getAccessTariffs } from "../services/ApiClientCatalogPlans";
import ConceptsSelect from "./ConceptsSelect";
import ExtrasSelect from "./ExtrasSelect";
import PlansSelect from "./PlansSelect";
import { useSelectedAccessTariff } from "../../hooks/useSelectedAcessTariff";

type AccessTariffsSelectProps = {
  form: UseFormReturn<any, any>;
  setSelectedAccessTariff: Dispatch<SetStateAction<string | null>>;
};

const AccessTariffsSelect = ({
  form,
  setSelectedAccessTariff,
}: AccessTariffsSelectProps) => {
  const [accessTariffs, setAccessTariffs] = useState<
    { id: number; name: string }[]
  >([]);

  useEffect(() => {
    const fetchAccessTariffs = async () => {
      const response = await getAccessTariffs(1);
      setAccessTariffs(response ?? []);
    };

    fetchAccessTariffs();
  }, []);

  const accessTariffId = form.watch("accessTariffId");

  useSelectedAccessTariff(
    accessTariffId,
    setSelectedAccessTariff,
    accessTariffs
  );

  return (
    <Fragment>
      <SelectComponent
        dataList={accessTariffs}
        displayValue="name"
        form={form}
        itemValue="name"
        keyIdentifier="id"
        label="Tarifa de acceso"
        name="accessTariffId"
        placeholder="Selecciona una Tarifa de acceso"
        rules={{
          required: "Campo requerido",
        }}
      />
      <PlansSelect accessTariffId={form.watch("accessTariffId")} form={form} />
      <ConceptsSelect planId={form.watch("planId")} form={form} />
      <ExtrasSelect planId={form.watch("planId")} form={form} />
    </Fragment>
  );
};

export default AccessTariffsSelect;
