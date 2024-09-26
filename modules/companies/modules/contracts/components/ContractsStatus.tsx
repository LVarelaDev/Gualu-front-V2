import { Chip } from '@nextui-org/react'

type StatusType =
	| 'active'
	| 'tramitado'
	| 'baja recuperable'
	| 'caducado'
	| 'firma pendiente'
	| 'incidencia'
	| 'incidencia administrativa'
	| 'KO'
	| 'no comisionable'
	| 'pendiente activacion'
	| 'pendiente verificacion'
	| 'scoring'
	| 'scoring KO'
	| 'temporal'
	| 'very KO'

interface ContractStatusProps {
	status: StatusType
}

const ContractStatus = ({ status }: ContractStatusProps) => {
	const getStatusColor = (status: StatusType) => {
		switch (status) {
			case 'active':
				return 'bg-success-100 text-success-800'
			case 'tramitado':
				return 'bg-blue-100 text-blue-800'
			case 'baja recuperable':
				return 'bg-yellow-100 text-yellow-800'
			case 'caducado':
				return 'bg-red-100 text-red-800'
			case 'firma pendiente':
				return 'bg-purple-100 text-purple-800'
			case 'incidencia':
			case 'incidencia administrativa':
				return 'bg-orange-100 text-orange-800'
			case 'KO':
			case 'very KO':
				return 'bg-red-200 text-red-900'
			case 'no comisionable':
				return 'bg-gray-100 text-gray-800'
			case 'pendiente activacion':
			case 'pendiente verificacion':
				return 'bg-cyan-100 text-cyan-800'
			case 'scoring':
				return 'bg-indigo-100 text-indigo-800'
			case 'scoring KO':
				return 'bg-pink-100 text-pink-800'
			case 'temporal':
				return 'bg-teal-100 text-teal-800'
			default:
				return 'bg-gray-100 text-gray-800'
		}
	}

	return (
		<Chip
			size="sm"
			radius="sm"
			variant="flat"
			classNames={{ content: 'font-semibold' }}
			className={`${getStatusColor(status)}`}
		>
			{status}
		</Chip>
	)
}

export default ContractStatus
