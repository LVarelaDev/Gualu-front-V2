"use client";

import { CustomGrid, CustomGridColumn } from "@/components/ui/Table/FTable";
import TableActionContracts from "@/modules/contracts/components/table/TableActionContracts";
import type { Allcontract } from "@/modules/contracts/interfaces/allContract";
import ContractStatusChip from "@/modules/core/components/common/ContractsStatusChip";
import { formatCurrency } from "@/modules/core/utils/formatCurrency";
import { formatDate } from "@/modules/core/utils/formatDate";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";

interface Props {
  data: Allcontract[];
}

const TableContracts = ({ data }: Props) => {
  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>NIF</TableColumn>
        <TableColumn>Correo</TableColumn>
        <TableColumn>Estado</TableColumn>
        <TableColumn>Rol</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>hola</TableCell>
            <TableCell>Hola</TableCell>
            <TableCell>Hola</TableCell>

            <TableCell>
              <div className="flex gap-3">
                <Tooltip
                  closeDelay={0}
                  content="Editar usuario"
                  delay={0}
                  color="success"
                >
                  <FontAwesomeIcon
                    className="text-sky-700 cursor-pointer"
                    icon={faPencilAlt}
                    onClick={() => {}}
                  />
                </Tooltip>
                <Tooltip
                  closeDelay={0}
                  content="Eliminar usuario"
                  className="bg-red-400 text-white"
                  delay={0}
                >
                  <FontAwesomeIcon
                    className="text-red-500 cursor-pointer"
                    icon={faTrash}
                  />
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableContracts;
