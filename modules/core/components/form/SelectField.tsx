import type { FormFieldValues } from "@/modules/core/interfaces/formFieldValues";
import { Select, SelectItem, type SelectProps } from "@nextui-org/react";
import {
  Controller,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";

interface Props<T extends FieldValues>
  extends FormFieldValues<T>,
    Omit<SelectProps, "name"> {}

/**
 * Componente SelectField que integra react-hook-form con NextUI Select.
 *
 * @param name - Nombre del campo del formulario (requerido).
 * @param control - Control del formulario de react-hook-form (requerido).
 * @param rules - Reglas de validacion para el campo (opcional).
 * @param props - Props adicionales que se pasan al componente Select de NextUI.
 *
 * @example
 * // Ejemplo de uso del componente
 * import { useForm } from 'react-hook-form';
 *
 * function MyForm() {
 *   const { control } = useForm();
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <SelectField
 *         control={control}
 *         name="name"
 *         rules={{ required: 'Este campo es requerido' }}
 *         options={[
 *           { label: 'Opcion 1', value: '1' },
 *           { label: 'Opcion 2', value: '2' },
 *         ]}
 *        //...
 *       />
 *     </form>
 *   );
 * }
 */
function SelectField<T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Select
          {...field}
          {...props}
          labelPlacement={props.labelPlacement ?? "outside"}
          size={props.size ?? "lg"}
          variant={props.variant ?? "bordered"}
          defaultSelectedKeys={props.defaultSelectedKeys}
          onSelectionChange={(value) => {
            field.onChange(value);
          }}
          isInvalid={!!error}
          errorMessage={error?.message}
        >
          {props.children}
        </Select>
      )}
    />
  );
}

export default SelectField;
