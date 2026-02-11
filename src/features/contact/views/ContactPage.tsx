'use client'

import React from 'react'
import { cn } from '@/shared/utils'
import { SupportHubSection } from '../components/SupportHubSection'
import { CommonQuestionsSection } from '../components/CommonQuestionsSection'
import { ContactFormSection } from '../components/ContactFormSection'
import { ContactCtaSection } from '../components/ContactCtaSection'

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-hero-gradient">
      <main
        className={cn(
          'w-full max-w-6xl mx-auto flex flex-col',
          'px-4 py-8 md:px-6 md:py-10',
          'gap-10 md:gap-14'
        )}
      >
        <SupportHubSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <CommonQuestionsSection />
          <ContactFormSection />
        </div>
        <ContactCtaSection />
      </main>
    </div>
  )
}
