import { useSidebar } from "@/modules/core/store/sidebarStore";
import { Button } from "@heroui/react";

import { ArrowLeft03Icon, ArrowRight03Icon } from "hugeicons-react";

const ToogleSidebar = () => {
  const { isExpanded, setIsExpanded } = useSidebar();
  return (
    <Button isIconOnly variant="light" radius="full" onClick={setIsExpanded}>
      {isExpanded ? (
        <ArrowLeft03Icon color="white" />
      ) : (
        <ArrowRight03Icon color="white" />
      )}
    </Button>
  );
};

export default ToogleSidebar;
