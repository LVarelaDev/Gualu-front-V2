import ContainerCompanyContracts from '@/modules/companies/modules/contracts/components/ContainerCompanyContracts'

interface Props {
	params: { id: string }
}

const page = async ({ params }: Props) => {
	return <ContainerCompanyContracts id={params.id} />
}

export default page
