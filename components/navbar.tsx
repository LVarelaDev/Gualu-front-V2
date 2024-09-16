import { NavbarContent, Navbar as NextUINavbar } from '@nextui-org/navbar'

import { ThemeSwitch } from '@/components/theme-switch'

export const Navbar = () => {
	return (
		<NextUINavbar className="shadow-md" maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full " justify="start">
				<ThemeSwitch />
			</NavbarContent>
			<NavbarContent className="basis-1/5 sm:basis-full " justify="center">
				<ThemeSwitch />
			</NavbarContent>
			<NavbarContent className="basis-1/5 sm:basis-full " justify="end">
				<ThemeSwitch />
			</NavbarContent>
		</NextUINavbar>
	)
}
