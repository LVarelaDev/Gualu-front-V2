'use client'
import SearchInput from '@/modules/core/components/SearchInput'
import { Button } from '@nextui-org/button'
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react'
import { ArrowDown01Icon, PlusSignIcon } from 'hugeicons-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const TableHeader = () => {
	const pathName = usePathname()
	const searchParams = useSearchParams()
	const sort = searchParams.get("sort")
	return (
		<section className="flex items-center justify-between py-3">
			<SearchInput placeholder="Buscar por nombre..." />
			<div className="space-x-5">
				<Dropdown>
					<DropdownTrigger>
						<Button
							endContent={
								<ArrowDown01Icon size={20} className="text-gray-600" />
							}
						>
							Ordenar por
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Selection sort"
						selectionMode='single'
					>
						<DropdownItem key="asc" href={`${pathName}?sort=asc`}>
							Acendente
						</DropdownItem>
						<DropdownItem key="desc" href={`${pathName}?sort=desc`}>
							Decendente
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Button
					as={Link}
					className="bg-emerald-500 text-white"
					endContent={<PlusSignIcon size={20} />}
					href="/teams/manage"
				>
					Agregar
				</Button>
			</div>
		</section>
	)
}

export default TableHeader
