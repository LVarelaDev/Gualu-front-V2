'use client'

import { Button } from '@nextui-org/button'
import { ArrowLeft01Icon } from 'hugeicons-react'
import { useRouter } from 'next/navigation'

interface Props {
	label: string
}

const BackButton = ({ label }: Props) => {
	const router = useRouter()
	return (
		<div className="flex items-center gap-x-2">
			<Button isIconOnly onClick={router.back}>
				<ArrowLeft01Icon />
			</Button>
			<h1 className="text-lg font-bold text-gray-800 capitalize">{label} </h1>
		</div>
	)
}

export default BackButton
