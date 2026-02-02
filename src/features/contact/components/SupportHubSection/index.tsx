'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

export const SupportHubSection: React.FC = () => {
  const t = useTranslations('contact')

  return (
    <section
      className="w-full bg-pink-200 rounded-3xl px-4 py-16 md:py-20"
      aria-label={t('supportHubLabel')}
    >
      <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
        <span
          className="bg-pink-400 text-white font-inter font-semibold text-[20px] px-4 py-1.5 rounded-full"
          aria-label={t('supportHubLabel')}
        >
          {t('supportHubLabel')}
        </span>
        <h1 className="text-h-1 font-bold text-black-dark">{t('heroTitle')}</h1>
        <p className="text-body text-gray-500 max-w-2xl">{t('heroDescription')}</p>
      </div>
    </section>
  )
}
