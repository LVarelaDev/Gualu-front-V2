import { Chip } from '@nextui-org/react'

interface Props {
	isActive: boolean
}
const ChipStatus = ({ isActive }: Props) => {
	return (
		<Chip
			className="border-none text-gray-700"
			color={isActive ? 'success' : 'danger'}
			variant="dot"
		>
			{isActive ? 'Activo' : 'Inactivo'}
		</Chip>
	)
}

export default ChipStatus
