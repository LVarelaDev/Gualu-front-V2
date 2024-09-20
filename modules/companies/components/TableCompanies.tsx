'use client'

import type { Company } from '@/modules/companies/interfaces/company'
import ChipStatus from '@/modules/core/components/common/ChipStatus'
import DropdownActions from '@/modules/teams/components/DropdownActions'
import { formatDate } from '@/utils/formatterDate'
import {
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	useDisclosure,
} from '@nextui-org/react'
import { useState } from 'react'
import ModalDeleteCompany from './ModalDeleteCompany'


interface Props {
	data: Company[]
}

const TableCompanies = ({ data }: Props) => {
	const colums = ['Nombre', 'Estado', 'Fecha de creacion', 'Acciones']
	const [companyState, setCompanyState] = useState({ name: '', id: '' })

	const { onOpen, isOpen, onOpenChange } = useDisclosure()
	return (
		<>
			<Table
				removeWrapper
				aria-label="companies table"
				classNames={{
					th: 'text-sm border-b bg-transparent',
				}}
				radius="lg"
				topContent={
					<span className="text-gray-400 text-sm">
						Total {data?.length} Comercializadoras
					</span>
				}
			>
				<TableHeader columns={colums}>
					{colums.map((column) => (
						<TableColumn key={column}>{column} </TableColumn>
					))}
				</TableHeader>
				<TableBody
					loadingContent={<Spinner color="default" />}
					emptyContent="No hay datos"
					items={data ?? []}
				>
					{(row) => (
						<TableRow key={row.id} className="text-gray-700">
							<TableCell className="font-bold text-gray-900 capitalize">
								{row.name}
							</TableCell>

							<TableCell>
								<ChipStatus isActive={row.active} />
							</TableCell>

							<TableCell>{formatDate(row.created_at)} </TableCell>

							<TableCell>
								<DropdownActions
									id={row.id}
									editPath={`/companies/manage?id=${row.id}`}
									onOpenDeleteModel={onOpen}
									onClick={() => setCompanyState({ id: row.id, name: row.name })}
								/>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<ModalDeleteCompany
				id={companyState.id}
				name={companyState.name}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
		</>
	)
}

export default TableCompanies
