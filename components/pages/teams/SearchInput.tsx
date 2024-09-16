'use client'

import { Input } from '@nextui-org/input'
import { Search01Icon } from 'hugeicons-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const SearchInput = () => {
	//Hooks
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathName = usePathname()

	const query = searchParams.get('q') ?? ''
	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams)

		if (value) {
			params.set('q', value)
			params.delete('page')
		} else {
			params.delete('q')
		}
		router.replace(`${pathName}?${params.toString()}`)
	}, 500)

	return (
		<Input
			isClearable
			autoComplete="off"
			classNames={{
				base: 'w-full sm:max-w-[25%]',
				inputWrapper: 'border-1 bg-transparent',
			}}
			defaultValue={query}
			placeholder="Buscar por nombre..."
			role="search"
			startContent={<Search01Icon className="text-default-300" size={20} />}
			onChange={(event) => handleSearch(event.target.value)}
			onClear={() => router.replace(pathName)}
		/>
	)
}

export default SearchInput
