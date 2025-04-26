"use client";
import TableContracts from "@/modules/contracts/components/table/TableContracts";
import {
  EndpointsContract,
  getAllContracts,
} from "@/modules/contracts/services/querys/getAllContracts";
import useSWR from "swr";

const ContractsContainer = () => {
  const { data: contracts, isLoading } = useSWR(
    [EndpointsContract.Contract],
    () => getAllContracts()
  );

  return (
    <>
      {contracts && contracts.length != 0 && (
        <TableContracts data={contracts} isLoading={isLoading} />
      )}
    </>
  );
};

export default ContractsContainer;
