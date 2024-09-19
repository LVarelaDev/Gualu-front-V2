import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

import { routes } from './menu'

const Sidenav = () => {
	return (
		<div className="flex flex-col py-5 w-72 px-3 justify-between items-center shadow-inner">
			<div className="border-b border-[#744BA3] pb-5 w-full">
				<h3 className="text-white font-bold text-center py-1">GUALU CRM</h3>
			</div>
			<div className="flex flex-col w-full px-5 flex-1 pt-2 gap-1">
				{routes.map((item) => (
					<div
						key={item.url}
						className="hover:bg-[#744BA3] p-4 transition-all duration-200 ease-in-out rounded-xl"
					>
						<Link className="flex justify-between items-center" href={item.url}>
							<div className="flex gap-4 text-base text-white">
								<FontAwesomeIcon className="w-4" icon={item.icon} />
								<p className="text-base font-medium">{item.name}</p>
							</div>
							{item.showMore && (
								<FontAwesomeIcon
									className="w-4 text-white"
									icon={faChevronDown}
								/>
							)}
						</Link>
					</div>
				))}
			</div>
			<div className="flex flex-col">footer</div>
		</div>
	)
}

export default Sidenav
