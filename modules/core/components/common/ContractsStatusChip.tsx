'use client'

import type { ContractStatus } from '@/modules/core/interfaces/contract/contractStatus'
import { Chip, Tooltip } from '@heroui/react';


import {
	AlertCircleIcon,
	CheckmarkCircle01Icon,
	Clock01Icon,
	HelpCircleIcon,
	MultiplicationSignCircleIcon,
} from 'hugeicons-react'

const statusConfig: Record<
	ContractStatus,
	{ label: string; color: string; icon: React.ReactNode; description: string }
> = {
	active: {
		label: 'Activo',
		color: 'bg-emerald-500/20 text-emerald-600',
		icon: <CheckmarkCircle01Icon size={14} strokeWidth={2} />,
		description: 'El contrato está activo y en vigor.',
	},
	processed: {
		label: 'Tramitado',
		color: 'bg-blue-500/20 text-blue-600',
		icon: <CheckmarkCircle01Icon size={14} strokeWidth={2} />,
		description: 'El contrato ha sido procesado correctamente.',
	},
	recoverable_cancellation: {
		label: 'Baja recuperable',
		color: 'bg-yellow-500/20 text-yellow-600',
		icon: <AlertCircleIcon size={14} strokeWidth={2} />,
		description: 'El contrato ha sido cancelado pero puede ser recuperado.',
	},
	expired: {
		label: 'Caducado',
		color: 'bg-red-500/20 text-red-600',
		icon: <MultiplicationSignCircleIcon size={14} strokeWidth={2} />,
		description: 'El contrato ha expirado y ya no está en vigor.',
	},
	pending_signature: {
		label: 'Firma pendiente',
		color: 'bg-orange-500/20 text-orange-600',
		icon: <Clock01Icon size={14} strokeWidth={2} />,
		description: 'El contrato está pendiente de firma por parte del cliente.',
	},
	incident: {
		label: 'Incidencia',
		color: 'bg-purple-500/20 text-purple-600',
		icon: <AlertCircleIcon size={14} strokeWidth={2} />,
		description: 'Hay una incidencia con el contrato que requiere atención.',
	},
	administrative_incident: {
		label: 'Incidencia administrativa',
		color: 'bg-indigo-500/20 text-indigo-600',
		icon: <AlertCircleIcon size={14} strokeWidth={2} />,
		description: 'Hay una incidencia administrativa que requiere revisión.',
	},
	KO: {
		label: 'KO',
		color: 'bg-red-500/20 text-red-600',
		icon: <MultiplicationSignCircleIcon size={14} strokeWidth={2} />,
		description: 'El contrato ha sido rechazado.',
	},
	not_commissionable: {
		label: 'No comisionable',
		color: 'bg-gray-500/20 text-gray-600',
		icon: <MultiplicationSignCircleIcon size={14} strokeWidth={2} />,
		description: 'Este contrato no genera comisiones.',
	},
	pending_activation: {
		label: 'Pendiente activación',
		color: 'bg-teal-500/20 text-teal-600',
		icon: <Clock01Icon size={14} strokeWidth={2} />,
		description: 'El contrato está pendiente de activación.',
	},
	pending_verification: {
		label: 'Pendiente verificación',
		color: 'bg-cyan-500/20 text-cyan-600',
		icon: <Clock01Icon size={14} strokeWidth={2} />,
		description: 'El contrato está pendiente de verificación.',
	},
	scoring: {
		label: 'Scoring',
		color: 'bg-pink-500/20 text-pink-600',
		icon: <HelpCircleIcon size={14} strokeWidth={2} />,
		description: 'El contrato está en proceso de evaluación de riesgo.',
	},
	scoring_KO: {
		label: 'Scoring KO',
		color: 'bg-red-500/20 text-red-600',
		icon: <MultiplicationSignCircleIcon size={14} strokeWidth={2} />,
		description: 'El contrato no ha pasado la evaluación de riesgo.',
	},
	temporary: {
		label: 'Temporal',
		color: 'bg-lime-500/20 text-lime-600',
		icon: <Clock01Icon size={14} strokeWidth={2} />,
		description: 'Este es un contrato temporal.',
	},
	processed_very_KO: {
		label: 'Tramitado very KO',
		color: 'bg-red-500/20 text-red-600',
		icon: <MultiplicationSignCircleIcon size={14} strokeWidth={2} />,
		description:
			'El contrato ha sido procesado pero con un rechazo definitivo.',
	},
}

interface Props {
	status: ContractStatus
}

export default function ContractStatusChip({ status }: Props) {
	const { label, color, icon, description } = statusConfig[status]

	return (
		<Tooltip content={description}>
			<Chip
				size="sm"
				radius="sm"
				className={color}
				classNames={{ content: 'font-semibold' }}
				startContent={icon}
			>
				<span>{label}</span>
			</Chip>
		</Tooltip>
	)
}
