import TableCompanies from '@/modules/companies/components/TableCompanies'
import { getAllCompanies } from '@/modules/companies/services/querys/getAllCompanies'
import { Suspense } from 'react'

const CompaniesContainer = async () => {
	const data = await getAllCompanies()
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<TableCompanies data={data ?? []} />
		</Suspense>
	)
}

export default CompaniesContainer
