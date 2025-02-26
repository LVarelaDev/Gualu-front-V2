import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { cn } from "@nextui-org/theme";
import { Settings02Icon } from "hugeicons-react";
import ImportTariff from "./ModalsConfiguration/ImportTariff";
import { items } from "./Sidebar";

interface SidebarFooterProps {
  isExpanded: boolean;
}

const SidebarFooter = ({ isExpanded }: SidebarFooterProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
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
            <DropdownItem onClick={() => onOpen()} key={item.key}>
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
      <ImportTariff
        onOpen={onOpen}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </footer>
  );
};

export default SidebarFooter;
