import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import InputText from "@/components/ui/Inputs/InputText";
import Toggle from "@/components/ui/Toggle/Toggle";
import { usersById } from "@/models/users/userDTO";
import { categories, rols } from "@/utils/constanst/constanst";

type props = {
  form: UseFormReturn<any, any>;
  userData: usersById | null;
};

const PersonalInformationForm = ({ form, userData }: props) => {
  useEffect(() => {
  if (userData) {
    form.reset({
      names: userData.firstName,
      lastNames: userData.lastName,
      nif: userData.nif,
      email: userData.email,
      rol: userData.role,
      typeCategory: userData.kind,
    });
  }
}, [userData, form]);

  return (
    <div className="rounded-xl shadow flex flex-col gap-6 p-4 bg-white">
      <p className="text-base font-bold text-slate-600">Información personal</p>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <InputText
            form={form}
            label="Nombres"
            name="names"
            type="text"
            placeholder="Ingresa los nombres"
          />
          <InputText
            form={form}
            label="Apellidos"
            name="lastNames"
            type="text"
            placeholder="Ingresa los apellidos"
          />
        </div>
        <div className="flex gap-5">
          <InputText
            form={form}
            label="NIF"
            name="nif"
            type="text"
            placeholder="Ingresa el NIF"
          />
          <InputText
            form={form}
            label="Email"
            name="email"
            type="email"
            placeholder="Ingresa el correo"
          />
        </div>
        <div className="flex gap-5">
          <SelectComponent
            dataList={rols}
            displayValue="label"
            form={form}
            itemValue="value"
            keyIdentifier="value"
            label="Roles"
            name="rol"
            placeholder="Selecciona un rol"
          />
          <SelectComponent
            dataList={categories}
            displayValue="label"
            form={form}
            itemValue="value"
            keyIdentifier="label"
            label="Categoria"
            name="typeCategory"
            placeholder="Selecciona una categoria"
          />
        </div>
        <Toggle form={form} label="Activo" name="status" />
      </div>
    </div>
  );
};

export default PersonalInformationForm;
