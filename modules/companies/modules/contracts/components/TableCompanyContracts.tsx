import { CustomGrid, CustomGridColumn } from '@/components/ui/Table/FTable'
import type { OneCompany } from '@/modules/companies/interfaces/company'
import type { ContractCompany } from '@/modules/companies/modules/contracts/interfaces/companyContracts'
import { deleteContract } from '@/modules/contracts/services/mutations/deleteContract'
import SearchInput from '@/modules/core/components/SearchInput'
import BackButton from '@/modules/core/components/common/BackButton'
import ContractStatusChip from '@/modules/core/components/common/ContractsStatusChip'
import { formatCurrency } from '@/modules/core/utils/formatCurrency'
import { formatDate } from '@/modules/core/utils/formatDate'
import TableActionsCompanyContracts from './TableActionsCompanyContracts'

interface Props {
	data: OneCompany
}

const TableCompanyContracts = ({ data }: Props) => {
	return (
		<>
			<BackButton />
			<h1 className="text-2xl font-semibold text-gray-800 py-5">
				{data.name}{' '}
			</h1>
			<section className="py-5 px-5">
				<section className="grid grid-cols-3 gap-4 border-b py-3">
					<div>
						<p className="text-sm font-medium text-gray-500">
							Contratos totales
						</p>
						<p className="text-2xl font-bold text-gray-800">
							{data.contracts?.length ?? 0}
						</p>
					</div>
					<div>
						<p className="text-sm font-medium text-gray-500">
							Contratos activos
						</p>
						<p className="text-2xl font-bold text-gray-800">35</p>
					</div>
					<div>
						<p className="text-sm font-medium text-gray-500">
							Contratos inactivos
						</p>
						<p className="text-2xl font-bold text-gray-800">10</p>
					</div>
				</section>
				<div className="flex items-center justify-end pt-5">
					<SearchInput placeholder="Buscar contratos..." />
				</div>
			</section>
			<CustomGrid<ContractCompany>
				dataList={data.contracts ?? []}
				keyIdentifier="id"
			>
				<CustomGridColumn<ContractCompany>
					labelHeader="Cliente"
					colRender={(_, contract) => contract.clients.name}
				/>
				<CustomGridColumn<ContractCompany>
					labelHeader="Tarifa"
					colRender={(_, contract) => contract.tariffs.name}
				/>

				<CustomGridColumn<ContractCompany>
					labelHeader="Consumo"
					colRender={(_, contract) => `${contract.consumption} kWh`}
				/>

				<CustomGridColumn<ContractCompany>
					labelHeader="Cuota"
					colRender={(_, contract) => formatCurrency(contract.fee)}
				/>

				<CustomGridColumn<ContractCompany>
					labelHeader="Estado"
					colRender={(_, contract) => (
						<ContractStatusChip status={contract.status} />
					)}
				/>

				<CustomGridColumn<ContractCompany>
					labelHeader="Fecha de creacion"
					colRender={(_, contract) => formatDate(contract.created_at)}
				/>

				<CustomGridColumn<ContractCompany>
					labelHeader="Acciones"
					colRender={(_, contract) => (
						<TableActionsCompanyContracts
							id={contract.id}
							name={contract.clients.name}
							deleteAction={deleteContract}
						/>
					)}
				/>
			</CustomGrid>
		</>
	)
}

export default TableCompanyContracts
