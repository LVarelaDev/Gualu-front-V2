"use client";
import {
  Table,
  TableBody,
  TableColumn,
  TableCell,
  TableRow,
  TableHeader,
  Chip,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";

import DropdownActions from "@/components/pages/teams/DropdownActions";
import { Team } from "@/models/teams/team";
import { formatDate } from "@/utils/formatterDate";
import { useSearchParams } from "next/navigation";
import ModalDeleteTeams from "./ModalDeleteTeams";
import { useState } from "react";

interface Props {
  data?: Team[];
}
const TableTeams = ({ data }: Props) => {
  const colums = [
    "Nombre",
    "Jefe de estado",
    "Fecha de creacion",
    "Estado",
    "Acciones",
  ];

  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [teamState, setTeamState] = useState({ name: "", id: "" })
  console.log(teamState)
  return (
    <>
      <Table
        isCompact
        removeWrapper
        aria-label="teams table"
        classNames={{
          th: "bg-transparent border-b text-gray-500 text-sm py-4",
        }}
        radius="lg"
        selectionMode="single"
      >
        <TableHeader columns={colums}>
          {colums.map((column, index) => (
            <TableColumn key={column + index}>{column} </TableColumn>
          ))}
        </TableHeader>
        <TableBody
          emptyContent={query ? `No se encontro equipos con el nombre "${query}"` : "No hay datos"}
          items={data ?? []}
          loadingContent={<Spinner color="default" />}
        >
          {(row) => (
            <TableRow key={row.id}>
              <TableCell className="text-gray-700">{row.name}</TableCell>

              <TableCell className="font-bold text-gray-900">
                {`${row.users.first_name} ${row.users.last_name}`}
              </TableCell>

              <TableCell className="text-gray-700">
                {formatDate(row.created_at)}
              </TableCell>

              <TableCell>
                <Chip
                  className="border-none text-gray-700"
                  color={row.active ? "success" : "danger"}
                  size="sm"
                  variant="dot"
                >
                  {row.active ? "Activo" : "Inactivo"}
                </Chip>
              </TableCell>

              <TableCell align="center" >
                <DropdownActions id={row.id} onOpen={onOpen} onClick={() => setTeamState({ id: row.id, name: row.name })} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ModalDeleteTeams id={teamState.id} name={teamState.name} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default TableTeams;
