import FormCompany from '@/modules/companies/components/manage/FormCompany'
import { getOneCompany } from '@/modules/companies/services/querys/getOneCompany'
import { notFound } from 'next/navigation'

interface Props {
	id?: string
}

const ManageContainerCompany = async ({ id }: Props) => {
	let company = undefined

	if (id) {
		company = await getOneCompany(id)
		if (!company) {
			notFound()
		}
	}

	return (
		<section className="mt-10 max-w-md">
			<FormCompany companyData={company} />
		</section>
	)
}

export default ManageContainerCompany
