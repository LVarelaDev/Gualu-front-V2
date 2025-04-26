import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import { UseFormReturn } from "react-hook-form";
import { operationTypesOptions } from "../constants/operationType";
import AccessTariffsSelect from "./AccessTariffsSelect";
import { Dispatch, SetStateAction } from "react";

type TariffFormProps = {
  form: UseFormReturn<any, any>;
  setSelectedAccessTariff: Dispatch<SetStateAction<string | null>>;
};

const TariffForm = ({ form, setSelectedAccessTariff }: TariffFormProps) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <AccessTariffsSelect
        form={form}
        setSelectedAccessTariff={setSelectedAccessTariff}
      />
    </div>
  );
};

export default TariffForm;
