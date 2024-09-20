'use client'

import { Button } from '@nextui-org/button'
import { ArrowLeft01Icon } from 'hugeicons-react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
	const router = useRouter()
	return (
		<div className="flex items-center gap-x-2">
			<Button isIconOnly onClick={router.back}>
				<ArrowLeft01Icon />
			</Button>
			<span className="text-lg font-bold text-gray-800 capitalize">
				Regresar{' '}
			</span>
		</div>
	)
}

export default BackButton
