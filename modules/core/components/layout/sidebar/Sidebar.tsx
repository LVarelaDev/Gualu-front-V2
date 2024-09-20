'use client'
import SidebarItem from '@/modules/core/components/layout/sidebar/SidebarItem'
import ToogleSidebar from '@/modules/core/components/layout/sidebar/ToogleSidebar'
import { useSidebar } from '@/modules/core/store/sidebarStore'

const Sidebar = () => {
	const { isExpanded } = useSidebar()
	return (
		<aside className="h-screen">
			<nav className="h-full flex flex-col bg-white border-r shadow-sm p-4">
				<div className="flex items-center justify-between transition-all">
					<img
						src="https://img.logoipsum.com/243.svg"
						className={`overflow-hidden transition-all ${
							isExpanded ? 'w-32' : 'w-0'
						}`}
						alt=""
					/>
					<ToogleSidebar />
				</div>
				<SidebarItem />
			</nav>
		</aside>
	)
}

export default Sidebar
