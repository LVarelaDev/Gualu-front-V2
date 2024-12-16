"use client";
import Logo from "@/modules/core/components/common/Logo";
import SidebarItem from "@/modules/core/components/layout/sidebar/SidebarItem";
import ToogleSidebar from "@/modules/core/components/layout/sidebar/ToogleSidebar";
import { useSidebar } from "@/modules/core/store/sidebarStore";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { cn } from "@nextui-org/theme";
import { Settings02Icon } from "hugeicons-react";
import Link from "next/link";

const Sidebar = () => {
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];
  const { isExpanded } = useSidebar();
  return (
    <aside
      className={cn(
        "h-screen flex z-50 transition-all",
        isExpanded ? "w-[290px]" : "w-[73px]"
      )}
    >
      <nav className="h-full flex flex-col bg-white border-r dark:border-white/20 shadow-sm p-4 fixed">
        {/* Header Section */}
        <section className="flex items-center justify-between transition-all">
          <div
            className={cn(
              "overflow-hidden transition-all",
              isExpanded ? "w-52" : "w-0"
            )}
          >
            <Logo />
          </div>
          <ToogleSidebar />
        </section>

        <div className="flex-grow">
          <SidebarItem />
        </div>

        <footer className="mt-auto">
          <Dropdown>
            <DropdownTrigger>
              <div
                className={cn(
                  "flex items-center hover:bg-indigo-100 hover:text-indigo-800 transition-colors p-2 rounded-xl text-gray-600 dark:text-gray-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300",
                  "w-full"
                )}
              >
                <Settings02Icon size={21} strokeWidth={1.8} />
                <span
                  className={cn(
                    "overflow-hidden transition-all",
                    isExpanded ? "w-52 ml-3" : "w-0"
                  )}
                >
                  Configuración
                </span>
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dynamic Actions"
              color="secondary"
              items={items}
            >
              {(item) => (
                <DropdownItem
                  key={item.key}
                  className={item.key === "delete" ? "text-danger" : ""}
                  color={item.key === "delete" ? "danger" : "default"}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          {/* <Link
            href="/settings"
            className={cn(
              "flex items-center hover:bg-indigo-100 hover:text-indigo-800 transition-colors p-2 rounded-xl text-gray-600 dark:text-gray-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300",
              "w-full"
            )}
          >
            
          </Link> */}
        </footer>
      </nav>
    </aside>
  );
};

export default Sidebar;
