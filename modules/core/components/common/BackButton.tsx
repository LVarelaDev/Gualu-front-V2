'use client'

import { Button } from '@nextui-org/button'
import { ArrowLeft01Icon } from 'hugeicons-react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
	const router = useRouter()
	return (
		<div className="flex items-center gap-x-2">
			<Button isIconOnly onClick={router.back} color="primary" variant="flat">
				<ArrowLeft01Icon />
			</Button>
			<span className="font-medium text-gray-800 capitalize">Regresar </span>
		</div>
	)
}

export default BackButton
