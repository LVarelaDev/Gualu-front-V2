import TeamsContainer from '@/modules/teams/components/TeamsContainer'

interface Props {
	searchParams: { page?: string; q?: string; sort: 'desc' | 'asc' }
}

const TeamsPage = async ({ searchParams }: Props) => {
	const page = searchParams.page ?? 1
	const query = searchParams.q ?? ''
	const sort = searchParams.sort ?? 'desc'

	return <TeamsContainer page={Number(page)} query={query} sort={sort} />
}
export default TeamsPage
