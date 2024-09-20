'use client'
import {
	Chip,
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
	data?: Team[]
	page?: number
	total_pages?: number
}
const TableTeams = ({ data, page, total_pages }: Props) => {
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
				classNames={{
					th: 'text-sm border-b bg-transparent',
				}}
				radius="lg"
				selectionMode="single"
				bottomContent={
					<PaginationWrapper
						initialPage={1}
						page={page ?? 1}
						total={total_pages ?? 0}
					/>
				}
			>
				<TableHeader columns={colums}>
					{colums.map((column) => (
						<TableColumn key={column}>{column} </TableColumn>
					))}
				</TableHeader>
				<TableBody
					emptyContent={
						query
							? `No se encontro equipos con el nombre "${query}"`
							: 'No hay datos'
					}
					items={data ?? []}
					loadingContent={<Spinner color="default" />}
				>
					{(row) => (
						<TableRow key={row.id}>
							<TableCell className="text-gray-700">{row.name}</TableCell>

							<TableCell className="font-bold text-gray-900">
								{`${row.users.first_name} ${row.users.last_name}`}
							</TableCell>

							<TableCell className="text-gray-700">
								{formatDate(row.created_at)}
							</TableCell>

							<TableCell>
								<Chip
									className="border-none text-gray-700"
									color={row.active ? 'success' : 'danger'}
									size="sm"
									radius="sm"
									variant="dot"
								>
									{row.active ? 'Activo' : 'Inactivo'}
								</Chip>
							</TableCell>
							<TableCell align="center">
								<DropdownActions
									id={row.id}
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
