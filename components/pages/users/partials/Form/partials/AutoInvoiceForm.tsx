import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import InputText from "@/components/ui/Inputs/InputText";
import { usersById } from "@/models/users/userDTO";
import { iva } from "@/utils/constanst/constanst";

type props = {
  form: UseFormReturn<any, any>;
  userData: usersById | null;
};

const AutoInvoiceForm = ({ form, userData }: props) => {
  useEffect(() => {
    if (userData != null && userData.auto_invoices.length > 0) {
      form.setValue("dni", userData?.auto_invoices[0].dni);
      form.setValue("lastNames", userData?.auto_invoices[0].address);
      form.setValue("nif", userData?.auto_invoices[0].population);
      form.setValue("email", userData?.auto_invoices[0].postal_code);
      form.setValue("rol", userData?.auto_invoices[0].province);
      form.setValue("typeCategory", userData?.kind);
      form.setValue("bankAccount", userData?.auto_invoices[0].bank_account);
      form.setValue(
        "retentionImport",
        userData?.auto_invoices[0].retention_percent,
      );
      form.setValue("iban", userData?.auto_invoices[0].iban);
      form.setValue("iva", userData?.auto_invoices[0].iva);
    }
  }, [userData?.auto_invoices]);

  return (
    <div className="rounded-xl shadow flex flex-col gap-6 p-4 bg-white">
      <p className="text-base font-bold text-slate-600">Datos de autofactura</p>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <InputText form={form} label="DNI" name="dni" type="text" />
          <InputText form={form} label="Direccion" name="addres" type="text" />
        </div>
        <div className="flex gap-5">
          <InputText
            form={form}
            label="Poblacion"
            name="population"
            type="text"
          />
          <InputText
            form={form}
            label="Codigo postal"
            name="postalCode"
            type="email"
          />
        </div>
        <div className="flex gap-5">
          <InputText
            form={form}
            label="Provincia"
            name="province"
            type="text"
          />
          <InputText
            form={form}
            label="Cuenta bancaria"
            name="bankAccount"
            type="number"
          />
        </div>
        <div className="flex gap-5">
          <InputText form={form} label="IBAN" name="iban" type="text" />
          <InputText
            form={form}
            label="Importe retencion"
            name="retentionImport"
            type="number"
          />
        </div>
        <div className="flex gap-5 w-1/2 pr-2">
          <SelectComponent
            dataList={iva}
            displayValue="label"
            form={form}
            itemValue="value"
            keyIdentifier="value"
            label="IVA"
            name="iva"
            placeholder="Selecciona el iva"
          />
        </div>
      </div>
    </div>
  );
};

export default AutoInvoiceForm;
