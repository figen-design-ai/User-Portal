'use client'

import React from 'react'
import { useAboutUsPageContent } from '../hooks/useAboutUsPageContent'
import { OurMission } from '../components/OurMission'
import { StartDesigning } from '../components/StartDesigning'
import { OurValues } from '../components/OurValues'

export const AboutUsPage: React.FC = () => {
  const aboutUsData = useAboutUsPageContent()

  return (
    <div className="relative min-h-screen gap-10 flex flex-col items-center justify-center px-4 py-20 bg-main-gradient">
      <OurMission data={aboutUsData.ourMission} />
      <OurValues data={aboutUsData.ourValues} />
      <StartDesigning data={aboutUsData.startDesigning} />
    </div>
  )
}
