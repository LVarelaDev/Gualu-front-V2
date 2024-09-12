import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import InputText from "@/components/ui/Inputs/InputText";
import { usersById } from "@/models/users/userDTO";
import { iva } from "@/utils/constanst/constanst";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

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
        userData?.auto_invoices[0].retention_percent
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
          <InputText form={form} name="dni" label="DNI" type="text" />
          <InputText form={form} name="addres" label="Direccion" type="text" />
        </div>
        <div className="flex gap-5">
          <InputText
            form={form}
            name="population"
            label="Poblacion"
            type="text"
          />
          <InputText
            form={form}
            name="postalCode"
            label="Codigo postal"
            type="email"
          />
        </div>
        <div className="flex gap-5">
          <InputText
            form={form}
            name="province"
            label="Provincia"
            type="text"
          />
          <InputText
            form={form}
            name="bankAccount"
            label="Cuenta bancaria"
            type="number"
          />
        </div>
        <div className="flex gap-5">
          <InputText form={form} name="iban" label="IBAN" type="text" />
          <InputText
            form={form}
            name="retentionImport"
            label="Importe retencion"
            type="number"
          />
        </div>
        <div className="flex gap-5 w-1/2 pr-2">
          <SelectComponent
            form={form}
            dataList={iva}
            displayValue="label"
            itemValue="value"
            placeholder="Selecciona el iva"
            keyIdentifier="value"
            name="iva"
            label="IVA"
          />
        </div>
      </div>
    </div>
  );
};

export default AutoInvoiceForm;
