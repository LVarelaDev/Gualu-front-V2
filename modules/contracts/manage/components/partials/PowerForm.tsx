import InputText from "@/components/ui/Inputs/InputText";
import { UseFormReturn } from "react-hook-form";
import { PowerValueEnum } from "../enums/contractType";

type PowerFormProps = {
  form: UseFormReturn<any, any>;
  selectedAccessTariff: string | null;
};

const PowerForm = ({ form, selectedAccessTariff }: PowerFormProps) => {
  const isRequired =
    selectedAccessTariff === PowerValueEnum.TD_2 ? true : false;
  return (
    <div className="grid grid-cols-6 gap-2">
      <InputText
        form={form}
        label="P1"
        name="powerOne"
        rules={{ required: "Este campo es requerido" }}
      />
      <InputText
        form={form}
        label="P2"
        name="powerTwo"
        rules={{ required: "Este campo es requerido" }}
      />
      <InputText
        isDisable={isRequired}
        form={form}
        label="P3"
        name="powerThree"
        rules={{ required: !isRequired ? "Este campo es requerido" : false }}
      />
      <InputText
        isDisable={isRequired}
        form={form}
        label="P4"
        name="powerfour"
        rules={{ required: !isRequired ? "Este campo es requerido" : false }}
      />
      <InputText
        isDisable={isRequired}
        form={form}
        label="P5"
        name="powerFive"
        rules={{ required: !isRequired ? "Este campo es requerido" : false }}
      />
      <InputText
        isDisable={selectedAccessTariff === PowerValueEnum.TD_2 ? true : false}
        form={form}
        label="P6"
        name="powerSix"
      />
    </div>
  );
};

export default PowerForm;
