"use client";
import TableHeaderTeams from "@/modules/teams/components/table/TableHeaderTeams";
import TableTeams from "@/modules/teams/components/table/TableTeams";
import { getAllTeams } from "@/modules/teams/services/querys/getAllTeams";
import { searchTeam } from "@/modules/teams/services/querys/searchTeam";

interface Props {
  page?: number;
  query?: string;
  sort?: string;
}
const TeamsContainer = async ({ page, query, sort }: Props) => {
  // hacer peticion de todos los teams
  const dataTeams = await getAllTeams();

  // hacer peticion de busqueda unicamente si el query existe
  const searchData = query ? await searchTeam({ q: query }) : undefined;

  // si searchData no existe, entonces se usa dataTeams
  const data = searchData || dataTeams;
  return (
    <>
      <TableHeaderTeams />
      {dataTeams && <TableTeams data={dataTeams} />}
    </>
  );
};

export default TeamsContainer;
