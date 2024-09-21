import { Chip } from '@nextui-org/react'

interface Props {
	isActive: boolean
}
const ChipStatus = ({ isActive }: Props) => {
	return (
		<Chip
			classNames={{ content: 'font-semibold' }}
			color={isActive ? 'success' : 'danger'}
			size="sm"
			radius="sm"
			variant="flat"
		>
			{isActive ? 'Activo' : 'Inactivo'}
		</Chip>
	)
}

export default ChipStatus
