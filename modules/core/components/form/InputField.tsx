'use client'

import type { FormFieldValues } from '@/modules/core/interfaces/formFieldValues'
import { Input, type InputProps } from '@nextui-org/input'
import {
	Controller,
	type FieldValues,
	type Path,
	type PathValue,
} from 'react-hook-form'

interface Props<T extends FieldValues>
	extends FormFieldValues<T>,
	Omit<InputProps, 'name'> {
	defaultValue?: PathValue<T, Path<T>>
}

/**
 * Componente InputField que integra react-hook-form con NextUI Input.
 *
 * @param control - Control del formulario de react-hook-form (requerido).
 * @param rules - Reglas de validacion para el campo (opcional).
 * @param name - Nombre del campo del formulario (requerido).
 * @param defaultValue - Valor predeterminado del campo (opcional).
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
 *       <InputField
 *         control={control}
 *         name="name"
 *         rules={{ required: 'Este campo es requerido' }}
 *        //...
 *       />
 *     </form>
 *   );
 * }
 */
function InputField<T extends FieldValues>({
	control,
	rules,
	name,
	...props
}: Props<T>) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			defaultValue={props.defaultValue}
			render={({ field, fieldState: { error } }) => (
				<Input
					{...field}
					{...props}
					variant={props.variant ?? 'bordered'}
					size={props.size ?? 'lg'}
					labelPlacement={props.labelPlacement ?? 'outside'}
					isInvalid={!!error}
					errorMessage={error?.message}
				/>
			)}
		/>
	)
}

export default InputField
