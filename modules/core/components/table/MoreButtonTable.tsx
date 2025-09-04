
import { Button, ButtonProps } from '@heroui/react'
import { MoreHorizontalIcon } from 'hugeicons-react'
import type { FC } from 'react'

interface Props extends ButtonProps {}

const MoreButtonTable: FC<Props> = ({ ...props }) => {
	return (
		<Button isIconOnly variant="light" radius="full" {...props}>
			<MoreHorizontalIcon strokeWidth={3} className="text-foreground" />
		</Button>
	)
}

export default MoreButtonTable
