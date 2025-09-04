import { getOneContract } from '@/modules/contracts/details/services/getOneContract'
import BackButton from '@/modules/core/components/common/BackButton'
import ChipStatus from '@/modules/core/components/common/ChipStatus'
import ContractStatusChip from '@/modules/core/components/common/ContractsStatusChip'
import { formatCurrency } from '@/modules/core/utils/formatCurrency'
import { formatDate } from '@/modules/core/utils/formatDate'
import {
	Briefcase01Icon,
	CreditCardIcon,
	Files01Icon,
	Location01Icon,
	Mail01Icon,
	Message01Icon,
	SmartPhone01Icon,
	UserCircleIcon,
	ZapIcon,
} from 'hugeicons-react'
import { notFound } from 'next/navigation'
import ContractInfoCard from './ContractInfoCard'
import ContractInfoItem from './ContractInfoItem'
import { Chip, Divider, Progress } from '@heroui/react'

interface Props {
	id: string
}
const ContainerContractDetails = async ({ id }: Props) => {
	const contract = await getOneContract(id)

	if (!contract) {
		notFound()
	}
	return (
		<section className="container mx-auto mt-5">
			<BackButton />
			<h1 className="text-3xl font-bold py-5">Detalles del contrato</h1>
			<section className="grid gap-6 md:grid-cols-2">
				{/* Detalles del contrato */}

				<ContractInfoCard
					title="Detalles del contrato"
					icon={
						<ZapIcon
							className="text-yellow-500 dark:text-yellow-400"
							size={20}
						/>
					}
				>
					<ContractInfoItem label="Tarifa" value={contract.tariffs.name} />
					<ContractInfoItem label="Concepto" value={contract.concepts.name} />
					<ContractInfoItem
						label="Consumo"
						value={`${contract.consumption} KWh`}
					/>
					<ContractInfoItem
						label="Cuota"
						value={formatCurrency(contract.fee)}
					/>

					<Divider className="my-2" />
					<div>
						<h3 className="font-medium mt-2">Potencias Contratadas</h3>
						<div className="pt-2 space-y-3 text-gray-800 dark:text-gray-400">
							<Progress
								label="Periodo 1"
								value={contract.power_one}
								valueLabel={`${contract.power_one} KWh`}
								maxValue={500}
								showValueLabel
								size="sm"
							/>
							<Progress
								label="Periodo 2"
								value={contract.power_two}
								valueLabel={`${contract.power_two} KWh`}
								maxValue={500}
								showValueLabel
								size="sm"
							/>

							<Progress
								label="Periodo 3"
								value={contract.power_three}
								valueLabel={`${contract.power_three} KWh`}
								maxValue={500}
								showValueLabel
								size="sm"
							/>
							<Progress
								label="Periodo 4"
								value={contract.power_four}
								valueLabel={`${contract.power_four} KWh`}
								maxValue={500}
								showValueLabel
								size="sm"
							/>
							<Progress
								label="Periodo 5"
								value={contract.power_five}
								valueLabel={`${contract.power_five} KWh`}
								maxValue={500}
								showValueLabel
								size="sm"
							/>
						</div>
					</div>
				</ContractInfoCard>

				{/* Informacion General */}
				<ContractInfoCard
					title="Detalles generales"
					icon={
						<Files01Icon
							size={20}
							className="text-gray-500 dark:text-gray-400"
						/>
					}
				>
					<ContractInfoItem label="Compañia" value={contract.companies.name} />
					<ContractInfoItem
						label="Estado"
						value={<ContractStatusChip status={contract.status} />}
					/>
					<ContractInfoItem
						label="Fecha de creacion"
						value={formatDate(contract.created_at)}
					/>
					<ContractInfoItem
						label="Fecha de actualizacion"
						value={formatDate(contract.updated_at)}
					/>
					<ContractInfoItem label="Cups" value={contract.cups} />
					<Divider className="my-2" />

					{/* Direccion */}

					<h4 className="py-3 font-semibold text-lg flex items-center gap-x-2">
						<Location01Icon
							className="text-green-500 dark:text-green-400"
							size={20}
						/>
						Direccion De suministro
					</h4>
					<section className="flex items-center justify-between">
						<div>
							<p className="font-medium capitalize">
								{contract.delivery_road_type} {contract.delivery_address},{' '}
								{contract.delivery_number}
							</p>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								{`Portal ${contract.delivery_portal}, Escalera ${contract.delivery_ladder}, Piso ${contract.delivery_floor}, Puerta ${contract.delivery_door}`}
							</p>

							<p className="font-medium text-sm capitalize">
								{contract.delivery_population}, {contract.delivery_province}
							</p>
						</div>
						<Chip
							variant="bordered"
							size="sm"
							classNames={{
								base: 'text-blue-500 border-blue-500 dark:text-blue-400 dark:border-blue-400',
								content: 'font-medium',
							}}
						>
							{contract.delivery_postal_code}
						</Chip>
					</section>
				</ContractInfoCard>
				{/* detalles del cliente */}

				<ContractInfoCard
					title="Detalles del cliente"
					icon={
						<UserCircleIcon
							className="text-blue-500 dark:text-blue-400"
							size={20}
						/>
					}
				>
					<ContractInfoItem label="Nombre" value={contract.clients.name} />
					<ContractInfoItem
						label="Tipo de cliente"
						value={contract.clients.type}
					/>
					<ContractInfoItem label="NIF" value={contract.clients.nif} />
					<ContractInfoItem
						label="Telefono"
						value={contract.clients.phone}
						icon={<SmartPhone01Icon size={18} strokeWidth={1.8} />}
					/>
					<ContractInfoItem
						label="Correo"
						value={contract.clients.email}
						icon={<Mail01Icon size={18} strokeWidth={1.8} />}
					/>
					<ContractInfoItem
						label="IBAN"
						value={contract.clients.iban}
						icon={<CreditCardIcon size={18} strokeWidth={1.8} />}
					/>
				</ContractInfoCard>

				{/* Detalles del comercial */}
				<ContractInfoCard
					title="Detalles del comercial"
					icon={
						<Briefcase01Icon
							className="text-purple-500 dark:text-purple-400"
							size={20}
						/>
					}
				>
					<ContractInfoItem
						label="Nombre"
						value={`${contract.users.first_name} ${contract.users.last_name}`}
					/>

					<ContractInfoItem
						label="Correo"
						value={contract.users.email}
						icon={<Mail01Icon size={18} strokeWidth={1.8} />}
					/>
					<ContractInfoItem
						label="Estado"
						value={<ChipStatus isActive={contract.users.active} />}
					/>
					<ContractInfoItem label="Rol" value={contract.users.role} />
					<ContractInfoItem label="NIF" value={contract.users.nif} />
					<ContractInfoItem label="Tipo" value={contract.users.kind} />
				</ContractInfoCard>

				{/* Observations */}
				<ContractInfoCard
					title="Observaciones"
					icon={
						<Message01Icon
							className="text-green-500 dark:text-green-400"
							size={20}
						/>
					}
					className="col-span-2 h-64 overflow-y-auto"
				>
					<p>{contract.observations} </p>
				</ContractInfoCard>
			</section>
		</section>
	)
}

export default ContainerContractDetails
