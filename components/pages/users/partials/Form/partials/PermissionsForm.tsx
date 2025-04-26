import { CheckboxGroup } from "@nextui-org/react";
import { Checkbox } from "@heroui/checkbox";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import { permissions } from "@/utils/constanst/constanst";
import { usersById } from "@/models/users/userDTO";
import Subtitle from "@/components/ui/Text/Subtitle";

type props = {
  form: UseFormReturn<any, any>;
  userData: usersById | null;
};

const PermissionsForm = ({ form, userData }: props) => {
  const { register, watch, setValue } = form;

  useEffect(() => {
    if (userData?.permissions) {
      const selectedPermissions = userData.permissions.map((item) => item.name);
      setValue("permissions", selectedPermissions);
    }
  }, [userData?.permissions, setValue]);

  const selectedPermissions = watch("permissions") || [];

  return (
    <div className="rounded-xl shadow flex flex-col gap-6 p-4 bg-white">
      <Subtitle message="Permisos" />
      <div className="grid grid-cols-2 gap-4">
        {permissions.map((section) => (
          <CheckboxGroup
            key={section.section}
            label={section.section}
            value={selectedPermissions}
            onChange={(values) => setValue("permissions", values)}
          >
            {section.permissions.map((item) => (
              <Checkbox key={item.value} value={item.value}>
                {item.label}
              </Checkbox>
            ))}
          </CheckboxGroup>
        ))}
      </div>
    </div>
  );
};

export default PermissionsForm;
