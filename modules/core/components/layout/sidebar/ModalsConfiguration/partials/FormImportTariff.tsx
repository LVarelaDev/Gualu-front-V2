import SelectComponent from "@/components/ui/Inputs/AutoComplete";
import { CompanyDto } from "@/modules/companies/interfaces/company";
import { getAllCompanies } from "@/modules/companies/services/querys/getAllCompanies";
import { Input } from "@nextui-org/input";
import { useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

interface FormImportTariff {
  form: UseFormReturn<
    {
      companyId: string;
      file: File[];
    },
    any,
    undefined
  >;
}

const FormImportTariff = ({ form }: FormImportTariff) => {
  const [companies, setCompanies] = useState<CompanyDto[]>([]);

  useEffect(() => {
    const fetch = async () => {
      if (companies && companies.length === 0) {
        setCompanies((await getAllCompanies()) ?? []);
      }
    };

    fetch();
  }, []);

  const company = form.watch("companyId");

  return (
    <div className="flex flex-col gap-5">
      <SelectComponent
        dataList={companies}
        displayValue="name"
        form={form}
        itemValue="id"
        keyIdentifier="id"
        label="Comercializadora"
        name="companyId"
        placeholder="Selecciona una comercializadora"
      />
      <Input
        type="file"
        placeholder="Importar archivo"
        disabled={!company && company === ""}
        {...form.register("file")}
      />
    </div>
  );
};

export default FormImportTariff;
