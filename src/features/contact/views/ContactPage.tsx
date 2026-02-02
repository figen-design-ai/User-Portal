'use client'

import React from 'react'
import { SupportHubSection } from '../components/SupportHubSection'
import { CommonQuestionsSection } from '../components/CommonQuestionsSection'
import { ContactFormSection } from '../components/ContactFormSection'
import { ContactCtaSection } from '../components/ContactCtaSection'

export const ContactPage: React.FC = () => {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-10 flex flex-col gap-10 md:gap-14">
      <SupportHubSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <CommonQuestionsSection />
        <ContactFormSection />
      </div>
      <ContactCtaSection />
    </main>
  )
}
