'use client'
import Logo from '@/modules/core/components/common/Logo'
import SidebarItem from '@/modules/core/components/layout/sidebar/SidebarItem'
import ToogleSidebar from '@/modules/core/components/layout/sidebar/ToogleSidebar'
import { useSidebar } from '@/modules/core/store/sidebarStore'
import { cn } from '@nextui-org/theme'

const Sidebar = () => {
	const { isExpanded } = useSidebar()
	return (
		<aside className="h-screen">
			<nav className="h-full flex flex-col bg-white border-r shadow-sm p-4">
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
