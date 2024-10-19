"use client"
import { Chip } from '@nextui-org/react'
import {
	CheckmarkCircle01Icon,
	MultiplicationSignCircleIcon,
} from 'hugeicons-react'

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
			startContent={
				isActive ? (
					<CheckmarkCircle01Icon size={14} strokeWidth={2} />
				) : (
					<MultiplicationSignCircleIcon size={14} strokeWidth={2} />
				)
			}
		>
			{isActive ? 'Activo' : 'Inactivo'}
		</Chip>
	)
}

export default ChipStatus
