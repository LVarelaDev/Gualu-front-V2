import TableHeader from '@/modules/teams/components/table/TableHeader'
import TableTeams from '@/modules/teams/components/table/TableTeams'
import { getAllTeams } from '@/modules/teams/services/query/getAllTeams'
import { searchTeam } from '@/modules/teams/services/query/searchTeam'
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
			<TableHeader />
			<div className="py-4">
				<span className="text-gray-400 text-sm">
					Total {data?.total_results} equipos
				</span>
			</div>

			<Suspense key={query + data?.page} fallback={<div>Loading...</div>}>
				<TableTeams
					data={data?.results}
					page={data?.page}
					total_pages={data?.total_pages}
				/>
			</Suspense>
		</>
	)
}

export default TeamsContainer
