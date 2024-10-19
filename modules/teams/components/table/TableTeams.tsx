import { CustomGrid, CustomGridColumn } from '@/components/ui/Table/FTable'
import GenericActionButtons from '@/modules/core/components/GenericActionButtons'
import PaginationWrapper from '@/modules/core/components/PaginationWrapper'
import ChipStatus from '@/modules/core/components/common/ChipStatus'
import type { DataResponse } from '@/modules/core/interfaces/dataResponse'
import TableActionsTeams from '@/modules/teams/components/table/TableActionsTeams'
import type { Team } from '@/modules/teams/interfaces/team'
import { deleteTeam } from '@/modules/teams/services/mutations/deleteTeam'
import { formattedDate } from '@/utils/helpers'
import { Spacer } from '@nextui-org/react'

interface Props {
	data?: DataResponse<Team>
}
const TableTeams = ({ data }: Props) => {
	return (
		<>
			<CustomGrid<Team> dataList={data?.results ?? []} keyIdentifier="id">
				<CustomGridColumn<Team>
					labelHeader="Nombre"
					colRender={(_, team) => team.name}
				/>

				<CustomGridColumn<Team>
					labelHeader="Jefe de estado"
					colRender={(_, team) =>
						`${team.leader_team.first_name} ${team.leader_team.last_name}`
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
						/* 	<GenericActionButtons
								editPath="/teams/manage"
								entityName="Equipo"
								id={team.id}
								name={team.name}
								deleteAction={deleteTeam}
							/> */
						<TableActionsTeams id={team.id} />
					)}
				/>
			</CustomGrid>
			<Spacer y={3} />
			<PaginationWrapper
				total={data?.total_pages ?? 1}
				page={data?.page}
				initialPage={1}
			/>
		</>
	)
}

export default TableTeams
