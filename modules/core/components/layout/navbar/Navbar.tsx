"use client";
import {
  NavbarContent,
  NavbarItem,
  Navbar as NextUiNavbar,
} from "@nextui-org/navbar";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <NextUiNavbar
      maxWidth="full"
      isBordered
      position="sticky"
      className="bg-white"
    >
      <NavbarContent justify="start">
        <NavbarItem className="text-gray-700 dark:text-foreground">
          Bienvenido{" "}
          <strong className="text-gray-800 dark:text-foreground">
            {session?.user.name}
          </strong>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <ThemeToggle /> */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="p-2">
              <p className="font-semibold">{session?.user.email}</p>
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Cerrar sesion
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUiNavbar>
  );
};

export default Navbar;
