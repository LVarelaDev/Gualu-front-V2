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
			path: '/dasboard',
			icon: <DashboardSquare02Icon size={23} strokeWidth={1.8} />,
		},
		{
			name: 'Usuarios',
			path: '/users',
			icon: <UserMultiple02Icon size={23} strokeWidth={1.8} />,
		},
		{
			name: 'Contratos',
			path: '/contracts',
			icon: <Files01Icon size={23} strokeWidth={1.8} />,
		},
		{
			name: 'Comercializadoras',
			path: '/companies',
			icon: <Building02Icon size={23} strokeWidth={1.8} />,
		},
		{
			name: 'Equipos',
			path: '/teams',
			icon: <UserGroupIcon size={23} strokeWidth={1.8} />,
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
							'flex items-center hover:bg-indigo-100 hover:text-indigo-800 transition-colors p-2 rounded-xl text-gray-600',
							pathName === path &&
								'bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800',
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
