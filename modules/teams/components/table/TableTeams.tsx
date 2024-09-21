'use client'
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

import PaginationWrapper from '@/modules/core/components/PaginationWrapper'
import ChipStatus from '@/modules/core/components/common/ChipStatus'
import type { DataResponse } from '@/modules/core/interfaces/dataResponse'
import DropdownActions from '@/modules/teams/components/DropdownActions'
import type { Team } from '@/modules/teams/interfaces/team'
import { formatDate } from '@/utils/formatterDate'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
const ModalDeleteTeams = dynamic(
	() => import('@/modules/teams/components/ModalDeleteTeams'),
)

interface Props {
	data?: DataResponse<Team>
}
const TableTeams = ({ data }: Props) => {
	const colums = [
		'Nombre',
		'Jefe de estado',
		'Fecha de creacion',
		'Estado',
		'Acciones',
	]

	const searchParams = useSearchParams()
	const query = searchParams.get('q')
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [teamState, setTeamState] = useState({ name: '', id: '' })

	return (
		<>
			<Table
				removeWrapper
				aria-label="teams table"
				radius="lg"
				classNames={{
					th: 'text-sm border-b bg-transparent',
				}}
				topContent={
					<span className="text-gray-400 text-sm">
						Total {data?.total_results} equipos
					</span>
				}
				bottomContent={
					<PaginationWrapper
						initialPage={1}
						page={data?.page ?? 1}
						total={data?.total_pages ?? 0}
					/>
				}
			>
				{/* Colums */}
				<TableHeader columns={colums}>
					{colums.map((column) => (
						<TableColumn key={column}>{column} </TableColumn>
					))}
				</TableHeader>

				{/* Body rows */}
				<TableBody
					emptyContent={
						query
							? `No se encontro equipos con el nombre "${query}"`
							: 'No hay datos'
					}
					items={data?.results ?? []}
					loadingContent={<Spinner color="default" />}
				>
					{(row) => (
						<TableRow key={row.id} className="text-gray-700">
							<TableCell>{row.name}</TableCell>

							<TableCell className="font-bold text-gray-900">
								{`${row.users.first_name} ${row.users.last_name}`}
							</TableCell>

							<TableCell>{formatDate(row.created_at)}</TableCell>

							<TableCell>
								<ChipStatus isActive={row.active} />
							</TableCell>

							<TableCell align="center">
								<DropdownActions
									id={row.id}
									editPath={`/teams/manage/?id=${row.id}`}
									onOpenDeleteModel={onOpen}
									onClick={() => setTeamState({ id: row.id, name: row.name })}
								/>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<ModalDeleteTeams
				id={teamState.id}
				name={teamState.name}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
		</>
	)
}

export default TableTeams
