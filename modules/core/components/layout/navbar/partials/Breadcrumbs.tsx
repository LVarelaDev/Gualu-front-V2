
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { useCreateBreadcrumbPath } from "../hooks/useManageRouters";

const CustomBreadcrumbs = () => {
  const { pathNames, pathFilter } = useCreateBreadcrumbPath();

  return (
    <Breadcrumbs>
      {pathNames.map((path, index) => {
        const { title, url } = pathFilter(path, index);
        return (
          <BreadcrumbItem key={path + index} href={url || "#"}>
            {title}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
