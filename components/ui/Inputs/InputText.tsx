import React from 'react'
import { Input } from '@nextui-org/react'
import { RegisterOptions, UseFormReturn } from 'react-hook-form'

type props = {
  form: UseFormReturn<any, any>
  name: string
  label: string
  rules?: RegisterOptions<any, string>
  placeholder?: string
  type?: string
}

const InputText = ({
  form,
  name,
  label,
  rules,
  placeholder,
  type = 'text',
}: props) => {
  const { register, watch } = form
  const inputValue = watch(name)  // Obtener el valor del formulario para el input

  return (
    <Input
      {...register(name, rules)} // Conectar con react-hook-form
      classNames={{
        inputWrapper: 'bg-white group-data-[focus=true]:bg-white',
      }}
      label={label}
      placeholder={placeholder}
      type={type}
      variant="bordered"
      value={inputValue || ''}  // Asegurar que el valor del input siempre esté sincronizado
    />
  )
}

export default InputText
