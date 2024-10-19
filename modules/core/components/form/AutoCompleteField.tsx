'use client'
import {
	Autocomplete,
	AutocompleteItem,
	type AutocompleteProps,
} from '@nextui-org/autocomplete'
import React from 'react'
import {
	type Control,
	Controller,
	type FieldValues,
	type Path,
	type PathValue,
	type RegisterOptions,
} from 'react-hook-form'

interface Props<TFieldValues extends FieldValues>
	extends Omit<AutocompleteProps, 'name' | 'children'> {
	name: Path<TFieldValues>
	rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>
	control: Control<TFieldValues, any>
	defaultSelectedKey: PathValue<TFieldValues, Path<TFieldValues>>
	options: { label: string; value: string }[]
}


/**
 * Componente AutoCompleteField que integra react-hook-form con NextUI Autocomplete.
 *
 * @param control - Control del formulario de react-hook-form (requerido).
 * @param rules - Reglas de validacion para el campo (opcional).
 * @param name - Nombre del campo del formulario (requerido).
 * @param options - Opciones para el Autocomplete (requerido).
 * @param defaultSelectedKey - Valor predeterminado para el campo (opcional).
 * @param props - Propiedades adicionales para el Autocomplete (opcional).
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
 *       <AutoCompleteField
 *         control={control}
 *         name="name"
 *         rules={{ required: 'Este campo es requerido' }}
 *         options={[
 *           { label: 'Opcion 1', value: '1' },
 *           { label: 'Opcion 2', value: '2' },
 *         ]}
 *         defaultSelectedKey="1"
 *        //...
 *       />
 *     </form>
 *   );
 * }
 */
function AutoCompleteField<TFieldValues extends FieldValues>({
	control,
	rules,
	name,
	options,
	...props
}: Props<TFieldValues>) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			defaultValue={props.defaultSelectedKey}
			render={({ field, fieldState: { error } }) => (
				<Autocomplete
					{...field}
					{...props}
					labelPlacement={props.labelPlacement ?? 'outside'}
					variant={props.variant ?? 'bordered'}
					size={props.size ?? 'lg'}
					onSelectionChange={(value) => field.onChange(value)}
					isInvalid={!!error}
					errorMessage={error?.message}
				>
					{options.map((option) => (
						<AutocompleteItem key={option.value} value={option.value}>
							{option.label}
						</AutocompleteItem>
					))}
				</Autocomplete>
			)}
		/>
	)
}

export default AutoCompleteField
