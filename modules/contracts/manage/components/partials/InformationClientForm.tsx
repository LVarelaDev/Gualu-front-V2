import React from "react";
import FCard from "@/components/ui/Card/FCard";
import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import InputText from "@/components/ui/Inputs/InputText";
import { UseFormReturn } from "react-hook-form";
import TypeDocumentForm from "./TypeDocumentForm";

type InformationClientFormProps = {
  form: UseFormReturn<any, any>;
};
const InformationClientForm = ({ form }: InformationClientFormProps) => {
  const options = [
    { label: "Particular", value: "PARTICULAR" },
    { label: "Autonomo", value: "AUTONOMO" },
    { label: "Empresa", value: "EMPRESA" },
    { label: "Organismos publico", value: "ORGANISMOS PUBLICOS" },
    { label: "Comunidad de propietarios", value: "COMUNIDAD DE PROPIETARIOS" },
  ];

  return (
    <FCard title="Información del cliente">
      <InputText
        form={form}
        label="Nombre"
        name="name"
        placeholder={`Ingresa el nombre`}
      />

      <TypeDocumentForm form={form} />
      <div className="grid grid-cols-[1.5fr_2fr] gap-3">
        <SelectComponent
          dataList={options}
          displayValue="label"
          form={form}
          itemValue="value"
          keyIdentifier="label"
          label="Tipo de cliente"
          name="clientType"
          placeholder="Selecciona una tipo de cliente"
        />
        <InputText
          form={form}
          label="Telefono"
          name="phone"
          placeholder="Escribe el correo electronico"
          rules={{ required: "Este campo es requerido" }}
        />
      </div>
      <InputText
        form={form}
        label="Iban"
        name="ibanClient"
        placeholder="Escribe el IBAN"
        rules={{ required: "Este campo es requerido" }}
      />
      <InputText
        form={form}
        label="Correo electronico"
        name="email"
        placeholder="Escribe el correo electronico"
        rules={{ required: "Este campo es requerido" }}
      />

      <div className="grid grid-cols-2 gap-3">
        <InputText
          form={form}
          label="Dirección del suministro"
          name="address"
          placeholder="Escribe la dirección del suministro"
          rules={{ required: "Este campo es requerido" }}
        />
        <InputText
          form={form}
          label="Codigo postal"
          name="postalCode"
          placeholder="Escribe el codigo postal"
          rules={{ required: "Este campo es requerido" }}
        />
        <InputText
          form={form}
          label="Población"
          name="population"
          placeholder="Escribe la población"
          rules={{ required: "Este campo es requerido" }}
        />
        <InputText
          form={form}
          label="Provincia"
          name="province"
          placeholder="Escribe la provincia"
          rules={{ required: "Este campo es requerido" }}
        />
      </div>
    </FCard>
  );
};

export default InformationClientForm;
