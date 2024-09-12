import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import InputText from "@/components/ui/Inputs/InputText";
import Toggle from "@/components/ui/Toggle/Toggle";
import { usersById } from "@/models/users/userDTO";
import { categories, rols } from "@/utils/constanst/constanst";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any, any>;
  userData: usersById | null;
};

const PersonalInformationForm = ({ form, userData }: props) => {
  useEffect(() => {
    if (userData != null) {
      form.setValue("names", userData.first_name);
      form.setValue("lastNames", userData.last_name);
      form.setValue("nif", userData.nif);
      form.setValue("email", userData.email);
      form.setValue("rol", userData.role);
      form.setValue("typeCategory", userData.kind);
    }
  }, [userData]);

  return (
    <div className="rounded-xl shadow flex flex-col gap-6 p-4 bg-white">
      <p className="text-base font-bold text-slate-600">Información personal</p>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <InputText form={form} name="names" label="Nombres" type="text" />
          <InputText
            form={form}
            name="lastNames"
            label="Apellidos"
            type="text"
          />
        </div>
        <div className="flex gap-5">
          <InputText form={form} name="nif" label="NIF" type="text" />
          <InputText form={form} name="email" label="Email" type="email" />
        </div>
        <div className="flex gap-5">
          <SelectComponent
            form={form}
            dataList={rols}
            displayValue="label"
            itemValue="value"
            placeholder="Selecciona un rol"
            keyIdentifier="value"
            name="rol"
            label="Roles"
          />
          <SelectComponent
            form={form}
            dataList={categories}
            displayValue="label"
            itemValue="value"
            placeholder="Selecciona una categoria"
            keyIdentifier="label"
            name="typeCategory"
            label="Categoria"
          />
        </div>
        <Toggle form={form} label="Activo" name="status" />
      </div>
    </div>
  );
};

export default PersonalInformationForm;
