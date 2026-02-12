'use client'

import React, { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import styles from '../../styles/contact.module.css'
import { FaqItem } from './FaqItem'

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5'] as const

export const CommonQuestionsSection: React.FC = () => {
  const t = useTranslations('contact.commonQuestions')
  const [expandedIndex, setExpandedIndex] = useState(0)

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex(prev => (prev === index ? -1 : index))
  }, [])

  return (
    <section className={styles.cardCommonQuestions}>
      <div className="flex flex-col w-[438.5px] h-[75px] gap-2 pb-2.5 opacity-100">
        <h2 id="common-questions-heading" className="text-h-3 font-bold text-black-slate">
          {t('title')}
        </h2>
        <p className="text-small text-slate-500">{t('subtitle')}</p>
      </div>
      <div className="flex flex-col">
        {FAQ_KEYS.map((key, index) => (
          <FaqItem
            key={key}
            id={key}
            index={index}
            question={t(`${key}.question`)}
            answer={t(`${key}.answer`)}
            isExpanded={expandedIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  )
}
