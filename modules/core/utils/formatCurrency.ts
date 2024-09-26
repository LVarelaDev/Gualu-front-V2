export const formatCurrency = (mount: number) => {
	const format = new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2,
	}).format(mount)
	return format
}
