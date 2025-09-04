"use client";
import {
  INIT_CURRENT_PAGE,
  INIT_PAGE_SIZE,
} from "@/components/ui/Inputs/constants/Paginator";
import InputSearch from "@/components/ui/Inputs/InputSearch";
import TableContracts from "@/modules/contracts/components/table/TableContracts";
import {
  EndpointsContract,
  getAllContracts,
} from "@/modules/contracts/services/querys/getAllContracts";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const ContractsContainer = () => {
  const [currentPage, setCurrentPage] = useState(INIT_CURRENT_PAGE);

  const { data: contracts, isLoading } = useSWR(
    [EndpointsContract.Contract, currentPage],
    () => getAllContracts(currentPage, INIT_PAGE_SIZE)
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold text-slate-700 text-xl">
        Gestion de contratos
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-6 justify-between items-center">
          <div className="flex gap-4">
            buscar
          </div>

          <Link href="/contracts/manage">
            <Button className="bg-sky-900 text-white">Nuevo registro</Button>
          </Link>
        </div>
        {contracts && contracts.items && contracts.items.length != 0 && (
          <TableContracts
            contract={contracts}
            isLoading={isLoading}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div >
  );
};

export default ContractsContainer;
