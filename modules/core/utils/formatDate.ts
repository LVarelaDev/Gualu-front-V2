export const formatDate = (dateString: string) => {
	const date = new Date(dateString)
	const formatter = new Intl.DateTimeFormat('es-ES', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	}).format(date)

	return formatter
}
