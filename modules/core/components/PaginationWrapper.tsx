'use client'
import { Pagination, type PaginationProps } from '@nextui-org/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const PaginationWrapper = ({ ...props }: PaginationProps) => {
	// Hooks
	const router = useRouter()
	const pathName = usePathname()
	const searchParams = useSearchParams()

	const handlePage = (page: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', page.toString())

		router.replace(`${pathName}?${params.toString()}`)
	}

	return (
		<Pagination
			showControls
			loop
			classNames={{
				cursor: 'bg-emerald-500 text-background',
			}}
			onChange={handlePage}
			{...props}
		/>
	)
}

export default PaginationWrapper
