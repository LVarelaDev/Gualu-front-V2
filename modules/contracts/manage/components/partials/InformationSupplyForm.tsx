import FCard from "@/components/ui/Card/FCard";
import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import InputText from "@/components/ui/Inputs/InputText";
import CheckboxField from "@/modules/core/components/form/CheckboxField";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { TContractTypes } from "../../types/contractType";
import { ContractType } from "../constants/contractType";
import { operationTypesOptions } from "../constants/operationType";
import { ContractTypesEnum } from "../enums/contractType";
import ManageCardConsumptionForm from "./ManageCardConsumptionForm";
import PowerForm from "./PowerForm";
import TariffForm from "./TariffForm";
import { Textarea } from "@heroui/react";

type InformationSupplyFormProps = {
  form: UseFormReturn<any, any>;
};

const InformationSupplyForm = ({ form }: InformationSupplyFormProps) => {
  const addresClient = form.watch("addresClient");
  const contractType = form.watch("contractType");

  const [selectedContractType, setSelectedContractType] = useState<
    TContractTypes | undefined
  >(undefined);

  const [selectedAccessTariff, setSelectedAccessTariff] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (contractType) {
      setSelectedContractType(contractType);
    }
  }, [contractType]);

  return (
    <FCard title="Información del suministro">
      <div className="grid grid-cols-[1.5fr_2fr] gap-5">
        <SelectComponent
          dataList={ContractType}
          displayValue="value"
          form={form}
          itemValue="value"
          keyIdentifier="value"
          label="Tipo de contrato"
          name="contractType"
          placeholder="Selecciona una tipo de contrato"
        />
        <CheckboxField
          control={form.control}
          name="addresClient"
          defaultSelected={false}
        >
          Usar la misma Información tributaria del cliente
        </CheckboxField>
      </div>
      {!addresClient && (
        <div className="grid grid-cols-2 gap-3">
          <InputText
            form={form}
            label="Dirección del suministro"
            name="addressContract"
            placeholder="Escribe la dirección del suministro"
            rules={{ required: "Este campo es requerido" }}
          />
          <InputText
            form={form}
            label="Codigo postal"
            name="postalCodeContract"
            placeholder="Escribe el codigo postal"
            rules={{ required: "Este campo es requerido" }}
          />
          <InputText
            form={form}
            label="Población"
            name="populationContract"
            placeholder="Escribe la población"
            rules={{ required: "Este campo es requerido" }}
          />
          <InputText
            form={form}
            label="Provincia"
            name="provinceContract"
            placeholder="Escribe la provincia"
            rules={{ required: "Este campo es requerido" }}
          />
        </div>
      )}
      <ManageCardConsumptionForm
        form={form}
        selectedContractType={selectedContractType}
      />
      <SelectComponent
        dataList={operationTypesOptions}
        displayValue="value"
        form={form}
        itemValue="value"
        keyIdentifier="value"
        label="Tipo de operación"
        name="operationType"
        placeholder="Selecciona una tipo de operación"
      />
      <TariffForm
        form={form}
        setSelectedAccessTariff={setSelectedAccessTariff}
      />
      {(selectedContractType === ContractTypesEnum.Energy ||
        selectedContractType === ContractTypesEnum.Dual) && (
        <PowerForm form={form} selectedAccessTariff={selectedAccessTariff} />
      )}
      <Textarea
        variant="bordered"
        label="Observaciones internas"
        placeholder="Ingresa tu descripción"
        {...form.register("internsObservation")}
      />
      <Textarea
        variant="bordered"
        label="Observaciones"
        placeholder="Ingresa tu descripción"
        {...form.register("observations")}
      />
    </FCard>
  );
};

export default InformationSupplyForm;
