"use client";

import InputSearch from "@/components/ui/Inputs/InputSearch";
import { FTable, FTableColumn } from "@/components/ui/Table/FTable";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { ContractDto } from "../../manage/types/contractDto";
import TableActionContracts from "./TableActionContracts";
import { PaginationDto } from "@/modules/core/interfaces/paginationDto";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@heroui/react";

interface Props {
  contract: PaginationDto<ContractDto[]>;
  isLoading?: boolean;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const TableContracts = ({ contract, isLoading, setCurrentPage }: Props) => {
  const onChangePage = (page: number) => setCurrentPage(page);
  const form = useForm();
  return (
    <div className="flex flex-col gap-5">

      {contract.items.length !== 0 && (
        <FTable<ContractDto>
          dataList={contract.items}
          keyIdentifier="id"
          isLoading={isLoading}
          currentPage={contract.currentPage}
          onPageChange={(page: number) => onChangePage(page)}
          totalPages={contract.totalPages}
        >
          <FTableColumn<ContractDto>
            labelHeader="Cups"
            colRender={(_, contract) => `${contract.cups}`}
          />
          <FTableColumn<ContractDto>
            labelHeader="Empresa"
            colRender={(_, contract) =>
              contract.company.name ?? "no hay registro"
            }
          />
          <FTableColumn<ContractDto>
            labelHeader="Comercial"
            colRender={(_, contract) =>
              `${contract.commerce.firstName} ${contract.commerce.lastName}`
            }
          />
          <FTableColumn<ContractDto>
            labelHeader="Estado contrado"
            colRender={(_, contract) => {
              return (
                <div className="flex gap-1 items-center">
                  <span className="p-1 rounded-full bg-red-500"></span>
                  {contract.status.name}
                </div>
              );
            }}
          />
          <FTableColumn<ContractDto>
            labelHeader="Iban"
            colRender={(_, contract) => contract.iban ?? "no hay registro"}
          />
          <FTableColumn<ContractDto>
            labelHeader="Tipo de contrato"
            colRender={(_, contract) =>
              contract.contractType ?? "no hay registro"
            }
          />
          <FTableColumn<ContractDto>
            labelHeader="Cliente"
            colRender={(_, contract) =>
              contract.client.name ?? "no hay registro"
            }
          />
          <FTableColumn<ContractDto>
            labelHeader="Nif cliente"
            colRender={(_, contract) =>
              `${contract.client.typeNif} - ${contract.client.nif} `
            }
          />
          <FTableColumn<ContractDto>
            labelHeader="Fee"
            colRender={(_, contract) => {
              return (
                <p>
                  {contract.fee ?? "no hay registro"}{" "}
                  <span className="text-[9px] text-gray-700 ">Euro/MW</span>
                </p>
              );
            }}
          />
          <FTableColumn<ContractDto>
            labelHeader="Consumo"
            colRender={(_, contract) => {
              return (
                <p>
                  {contract.consumption ?? "no hay registro"}{" "}
                  <span className="text-[9px] text-gray-700 ">KW/Año</span>
                </p>
              );
            }}
          />
          <FTableColumn<ContractDto>
            labelHeader="Acciones"
            colRender={(_, contract) => {
              return <TableActionContracts contract={contract} />;
            }}
          />
        </FTable>
      )}
    </div>
  );
};

export default TableContracts;
