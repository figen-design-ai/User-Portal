'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

export const SupportHubSection: React.FC = () => {
  const t = useTranslations('contact')

  return (
    <section
      className={['w-full bg-pink-200 rounded-[24px] px-4', 'pt-[42px] pb-[42px]'].join(' ')}
      aria-label={t('supportHubLabel')}
    >
      <div
        className={[
          'flex flex-col items-center text-center gap-6 max-w-4xl mx-auto',
          'pt-[8px] pb-[8px]',
        ].join(' ')}
      >
        <span
          className="bg-pink-400 text-body font-semibold text-gray-500 px-4 py-1 rounded-full"
          aria-label={t('supportHubLabel')}
        >
          {t('supportHubLabel')}
        </span>
        <h1 className="text-h-1 font-bold text-black-dark">{t('heroTitle')}</h1>
        <p className="text-body font-normal text-gray-500 max-w-2xl">
          <span className="block">{t('heroQuestion')}</span>
          <span className="block">{t('heroAnswer')}</span>
        </p>
      </div>
    </section>
  )
}
