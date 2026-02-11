'use client'

import React, { useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/shared/utils'
import IconChevronDown from '@/assets/feature/contact-us/icon-chevron-down.svg'

export interface FaqItemProps {
  id: string
  index: number
  question: string
  answer: string
  isExpanded: boolean
  onToggle: (index: number) => void
}

const FAQ_ITEM_WRAPPER_CLASS = 'border-b border-gray-200 py-2.5 last:border-b-0'

const FAQ_TRIGGER_CLASS = cn(
  'w-full flex items-center justify-between gap-4 py-4 text-left rounded',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
)

export const FaqItem = React.memo<FaqItemProps>(
  ({ id, index, question, answer, isExpanded, onToggle }) => {
    const handleClick = useCallback(() => {
      onToggle(index)
    }, [index, onToggle])

    return (
      <div className={FAQ_ITEM_WRAPPER_CLASS}>
        <button
          type="button"
          onClick={handleClick}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleClick()
            }
          }}
          className={FAQ_TRIGGER_CLASS}
          aria-expanded={isExpanded}
          aria-controls={`faq-answer-${id}`}
          id={`faq-question-${id}`}
        >
          <span className="text-h-4 font-bold text-slate-600 text-body">{question}</span>
          <Image
            src={IconChevronDown}
            alt=""
            width={18}
            height={20}
            className={cn(
              'shrink-0 transition-transform duration-300 ease-in-out',
              isExpanded && 'rotate-180'
            )}
          />
        </button>
        <div
          id={`faq-answer-${id}`}
          role="region"
          aria-labelledby={`faq-question-${id}`}
          className={cn(
            'grid transition-[grid-template-rows] duration-300 ease-in-out',
            isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <p className="text-slate-600 font-light text-small pb-4">{answer}</p>
          </div>
        </div>
      </div>
    )
  }
)

FaqItem.displayName = 'FaqItem'
