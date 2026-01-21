import React from 'react'
import { cn } from '@/shared/utils'

interface CheckboxProps extends Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'type'
> {
	label?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	className,
	...props
}) => {
	return (
		<label className="flex items-center gap-2 cursor-pointer">
			<input
				type="checkbox"
				className={cn(
					'w-4 h-4 border-gray rounded text-black checked:text-black checked:bg-white focus:ring-black accent-black',
					className
				)}
				{...props}
			/>
			{label && <span className="text-sm text-black-dark">{label}</span>}
		</label>
	)
}
