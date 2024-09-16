import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import { permissions } from "@/utils/constanst/constanst";
import { usersById } from "@/models/users/userDTO";
type props = {
  form: UseFormReturn<any, any>;
  userData: usersById | null;
};
const PermissionsForm = ({ form, userData }: props) => {
  const { register } = form;

  useEffect(() => {
    const permissions = userData?.permissions.map((item) => item.name);

    form.setValue("permissions", permissions);
  }, [userData?.permissions]);

  return (
    <div className="rounded-xl shadow flex flex-col gap-6 p-4 bg-white">
      <p className="text-base font-bold text-slate-600">Permisos</p>
      <div className="grid grid-cols-2 gap-4">
        {permissions.map((section) => (
          <CheckboxGroup key={section.section} label={section.section}>
            {section.permissions.map((item, index) => (
              <Checkbox
                key={index}
                value={item.value}
                {...register("permissions")}
              >
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
