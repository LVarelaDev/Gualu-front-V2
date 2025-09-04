import type { FormFieldValues } from '@/modules/core/interfaces/formFieldValues'
import { Checkbox, CheckboxProps } from '@heroui/checkbox'
import { Controller, type FieldValues } from 'react-hook-form'

interface Props<T extends FieldValues>
	extends FormFieldValues<T>,
		Omit<CheckboxProps, 'name'> {}

/**
 * Componente CheckboxField que integra react-hook-form con NextUI Checkbox.
 *
 * @param  name - Nombre del campo del formulario (requerido).
 * @param  control - Control del formulario de react-hook-form (requerido).
 * @param rules - Reglas de validacion para el campo (opcional).
 * @param  props - Props adicionales que se pasan al componente Checkbox de NextUI.
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
 *       <CheckboxField
 *         control={control}
 *         name="termsAndConditions"
 *         rules={{ required: 'Este campo es requerido' }}
 *        //...
 *        >
 *      Acepta los terminos y condiciones
 *      </CheckboxField>
 *     </form>
 *   );
 * }
 */
function CheckboxField<T extends FieldValues>({
	control,
	name,
	children,
	...props
}: Props<T>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<Checkbox
					{...field}
					{...props}
					color={props.color ?? 'primary'}
					defaultSelected={props.defaultSelected ?? true}
				>
					{children}
				</Checkbox>
			)}
		/>
	)
}

export default CheckboxField
