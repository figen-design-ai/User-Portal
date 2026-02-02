'use client'

// TEMPORARY: Replace with full Contact Us content when ready

import React from 'react'
import { useTranslations } from 'next-intl'

export const HeroSection: React.FC = () => {
  const t = useTranslations('contact')

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col min-h-screen">
        <div className="flex flex-col items-center text-center space-y-6 flex-1 justify-center">
          <h1
            className="font-normal text-[64px] leading-[100%] tracking-[0.05em] text-center align-middle text-black-dark"
            style={{ textShadow: '0px 4px 4px rgba(45, 45, 45, 1)' }}
          >
            {t('title')}
          </h1>
          <p className="font-normal text-[24px] leading-[100%] tracking-normal text-center max-w-4xl mx-auto text-black">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </div>
  )
}
