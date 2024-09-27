import React from 'react'

interface Props {
	params: { id?: string }
}

const page = ({ params }: Props) => {
	const id = params.id
	return <div>page {id}</div>
}

export default page
