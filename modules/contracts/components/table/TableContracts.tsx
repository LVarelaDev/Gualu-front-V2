'use client'

import { CustomGrid, CustomGridColumn } from '@/components/ui/Table/FTable'
import TableActionContracts from '@/modules/contracts/components/table/TableActionContracts'
import type { Allcontract } from '@/modules/contracts/interfaces/allContract'
import ContractStatusChip from '@/modules/core/components/common/ContractsStatusChip'
import { formatCurrency } from '@/modules/core/utils/formatCurrency'
import { formatDate } from '@/modules/core/utils/formatDate'

interface Props {
	data: Allcontract[]
}

const TableContracts = ({ data }: Props) => {
	return (
		<CustomGrid<Allcontract> dataList={data} keyIdentifier="id">
			<CustomGridColumn<Allcontract>
				labelHeader="Cliente"
				colRender={(_, contact) => (
					<span className="font-medium">{contact.clients.name} </span>
				)}
			/>
			<CustomGridColumn<Allcontract>
				labelHeader="Compañia"
				colRender={(_, contact) => contact.companies.name}
			/>
			<CustomGridColumn<Allcontract>
				labelHeader="Tarifa"
				colRender={(_, contact) => contact.tariffs.name}
			/>
			<CustomGridColumn<Allcontract>
				labelHeader="Consumo"
				colRender={(_, contact) => `${contact.consumption} kWh`}
			/>
			<CustomGridColumn<Allcontract>
				labelHeader="Cuota"
				colRender={(_, contact) => formatCurrency(contact.fee)}
			/>
			<CustomGridColumn<Allcontract>
				labelHeader="Status"
				colRender={(_, contact) => (
					<ContractStatusChip status={contact.status} />
				)}
			/>
			<CustomGridColumn<Allcontract>
				labelHeader="Fecha de creacion"
				colRender={(_, contact) => formatDate(contact.created_at)}
			/>
			<CustomGridColumn<Allcontract>
				labelHeader="Acciones"
				colRender={(_, contract) => (
					/* 	<TableActionsCompanies
							id={contract.id}
							name={contract.companies.name}
							deleteAction={deleteContract}
						/> */
					<TableActionContracts id={contract.id} />
				)}
			/>
		</CustomGrid>
	)
}

export default TableContracts
