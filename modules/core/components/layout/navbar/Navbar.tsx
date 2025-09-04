"use client";
import {
  NavbarBrand, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";
import { signOut, useSession } from "next-auth/react";
import CustomBreadcrumbs from "./partials/Breadcrumbs";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarContent, NavbarItem } from "@heroui/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div
    >
      navbar
    </div>
  );
};

export default Navbar;
