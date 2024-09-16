'use client'
import { Pagination, PaginationProps } from '@nextui-org/react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const PaginationTeams = ({ ...props }: PaginationProps) => {
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
			classNames={{
				cursor: 'bg-foreground text-background',
			}}
			onChange={handlePage}
			{...props}
		/>
	)
}

export default PaginationTeams
