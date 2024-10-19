import type {
	Control,
	FieldValues,
	Path,
	RegisterOptions,
} from 'react-hook-form'

export interface FormFieldValues<T extends FieldValues> {
	name: Path<T>
	rules?: RegisterOptions<T, Path<T>>
	control: Control<T, any>
}
