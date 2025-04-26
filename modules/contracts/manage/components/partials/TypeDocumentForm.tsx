import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import InputText, {
  typeValidationDocumento,
} from "@/components/ui/Inputs/InputText";
import React, { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";

type TypeDocumentFormProps = {
  form: UseFormReturn<any, any>;
};

export const TypeDocuments = [
  { value: "DNI" },
  { value: "CIF" },
  { value: "NIE" },
];

const TypeDocumentForm = ({ form }: TypeDocumentFormProps) => {
  const typeNif = form.watch("typeNif");
  const [SelectedTypeNif, setSelectedTypeNif] =
    useState<typeValidationDocumento>("DNI");

  useEffect(() => {
    if (typeNif) {
      setSelectedTypeNif(typeNif);
    }
  }, [typeNif]);

  return (
    <div className="grid grid-cols-[1.5fr_2fr] gap-3">
      <SelectComponent
        dataList={TypeDocuments}
        displayValue="value"
        form={form}
        itemValue="value"
        keyIdentifier="value"
        label="Tipo de Nif"
        name="typeNif"
        placeholder="Selecciona un tipo de Nif"
      />
      {typeNif != "" && (
        <InputText
          form={form}
          label={SelectedTypeNif}
          typeValidation={SelectedTypeNif}
          name="nif"
          placeholder={`Ingresa el ${SelectedTypeNif}`}
        />
      )}
    </div>
  );
};

export default TypeDocumentForm;
