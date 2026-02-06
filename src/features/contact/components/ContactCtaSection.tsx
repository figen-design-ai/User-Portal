'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export const ContactCtaSection: React.FC = () => {
  const t = useTranslations('contact.cta')

  return (
    <section
      className={['w-full bg-pink-200 rounded-3xl px-4', 'pt-[42px] pb-[42px]'].join(' ')}
      aria-labelledby="contact-cta-heading"
    >
      <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
        <h2 id="contact-cta-heading" className="text-h-2 font-bold text-black-dark">
          {t('title')}
        </h2>
        <p className="text-body text-gray-500 font-normal max-w-2xl">{t('subtitle')}</p>
        <Link
          href="/"
          className={[
            'inline-flex items-center justify-center rounded-lg font-semibold',
            'transition-colors bg-pink-600 border border-pink-500 hover:bg-pink-600',
            'text-white px-6 py-3 text-body no-underline',
          ].join(' ')}
        >
          {t('button')}
        </Link>
      </div>
    </section>
  )
}
