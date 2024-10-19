'use client'

import { useSidebar } from '@/modules/core/store/sidebarStore'
import { Tooltip } from '@nextui-org/react'
import { cn } from '@nextui-org/theme'
import {
	Building02Icon,
	DashboardSquare02Icon,
	Files01Icon,
	UserGroupIcon,
	UserMultiple02Icon,
} from 'hugeicons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SidebarItem = () => {
	const { isExpanded } = useSidebar()
	const SidebarLink = [
		{
			name: 'Dasboard',
			path: '/',
			icon: <DashboardSquare02Icon size={21} strokeWidth={1.8} />,
		},
		{
			name: 'Usuarios',
			path: '/users',
			icon: <UserMultiple02Icon size={21} strokeWidth={1.8} />,
		},
		{
			name: 'Contratos',
			path: '/contracts',
			icon: <Files01Icon size={21} strokeWidth={1.8} />,
		},
		{
			name: 'Comercializadoras',
			path: '/companies',
			icon: <Building02Icon size={21} strokeWidth={1.8} />,
		},
		{
			name: 'Equipos',
			path: '/teams',
			icon: <UserGroupIcon size={21} strokeWidth={1.8} />,
		},
	]
	const pathName = usePathname()
	return (
		<section className="flex flex-col gap-y-1 mt-5">
			{SidebarLink.map(({ name, path, icon }) => (
				<Tooltip
					key={name + path}
					content={name}
					placement="right"
					isDisabled={isExpanded}
				>
					<Link
						href={path}
						className={cn(
							'flex items-center hover:bg-indigo-100 hover:text-indigo-800 transition-colors p-2 rounded-xl text-gray-600 dark:text-gray-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300',
							pathName === path &&
								'bg-indigo-100 text-indigo-800  dark:bg-indigo-500/10 dark:text-indigo-500',
						)}
					>
						{icon}
						<span
							className={cn(
								'overflow-hidden transition-all',
								isExpanded ? 'w-52 ml-3' : 'w-0',
							)}
						>
							{name}
						</span>
					</Link>
				</Tooltip>
			))}
		</section>
	)
}

export default SidebarItem
