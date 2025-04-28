"use client";
import {
  INIT_CURRENT_PAGE,
  INIT_PAGE_SIZE,
} from "@/components/ui/Inputs/constants/Paginator";
import TableContracts from "@/modules/contracts/components/table/TableContracts";
import {
  EndpointsContract,
  getAllContracts,
} from "@/modules/contracts/services/querys/getAllContracts";
import { useState } from "react";
import useSWR from "swr";

const ContractsContainer = () => {
  const [currentPage, setCurrentPage] = useState(INIT_CURRENT_PAGE);

  const { data: contracts, isLoading } = useSWR(
    [EndpointsContract.Contract, currentPage],
    () => getAllContracts(currentPage, INIT_PAGE_SIZE)
  );

  console.log("contracts", contracts);

  return (
    <>
      {contracts && contracts.items && contracts.items.length != 0 && (
        <TableContracts
          contract={contracts}
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default ContractsContainer;
