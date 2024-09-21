import BackButton from '@/modules/core/components/common/BackButton'
import ManageContainer from '@/modules/teams/components/containers/ManageContainer'
import { Suspense } from 'react'

interface Props {
	searchParams: {
		id?: string
	}
}
const page = ({ searchParams }: Props) => {
	const id = searchParams.id
	return (
		<main className="container mx-auto">
			<BackButton />
			<Suspense fallback={<span>loading...</span>}>
				<ManageContainer id={id} />
			</Suspense>
		</main>
	)
}

export default page
