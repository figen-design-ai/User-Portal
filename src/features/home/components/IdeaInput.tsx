'use client'

import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import IconStart from '@/assets/feature/home/icon-start-btn.svg'
import IconDecor from '@/assets/feature/home/icon-add.svg'

interface IdeaInputProps {
  onIdeaSubmit?: (idea: string) => void
}

export const IdeaInput: React.FC<IdeaInputProps> = ({ onIdeaSubmit }) => {
  const [idea, setIdea] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('home')

  const handleSubmit = () => {
    if (idea.trim()) {
      onIdeaSubmit?.(idea)
      const locale = pathname.split('/')[1]
      router.push(`/${locale}/chat`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="flex max-w-4xl w-full max-h-80 items-stretch p-4 gap-2 border border-pink-600 bg-white rounded-lg overflow-hidden">
      <Image src={IconDecor} alt="Decor Icon" className="shrink-0 self-start" />
      <textarea
        value={idea}
        onChange={e => setIdea(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t('ideaPlaceholder')}
        className="flex-1 px-4 text-black-dark placeholder:text-gray-100 text-lg outline-none border-none resize-none overflow-y-auto"
        rows={1}
        style={{ maxHeight: '280px' }}
        onInput={e => {
          const target = e.target as HTMLTextAreaElement
          target.style.height = 'auto'
          target.style.height = Math.min(target.scrollHeight, 280) + 'px'
        }}
      />
      <div className="flex flex-col shrink-0 justify-end">
        <Image
          onClick={handleSubmit}
          src={IconStart}
          alt="Start Icon"
          className={`shrink-0 cursor-pointer ${idea.trim() ? '' : 'opacity-50 cursor-not-allowed'}`}
        />
      </div>
    </div>
  )
}
