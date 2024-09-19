import {
	Breadcrumbs as NextBreadcrumbs,
	BreadcrumbItem,
} from '@nextui-org/react'
import React from 'react'

const Breadcrumbs = ({ route }: { route: string }) => {
	// Divide la ruta en partes usando "/" como delimitador
	const paths = route.split('/').filter((path) => path)

	// Crea las migas de pan
	const breadcrumbs = paths.map((path, index) => {
		const href = `/${paths.slice(0, index + 1).join('/')}`

		return {
			label: path.charAt(0).toUpperCase() + path.slice(1), // Capitaliza el primer carácter
			href,
		}
	})

	return (
		<NextBreadcrumbs>
			<BreadcrumbItem href="/">Home</BreadcrumbItem>
			{breadcrumbs.map((breadcrumb, index) => (
				<BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
					{breadcrumb.label}
				</BreadcrumbItem>
			))}
		</NextBreadcrumbs>
	)
}

export default Breadcrumbs
