
import { Select, SelectItem } from "@heroui/react";
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

  const selectedValue = watch(name);

  console.log("selectedValue", selectedValue);
  return (
    <Select
      className="w-full"
      isDisabled={dataList.length === 0}
      label={label}
      placeholder={placeholder}
      variant={variant}
      {...register(name, rules)}
      selectedKeys={selectedValue ? [selectedValue] : undefined}
      onSelectionChange={(keys: any) => {
        const selectedKey = Array.from(keys).join("");
        const selectedItem = dataList.find(
          (item) => item[keyIdentifier].toString() === selectedKey
        );
        const value = selectedItem ? selectedItem[itemValue] : "";
        setValue(name, value, { shouldValidate: true });
      }}
      classNames={{
        selectorIcon: "right-2 left-auto",
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
