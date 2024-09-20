import TableHeaderTeams from '@/modules/teams/components/table/TableHeaderTeams'
import TableTeams from '@/modules/teams/components/table/TableTeams'
import { getAllTeams } from '@/modules/teams/services/querys/getAllTeams'
import { searchTeam } from '@/modules/teams/services/querys/searchTeam'
import { Suspense } from 'react'

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
				<TableTeams data={data} />
			</Suspense>
		</>
	)
}

export default TeamsContainer
