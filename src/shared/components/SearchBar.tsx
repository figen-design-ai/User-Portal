import React from 'react'
import { cn } from '@/shared/utils'

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchBar: React.FC<SearchBarProps> = ({ className, ...props }) => {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-black-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        className={cn(
          'w-full pl-10 pr-4 py-2 rounded-lg border border-gray bg-white',
          'text-black-dark placeholder:text-black-60',
          'focus:outline-none focus:ring-2 focus:ring-primary-gradient-start focus:border-transparent',
          'transition-colors'
        )}
        {...props}
      />
    </div>
  )
}
