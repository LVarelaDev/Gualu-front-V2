"use client";
import React from "react";
import ContractsNations from "./contracts-nations/ContractsNations";
import { ContractStatusCharts } from "./contracts-status/ContractStatusCard";
import { useForm } from "react-hook-form";
import InputRangeDate from "@/components/ui/Inputs/InputRangeDate";
import { Button } from "@nextui-org/react";

const DashboardContainer = () => {
  const { control, handleSubmit, reset, watch } = useForm();
  const loading = false; // Replace with actual loading state if needed
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center w-full rounded-lg">
        <div className="font-bold text-slate-700 text-xl">Dashboard</div>
        <div className="flex gap-2">
          <InputRangeDate
            name="dateRange"
            control={control}
            label="Rango de fechas"
            description="Selecciona la fecha de inicio y fin"
            isRequired
            className="min-w-64"
          />
          <Button
            disabled={loading}
            className={`${loading ? "bg-gray-500 " : "bg-sky-900 text-white"}  shadow mt-2`}
            onClick={handleSubmit((e) => console.log(e))}
          >
            Consultar
          </Button>
        </div>
      </div>
      <ContractStatusCharts />
      <ContractsNations />
    </div>
  );
};

export default DashboardContainer;
