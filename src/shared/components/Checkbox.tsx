import React from 'react'
import { cn } from '@/shared/utils'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  labelClassName?: string
  inputClassName?: string
  labelTextClassName?: string
  showRequiredIndicator?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className,
  labelClassName,
  inputClassName,
  labelTextClassName,
  showRequiredIndicator = false,
  ...props
}) => {
  return (
    <label className={cn('flex items-center gap-2 cursor-pointer', labelClassName)}>
      <input
        type="checkbox"
        className={cn(
          'w-4 h-4 border-gray rounded text-black checked:text-black checked:bg-white',
          inputClassName ?? className
        )}
        {...props}
      />
      {label && (
        <span className={cn('text-sm text-black-dark', labelTextClassName)}>
          {label}
          {showRequiredIndicator && <span className="text-red ml-1">*</span>}
        </span>
      )}
    </label>
  )
}
