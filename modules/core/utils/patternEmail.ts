/**
 * Expresión regular para validar la sintaxis de una dirección de correo electrónico.
 */
export const patternEmail: RegExp =
	/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
