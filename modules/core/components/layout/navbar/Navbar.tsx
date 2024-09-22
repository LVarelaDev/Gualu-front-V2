'use client'

import {
	NavbarContent,
	NavbarItem,
	Navbar as NextUiNavbar,
} from '@nextui-org/navbar'
import { Avatar } from '@nextui-org/react'

const Navbar = () => {
	return (
		<NextUiNavbar
			maxWidth="full"
			isBordered
			position="sticky"
			className="bg-white"
		>
			<NavbarContent justify="start">
				<NavbarItem className="text-gray-700">
					Bienvenido <strong className="text-gray-800">Carlos</strong>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<Avatar
					isBordered
					as="button"
					className="transition-transform"
					color="primary"
					name="Jason Hughes"
					size="sm"
					src="https://i.pravatar.cc/150?img=58"
				/>
			</NavbarContent>
		</NextUiNavbar>
	)
}

export default Navbar
