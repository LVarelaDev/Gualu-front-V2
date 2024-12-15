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
    if (userData != null && userData.autoInvoice != null) {
      form.setValue("dni", userData?.autoInvoice.dni);
      form.setValue("addres", userData?.autoInvoice.addres);
      form.setValue("population", userData?.autoInvoice.population);
      form.setValue("postalCode", userData?.autoInvoice.postalCode);
      form.setValue("province", userData?.autoInvoice.province);
      form.setValue("bankAccount", userData?.autoInvoice.bankAccount);
      form.setValue("retentionImport", userData?.autoInvoice.retentionImport);
      form.setValue("iban", userData?.autoInvoice.iban);
      form.setValue("iva", userData?.autoInvoice.iva);
    }
  }, [userData?.autoInvoice]);

  return (
    <div className="rounded-xl shadow flex flex-col gap-6 p-4 bg-white">
      <p className="text-base font-bold text-slate-600">Datos de autofactura</p>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <InputText
            form={form}
            label="DNI"
            name="dni"
            type="text"
            placeholder="Ingresa tu DNI"
          />
          <InputText
            form={form}
            label="Direccion"
            name="addres"
            type="text"
            placeholder="Ingresa tu dirección"
          />
        </div>
        <div className="flex gap-5">
          <InputText
            form={form}
            label="Poblacion"
            name="population"
            type="text"
            placeholder="Ingresa la población"
          />
          <InputText
            form={form}
            label="Codigo postal"
            name="postalCode"
            type="email"
            placeholder="Ingresa el codigo postal"
          />
        </div>
        <div className="flex gap-5">
          <InputText
            form={form}
            label="Provincia"
            name="province"
            type="text"
            placeholder="Ingresa la provincia"
          />
          <InputText
            form={form}
            label="Cuenta bancaria"
            name="bankAccount"
            type="number"
            placeholder="Ingresa tu cuenta bancaria"
          />
        </div>
        <div className="flex gap-5">
          <InputText
            form={form}
            label="IBAN"
            name="iban"
            type="text"
            placeholder="Ingresa el IBAN"
          />
          <InputText
            form={form}
            label="Importe retencion"
            name="retentionImport"
            type="number"
            placeholder="Ingresa el importe de retención"
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
