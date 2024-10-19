import type { FC, ReactNode } from 'react'

interface Props {
	label: string
	value: string | ReactNode
	icon?: ReactNode
}
const ContractInfoItem: FC<Props> = ({ label, value, icon }) => (
	<dl className="flex items-center justify-between pb-2">
		<dt className="font-medium">{label}</dt>
		<dd className="text-foreground dark:text-gray-400 capitalize flex items-center gap-x-1">
			{icon}
			{value}
		</dd>
	</dl>
)

export default ContractInfoItem
