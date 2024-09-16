import { Suspense } from "react";
import { Button } from "@nextui-org/button";
import { PlusSignIcon } from "hugeicons-react";

import SearchInput from "./SearchInput";
import PaginationTeams from "./PaginationTeams";

import { searchTeam } from "@/services/teams/searchTeam";
import { getAllTeams } from "@/services/teams/getAllTeams";
import TableTeams from "@/components/pages/teams/TableTeams";
import { getAllUsers } from "@/services/users/user.service";
import ModalSaveTeam from "./save/ModalSaveTeam";


interface Props {
  page: number;
  query: string;
}
const TeamsContainer = async ({ page, query }: Props) => {
  const dataTeams = await getAllTeams({ page, limit: 6 });
  const searchData = await searchTeam({ q: query });
  const userData = await getAllUsers()
  const data = query ? searchData : dataTeams;
  return (
    <>
      <section className="flex items-center justify-between py-3">
        <SearchInput />

        <ModalSaveTeam userData={userData} />
      </section>
      <div className="py-4">
        <span className="text-gray-400 text-sm">
          Total {data?.total_results} equipos
        </span>
      </div>

      <Suspense key={query + data?.page} fallback={<div>Loading...</div>}>
        <TableTeams data={data?.results} />
        <PaginationTeams
          initialPage={1}
          page={data?.page ?? 1}
          total={data?.total_pages ?? 0}
        />
      </Suspense>
    </>
  );
};

export default TeamsContainer;
