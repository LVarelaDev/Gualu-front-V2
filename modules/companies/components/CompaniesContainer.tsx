import TableHeader from '@/modules/teams/components/table/TableHeaderTeams'
import { Button } from '@nextui-org/button'
import { PlusSignIcon } from 'hugeicons-react'
import Link from 'next/link'
import { getAllCompanies } from '../services/querys/getAllCompanies'
import TableCompanies from './TableCompanies'

const CompaniesContainer = async () => {
	const data = await getAllCompanies()
	return (
		<section>
			<div className="flex items-center justify-end py-5">
				<Button
					as={Link}
					color="primary"
					endContent={<PlusSignIcon size={20} />}
					href="/companies/manage"
				>
					Agregar
				</Button>
			</div>
			<TableCompanies data={data ?? []} />
		</section>
	)
}

export default CompaniesContainer
