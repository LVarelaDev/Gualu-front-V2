'use client'
import Logo from '@/modules/core/components/common/Logo'
import SidebarItem from '@/modules/core/components/layout/sidebar/SidebarItem'
import ToogleSidebar from '@/modules/core/components/layout/sidebar/ToogleSidebar'
import { useSidebar } from '@/modules/core/store/sidebarStore'
import { cn } from '@nextui-org/theme'

const Sidebar = () => {
	const { isExpanded } = useSidebar()
	return (
		<aside
			className={cn(
				'h-screen flex z-50 transition-all',
				isExpanded ? 'w-[290px]' : 'w-[73px]',
			)}
		>
			<nav className="h-full flex flex-col bg-background border-r dark:border-white/20 shadow-sm p-4 fixed">
				<section className="flex items-center justify-between transition-all">
					<div
						className={cn(
							'overflow-hidden transition-all',
							isExpanded ? 'w-52' : 'w-0',
						)}
					>
						<Logo />
					</div>
					<ToogleSidebar />
				</section>
				<SidebarItem />
			</nav>
		</aside>
	)
}

export default Sidebar
