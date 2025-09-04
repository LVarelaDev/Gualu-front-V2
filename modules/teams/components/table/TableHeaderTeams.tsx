'use client'
import SearchInput from '@/modules/core/components/SearchInput'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

import { FilterIcon, PlusSignIcon } from 'hugeicons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const TableHeaderTeams = () => {
	const pathName = usePathname()
	return (
		<section className="flex items-center justify-between py-3">
			<Button
				as={Link}
				color="primary"
				endContent={<PlusSignIcon size={20} />}
				href="/teams/manage"
			>
				Agregar
			</Button>

			<div className=" flex items-center gap-x-3">
				<SearchInput placeholder="Buscar por nombre..." />
				<Dropdown>
					<DropdownTrigger>
						<Button isIconOnly variant="flat" color="primary">
							<FilterIcon />
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Selection sort" selectionMode="single">
						<DropdownItem key="desc" href={`${pathName}?sort=desc`}>
							Ultimos equipos agregados
						</DropdownItem>
						<DropdownItem key="asc" href={`${pathName}?sort=asc`}>
							Primeros equipos agregados
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</section>
	)
}

export default TableHeaderTeams
