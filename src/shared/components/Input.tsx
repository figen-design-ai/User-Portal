import React from 'react'
import { cn } from '@/shared/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  wrapperClassName?: string
  labelClassName?: string
  errorClassName?: string
  showRequiredIndicator?: boolean
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  wrapperClassName,
  labelClassName,
  errorClassName,
  showRequiredIndicator = false,
  ...props
}) => {
  return (
    <div className={cn('w-full', wrapperClassName)}>
      {label && (
        <label className={cn('block text-sm font-medium text-black-dark mb-1.5', labelClassName)}>
          {label}
          {showRequiredIndicator && <span className="text-red ml-1">*</span>}
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
        aria-invalid={!!error}
      />
      {error && (
        <p className={cn('mt-1 text-sm text-red', errorClassName)} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
