import { cn } from '@nextui-org/theme'
import type { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
	icon: ReactNode
	title: string
}

/**
 * A card component to display information about a contract.
 *
 * It displays the provided title and icon at the top, and the provided children
 * below. The title and icon are displayed in a row with a gap between them.
 *
 * @prop {string} title The title of the card.
 * @prop {ReactNode} icon A React node to display next to the title.
 * @prop {ReactNode} children The content of the card.
 *
 * @example
 * <ContractInfoCard title="Contract Information" icon={<InfoIcon />}>
 *   <div>
 *     This is the information about the contract.
 *   </div>
 * </ContractInfoCard>
 */
const ContractInfoCard = ({
	title,
	icon,
	children,
	className,
	...props
}: Props) => {
	return (
		<article
			className={cn('border rounded-xl p-4 bg-white dark:bg-background dark:border-white/20', className)}
			{...props}
		>
			<h3 className="py-3 font-semibold text-lg flex items-center gap-x-2 dark:text-white">
				{icon}
				{title}
			</h3>
			{children}
		</article>
	)
}

export default ContractInfoCard
