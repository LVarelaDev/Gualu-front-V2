import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import TableActionsTeams from "@/modules/teams/components/table/TableActionsTeams";
import ChipStatus from "@/modules/core/components/common/ChipStatus";
import { formattedDate } from "@/utils/helpers";
import type { TeamTable } from "@/modules/teams/interfaces/team";

interface Props {
  data?: TeamTable[];
}

const TableTeams = ({ data }: Props) => {
  return (
    <Table aria-label="Team table">
      <TableHeader>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>Jefe de estado</TableColumn>
        <TableColumn>Fecha de creación</TableColumn>
        <TableColumn>Estado</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody items={data ?? []}>
        {(team) => (
          <TableRow key={team.id}>
            {/* Nombre */}
            <TableCell>{team.name}</TableCell>
            {/* Jefe de estado */}
            <TableCell>
              {`${team.leader.firstName} ${team.leader.lastName}`}
            </TableCell>
            {/* Fecha de creación */}
            <TableCell>{formattedDate(team.createdAt)}</TableCell>
            {/* Estado */}
            <TableCell>
              <ChipStatus isActive={team.active} />
            </TableCell>
            {/* Acciones */}
            <TableCell>
              <TableActionsTeams id={team.id} />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableTeams;
