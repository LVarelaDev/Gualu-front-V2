"use client";

import {
  Cash01Icon,
  Configuration01Icon,
  DocumentAttachmentIcon,
  Dollar01Icon,
  DollarCircleIcon,
  EyeIcon,
} from "hugeicons-react";
import Link from "next/link";
import { ContractDto } from "../../manage/types/contractDto";
import { Tooltip } from "@heroui/react";

interface Props {
  contract: ContractDto;
}

const TableActionContracts = ({ contract }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Tooltip
        closeDelay={0}
        content="Ver contrato"
        className="bg-slate-700 text-white"
        delay={0}
      >
        <Link href={`/contracts/edit/${contract.id}`}>
          <EyeIcon size={17} className="text-slate-500" />
        </Link>
      </Tooltip>
      <Tooltip
        closeDelay={0}
        content="Ver documentos"
        className="bg-purple-700 text-white"
        delay={0}
      >
        <Link href={`/contracts/actions/${contract.cups}`}>
          <Configuration01Icon size={17} className="text-purple-800" />
        </Link>
      </Tooltip>
    </div>
  );
};

export default TableActionContracts;
