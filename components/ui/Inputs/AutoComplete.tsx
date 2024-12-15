import { Select, SelectItem } from "@nextui-org/react";
import { RegisterOptions, UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any, any>;
  dataList: any[];
  name: string;
  label: string;
  placeholder?: string;
  variant?: "bordered" | "faded" | "flat" | "underlined";
  keyIdentifier: string;
  itemValue: string;
  displayValue: string;
  rules?: RegisterOptions<any, string>;
};

const SelectComponent = ({
  form,
  dataList,
  displayValue,
  itemValue,
  keyIdentifier,
  label,
  name,
  placeholder,
  variant = "bordered",
  rules,
}: props) => {
  const { register, setValue, watch } = form;

  // Obtenemos el valor actual del campo desde el formulario
  const selectedValue = watch(name);

  return (
    <Select
      className="w-full"
      label={label}
      placeholder={placeholder}
      variant={variant}
      {...register(name, rules)}
      selectedKeys={selectedValue ? [selectedValue] : undefined}
      onSelectionChange={(keys) => {
        const value = Array.from(keys).join("");
        setValue(name, value, { shouldValidate: true });
      }}
    >
      {dataList.map((item) => (
        <SelectItem key={item[keyIdentifier]} value={item[itemValue]}>
          {item[displayValue]}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
