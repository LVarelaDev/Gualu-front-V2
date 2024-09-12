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
  const { register } = form;
  return (
    <Select
      label={label}
      variant={variant}
      placeholder={placeholder}
      className="w-full"
      {...register(name, rules)}
    >
      {dataList.map((item) => (
        <SelectItem key={item[keyIdentifier]}>{item[displayValue]}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
