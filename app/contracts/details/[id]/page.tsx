import ContainerContractDetails from '@/modules/contracts/details/components/ContainerContractDetails'

interface Props {
	params: { id: string }
}
const page = ({ params }: Props) => {
	return (
		<>
			<ContainerContractDetails id={params.id} />
		</>
	)
}

export default page
