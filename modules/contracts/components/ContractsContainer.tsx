import TableContracts from '@/modules/contracts/components/table/TableContracts'
import { getAllContracts } from '@/modules/contracts/services/querys/getAllContracts'
import { Button } from '@nextui-org/button'
import { PlusSignIcon } from 'hugeicons-react'
import Link from 'next/link'
import { Suspense } from 'react'
const ContractsContainer = async () => {
	const contracts = await getAllContracts()
	console.log(contracts)
	return (
		<>
			<Button
				as={Link}
				href="/contracts/manage"
				color="primary"
				endContent={<PlusSignIcon size={20} />}
			>
				Agregar
			</Button>
			<Suspense fallback={<span>cargando...</span>}>
				<TableContracts data={contracts ?? []} />
			</Suspense>
		</>
	)
}

export default ContractsContainer
