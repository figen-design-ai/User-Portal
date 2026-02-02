'use client'

import React, { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/shared/utils'

const ChevronDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('w-5 h-5 shrink-0 transition-transform', className)}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

interface FaqItemProps {
  id: string
  question: string
  answer: string
  isExpanded: boolean
  onToggle: () => void
}

const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer, isExpanded, onToggle }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      type="button"
      onClick={onToggle}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
      className="w-full flex items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded"
      aria-expanded={isExpanded}
      aria-controls={`faq-answer-${id}`}
      id={`faq-question-${id}`}
    >
      <span className="font-medium text-black-dark text-body">{question}</span>
      <ChevronDown className={isExpanded ? 'rotate-180' : ''} />
    </button>
    <div
      id={`faq-answer-${id}`}
      role="region"
      aria-labelledby={`faq-question-${id}`}
      className={cn('overflow-hidden transition-[height]', isExpanded ? 'visible' : 'hidden')}
    >
      <p className="text-gray-500 text-small pb-4">{answer}</p>
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
      className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8"
      aria-labelledby="common-questions-heading"
    >
      <h2 id="common-questions-heading" className="text-h-3 font-bold text-black-dark mb-1">
        {t('title')}
      </h2>
      <p className="text-small text-gray-500 mb-6">{t('subtitle')}</p>
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
