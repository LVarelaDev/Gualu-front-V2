import TableCompanyContracts from '@/modules/companies/modules/contracts/components/TableCompanyContracts'
import { getOneCompany } from '@/modules/companies/services/querys/getOneCompany'
import { notFound } from 'next/navigation'

interface Props {
	id: string
}
const ContainerCompanyContracts = async ({ id }: Props) => {
	const company = await getOneCompany(id)
	if (!company) {
		notFound()
	}
	return (
		<section>
			<TableCompanyContracts data={company} />
		</section>
	)
}

export default ContainerCompanyContracts
