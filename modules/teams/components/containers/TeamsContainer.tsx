import { CustomGrid, CustomGridColumn } from '@/components/ui/Table/FTable'
import PaginationWrapper from '@/modules/core/components/PaginationWrapper'
import ChipStatus from '@/modules/core/components/common/ChipStatus'
import TableHeaderTeams from '@/modules/teams/components/table/TableHeaderTeams'
import TableTeams from '@/modules/teams/components/table/TableTeams'
import type { Team } from '@/modules/teams/interfaces/team'
import { getAllTeams } from '@/modules/teams/services/querys/getAllTeams'
import { searchTeam } from '@/modules/teams/services/querys/searchTeam'
import { formattedDate } from '@/utils/helpers'
import { Spacer } from '@nextui-org/react'
import { Delete02Icon, TaskEdit01Icon } from 'hugeicons-react'
import { Suspense } from 'react'
import ActionButtons from '../ActionButtons'

interface Props {
	page: number
	query: string
	sort: string
}
const TeamsContainer = async ({ page, query, sort }: Props) => {
	const dataTeams = await getAllTeams({ page, sort })
	const searchData = await searchTeam({ q: query })
	const data = query ? searchData : dataTeams
	return (
		<>
			<TableHeaderTeams />
			<Suspense key={query + data?.page} fallback={<div>Loading...</div>}>
				{/* <TableTeams data={data} /> */}
				<CustomGrid<Team> dataList={data?.results ?? []} keyIdentifier="id">
					<CustomGridColumn<Team>
						labelHeader="Nombre"
						colRender={(_, team) => team.name}
					/>

					<CustomGridColumn<Team>
						labelHeader="Jefe de estado"
						colRender={(_, team) =>
							`${team.users.first_name} ${team.users.last_name}`
						}
					/>
					<CustomGridColumn<Team>
						labelHeader="Fecha de creacion"
						colRender={(_, team) => formattedDate(team.created_at)}
					/>
					<CustomGridColumn<Team>
						labelHeader="Estado"
						colRender={(_, team) => <ChipStatus isActive={team.active} />}
					/>
					<CustomGridColumn<Team>
						labelHeader="Acciones"
						colRender={(_, team) => (
							<ActionButtons id={team.id} name={team.name} />
						)}
					/>
				</CustomGrid>
				<Spacer y={3} />
				<PaginationWrapper
					total={data?.total_pages ?? 1}
					page={data?.page}
					initialPage={1}
				/>
			</Suspense>
		</>
	)
}

export default TeamsContainer
