import React from 'react'
import { PromptButton } from '../types'
import Link from 'next/link'

interface PromptButtonsProps {
  prompts: PromptButton[]
  onPromptClick?: (prompt: PromptButton) => void
  tryText?: string
}

export const PromptButtons: React.FC<PromptButtonsProps> = ({
  prompts,
  onPromptClick,
  tryText,
}) => {
  return (
    <div className="flex items-center text-body gap-2 text-gray-200">
      <div>{tryText}:</div>
      <div className="w-full max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
        {prompts.map(prompt => (
          <Link
            key={prompt.id}
            onClick={() => onPromptClick?.(prompt)}
            className="underline decoration-pink-600 underline-offset-4 cursor-pointer"
            href={''}
          >
            {prompt.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
