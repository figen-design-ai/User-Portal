import React from 'react'
import { cn } from '@/shared/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
}

export const Input: React.FC<InputProps> = ({
	label,
	error,
	className,
	...props
}) => {
	return (
		<div className="w-full">
			{label && (
				<label className="block text-sm font-medium text-black-dark mb-1.5">
					{label}
				</label>
			)}
			<input
				className={cn(
					'w-full px-4 py-2.5 rounded-lg border border-gray bg-white',
					'text-black-dark placeholder:text-black-60',
					'focus:outline-none focus:border-black',
					'transition-colors',
					error && 'border-red focus:ring-red',
					className
				)}
				{...props}
			/>
			{error && <p className="mt-1 text-sm text-red">{error}</p>}
		</div>
	)
}
