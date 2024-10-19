import { Spinner } from '@nextui-org/react'

const loading = () => {
	return (
		<section className="mt-28 flex justify-center items-center">
			<Spinner color="default" label="Cargando..." />
		</section>
	)
}

export default loading
