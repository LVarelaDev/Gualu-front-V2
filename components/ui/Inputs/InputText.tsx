import React from "react";
import { Input } from "@nextui-org/react";
import { RegisterOptions, UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any, any>;
  name: string;
  label: string;
  rules?: RegisterOptions<any, string>;
  placeholder?: string;
  type?: string;
};

const InputText = ({
  form,
  name,
  label,
  rules,
  placeholder,
  type = "text",
}: props) => {
  const { register } = form;
  return (
    <Input
      {...register(name, rules)}
      type={type}
      variant="bordered"
      classNames={{
        inputWrapper: "bg-white group-data-[focus=true]:bg-white",
      }}
      placeholder={placeholder}
      label={label}
    />
  );
};

export default InputText;
