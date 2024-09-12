import {
  NavbarContent,
  Navbar as NextUINavbar
} from "@nextui-org/navbar";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="shadow-md">
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
  );
};
