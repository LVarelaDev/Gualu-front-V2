'use client'

import {
	NavbarContent,
	NavbarItem,
	Navbar as NextUiNavbar,
} from '@nextui-org/navbar'
import { Avatar } from '@nextui-org/react'
import ThemeToggle from '../../theme/ThemeToggle'

const Navbar = () => {
	return (
		<NextUiNavbar
			maxWidth="full"
			isBordered
			position="sticky"
			className="bg-background"
		>
			<NavbarContent justify="start">
				<NavbarItem className="text-gray-700 dark:text-foreground">
					Bienvenido{' '}
					<strong className="text-gray-800 dark:text-foreground">Carlos</strong>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<ThemeToggle />
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
