'use client'

import { CustomGrid, CustomGridColumn } from '@/components/ui/Table/FTable'
import TableActionsCompanies from '@/modules/companies/components/TableActionsCompanies'
import type { Contract } from '@/modules/contracts/interfaces/contract'
import GenericActionButtons from '@/modules/core/components/GenericActionButtons'
import ChipStatus from '@/modules/core/components/common/ChipStatus'
import { formatCurrency } from '@/modules/core/utils/formatCurrency'
import { formatDate } from '@/modules/core/utils/formatDate'
import { deleteContract } from '../services/mutations/deleteContract'

interface Props {
	data: Contract[]
}

const TableContacts = ({ data }: Props) => {
	return (
		<CustomGrid<Contract> dataList={data} keyIdentifier="id">
			<CustomGridColumn<Contract>
				labelHeader="Cliente"
				colRender={(_, contact) => (
					<span className="font-medium">{contact.clients.name} </span>
				)}
			/>
			<CustomGridColumn<Contract>
				labelHeader="Compañia"
				colRender={(_, contact) => contact.companies.name}
			/>
			<CustomGridColumn<Contract>
				labelHeader="Tarifa"
				colRender={(_, contact) => contact.tariffs.name}
			/>
			<CustomGridColumn<Contract>
				labelHeader="Consumo"
				colRender={(_, contact) => `${contact.consumption} kWh`}
			/>
			<CustomGridColumn<Contract>
				labelHeader="Cuota"
				colRender={(_, contact) => formatCurrency(contact.fee)}
			/>
			<CustomGridColumn<Contract>
				labelHeader="Status"
				colRender={(_, contact) => (
					<ChipStatus isActive={contact.status === 'active'} />
				)}
			/>
			<CustomGridColumn<Contract>
				labelHeader="Fecha de creacion"
				colRender={(_, contact) => formatDate(contact.created_at)}
			/>
			<CustomGridColumn<Contract>
				labelHeader="Acciones"
				colRender={(_, contract) => (
					<TableActionsCompanies
						id={contract.id}
						name={contract.companies.name}
						deleteAction={deleteContract}
					/>
				)}
			/>
		</CustomGrid>
	)
}

export default TableContacts
