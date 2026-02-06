'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/shared/utils'
import IconChevronDown from '@/assets/feature/contact_us/icon_chevron_down.svg'

interface FaqItemProps {
  id: string
  question: string
  answer: string
  isExpanded: boolean
  onToggle: () => void
}

const FAQ_ITEM_WRAPPER_CLASS = 'border-b border-gray-200 py-2.5 last:border-b-0'

const FAQ_TRIGGER_CLASS = [
  'w-full flex items-center justify-between gap-4 py-4 text-left rounded',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
].join(' ')

const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer, isExpanded, onToggle }) => (
  <div className={FAQ_ITEM_WRAPPER_CLASS}>
    <button
      type="button"
      onClick={onToggle}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
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

export const CommonQuestionsSection: React.FC = () => {
  const t = useTranslations('contact.commonQuestions')
  const [expandedIndex, setExpandedIndex] = useState(0)

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'] as const

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex(prev => (prev === index ? -1 : index))
  }, [])

  return (
    <section
      className={[
        'w-full bg-white rounded-[24px] border-[0.5px] border-[var(--border,#898F9880)] shadow-[0px_0px_16px_1px_#00000012]',
        'pt-[42px] pr-[65px] pb-[42px] pl-[65px]',
      ].join(' ')}
    >
      <div className="flex flex-col w-[438.5px] h-[75px] gap-2 pb-2.5 opacity-100">
        <h2 id="common-questions-heading" className="text-h-3 font-bold text-black-slate">
          {t('title')}
        </h2>
        <p className="text-small text-slate-500">{t('subtitle')}</p>
      </div>
      <div className="flex flex-col">
        {faqKeys.map((key, index) => (
          <FaqItem
            key={key}
            id={key}
            question={t(`${key}.question`)}
            answer={t(`${key}.answer`)}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  )
}
