'use client'
import { Autocomplete, type AutocompleteProps } from '@nextui-org/autocomplete'
import {
	type Control,
	Controller,
	type FieldValues,
	type Path,
	type PathValue,
	type RegisterOptions,
} from 'react-hook-form'

interface Props<TFieldValues extends FieldValues>
	extends Omit<AutocompleteProps, 'name'> {
	name: Path<TFieldValues>
	rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>
	control: Control<TFieldValues, any>
	defaultSelectedKey?: PathValue<TFieldValues, Path<TFieldValues>>
}

/**
 * Componente AutoCompleteField que integra react-hook-form con NextUI Autocomplete.
 *
 * @param control - Control del formulario de react-hook-form (requerido).
 * @param rules - Reglas de validacion para el campo (opcional).
 * @param name - Nombre del campo del formulario (requerido).
 * @param defaultSelectedKey - Valor predeterminado del campo (opcional).
 * @param props - Props adicionales que se pasan al componente Autocomplete de NextUI.
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
 *        //...
 *       >
 *         <AutocompleteItem value="1">Opcion 1</AutocompleteItem>
 *         <AutocompleteItem value="2">Opcion 2</AutocompleteItem>
 *       </AutoCompleteField>
 *     </form>
 *   );
 * }
 */
function AutoCompleteField<TFieldValues extends FieldValues>({
	control,
	rules,
	name,
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
					{props.children}
				</Autocomplete>
			)}
		/>
	)
}

export { AutoCompleteField }
