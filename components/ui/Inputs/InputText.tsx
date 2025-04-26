import React from "react";
import { Input } from "@nextui-org/react";
import {
  RegisterOptions,
  UseFormReturn,
  useFormState,
  Controller,
} from "react-hook-form";
import { useValidationInputTypes } from "./hooks/useValidationInputTypes";

export type typeValidationDocumento =
  | "DNI"
  | "CIF"
  | "NIE"
  | "CUPS"
  | "FEE_EURO_MW"
  | "CONSUMO_KW_ANO"
  | "IBAN";

type Props = {
  form: UseFormReturn<any, any>;
  name: string;
  label: string;
  rules?: RegisterOptions<any, string>;
  placeholder?: string;
  type?: string;
  typeValidation?: typeValidationDocumento;
  isDisable?: boolean;
};

const InputText = ({
  form,
  name,
  label,
  rules,
  placeholder,
  type = "text",
  isDisable = false,
  typeValidation,
}: Props) => {
  const { control, watch } = form;
  const { errors } = useFormState({ control, name });
  const inputValue = watch(name);

  const {
    validarCIF,
    validarCUPS,
    validarConsumoKWAno,
    validarFeeEuroMW,
    validarNIE,
    validarDNI,
    validarIBAN,
  } = useValidationInputTypes();

  const validacionesEspecificas = {
    DNI: validarDNI,
    CIF: validarCIF,
    NIE: validarNIE,
    CUPS: validarCUPS,
    FEE_EURO_MW: validarFeeEuroMW,
    CONSUMO_KW_ANO: validarConsumoKWAno,
    IBAN: validarIBAN,
  };

  const validaciontypeValidation = typeValidation
    ? validacionesEspecificas[typeValidation]
    : undefined;

  const reglasValidacion = {
    ...rules,
    validate: {
      ...rules?.validate,
      ...(validaciontypeValidation && { validaciontypeValidation }),
    },
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={reglasValidacion}
      render={({ field }) => (
        <div className="w-full">
          <Input
            {...field}
            classNames={{
              inputWrapper: "bg-white group-data-[focus=true]:bg-white",
            }}
            label={label}
            placeholder={placeholder}
            type={type}
            variant="bordered"
            value={inputValue || ""}
            isDisabled={isDisable}
          />
          {errors[name] && (
            <p className="text-red-500 text-xs mt-0.5 ml-0.5">
              {errors[name].message ?? ""}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default InputText;
