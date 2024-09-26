import { CustomGrid, CustomGridColumn } from '@/components/ui/Table/FTable'
import TableActionsCompanies from '@/modules/companies/components/TableActionsCompanies'
import type { Company } from '@/modules/companies/interfaces/company'
import { deleteCompany } from '@/modules/companies/services/mutations/deleteCompany'
import ChipStatus from '@/modules/core/components/common/ChipStatus'
import { formattedDate } from '@/utils/helpers'
import { Button } from '@nextui-org/button'
import { PlusSignIcon } from 'hugeicons-react'
import Link from 'next/link'

interface Props {
	data: Company[]
}
const TableCompanies = ({ data }: Props) => {
	return (
		<>
			<div className="py-3">
				<Button
					as={Link}
					color="primary"
					endContent={<PlusSignIcon size={20} />}
					href="/companies/manage"
				>
					Agregar
				</Button>
			</div>
			<CustomGrid<Company> dataList={data ?? []} keyIdentifier="id">
				<CustomGridColumn<Company>
					labelHeader="Nombre"
					colRender={(_, company) => (
						<div className="flex items-center gap-x-2">
							<img
								src={company.picture}
								alt={company.name}
								width={56}
								height={30}
								className="w-14 h-auto"
							/>
							<span>{company.name} </span>
						</div>
					)}
				/>

				<CustomGridColumn<Company>
					labelHeader="Status"
					colRender={(_, company) => <ChipStatus isActive={company.active} />}
				/>
				<CustomGridColumn<Company>
					labelHeader="Fecha de creacion"
					colRender={(_, company) => formattedDate(company.created_at)}
				/>
				<CustomGridColumn<Company>
					labelHeader="Acciones"
					colRender={(_, company) => (
						<TableActionsCompanies
							id={company.id}
							name={company.name}
							deleteAction={deleteCompany}
						/>
					)}
				/>
			</CustomGrid>
		</>
	)
}

export default TableCompanies
