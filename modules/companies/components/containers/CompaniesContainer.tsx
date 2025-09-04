"use client";
import InputSearch from "@/components/ui/Inputs/InputSearch";
import { FTable, FTableColumn } from "@/components/ui/Table/FTable";
import {
  EndpointCompanies,
  getAllCompanies,
} from "@/modules/companies/services/querys/getAllCompanies";
import { formatDate } from "@/modules/core/utils/formatDate";
import { Button } from "@nextui-org/react";
import { Delete02Icon, Edit02Icon } from "hugeicons-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { Company } from "../../interfaces/company";

const CompaniesContainer = () => {
  const form = useForm();
  const { data: companies, isLoading } = useSWR(
    [EndpointCompanies.companies],
    () => getAllCompanies()
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold text-slate-700 text-xl">
        Gestion de comercializadoras
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-6 justify-between items-center">
          <div className="flex gap-4">
            <InputSearch form={form} name="search" placeholder="Buscar..." />
          </div>

          <Link href="/companies/manage">
            <Button className="bg-sky-900 text-white">Nuevo registro</Button>
          </Link>
        </div>
        <FTable<Company>
          dataList={companies ?? []}
          keyIdentifier="id"
          isLoading={isLoading}
        >
          <FTableColumn<Company>
            labelHeader="Nombre"
            colRender={(_, company) => `${company.name}`}
          />
          <FTableColumn<Company>
            labelHeader="Estado"
            colRender={(_, company) => {
              return (
                <div className="flex gap-1 items-center">
                  <span className="p-1 rounded-full bg-red-500"></span>
                  {company.active ? "Activo" : "Inactivo"}
                </div>
              );
            }}
          />
          <FTableColumn<Company>
            labelHeader="Fecha creacion"
            colRender={(_, company) => formatDate(company.createdAt)}
          />
          <FTableColumn<Company>
            labelHeader="Acciones"
            colRender={(_, company) => {
              return (
                <div className="flex gap-3">
                  <Link href={"/manage?id=" + company.id}>
                    <Edit02Icon
                      size={17}
                      className="text-sky-700 cursor-pointer"
                    />
                  </Link>
                  <button
                    onClick={() => console.log("Se presiono el eliminar")}
                  >
                    <Delete02Icon size={17} className="text-red-400" />
                  </button>
                </div>
              );
            }}
          />
        </FTable>
      </div>
    </div>
  );
};

export default CompaniesContainer;
