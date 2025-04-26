import { usePathname } from "next/navigation";
import { SidebarLink } from "../../sidebar/SidebarItem";

export const INIT_POSITION_INDEX_PATHS = 0;
export const useCreateBreadcrumbPath = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const pathFilter = (
    path: string,
    index: number
  ): { title: string | undefined; url: string | undefined } => {
    // Nivel raíz
    if (index === INIT_POSITION_INDEX_PATHS) {
      const menuItem = SidebarLink.find((x) => x.path === `/${path}`);
      return {
        title: menuItem?.name,
        url: menuItem?.path,
      };
    }

    // Buscar el item padre
    const parentPath = `/${pathNames[INIT_POSITION_INDEX_PATHS]}`;
    const parentItem = SidebarLink.find((x) => x.path === parentPath);

    // Buscar si este path coincide con algún hijo conocido
    const currentChildPath = `/${path}`;
    const childItem = parentItem?.children?.find(
      (child) => child.url === currentChildPath
    );

    if (childItem) {
      return {
        title: childItem.title,
        url: `${parentPath}${childItem.url}`,
      };
    }

    // Si no coincide, es un valor dinámico → mostrarlo tal cual
    return {
      title: decodeURIComponent(path),
      url: undefined,
    };
  };

  return { pathNames, pathFilter };
};
