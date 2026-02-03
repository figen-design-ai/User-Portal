'use client'

import React from 'react'
import Image from 'next/image'
import { FeatureItem } from '../types'
import { IdeaInput } from '../components/IdeaInput'
import { PromptButtons } from '../components/PromptButtons'
import { useHomepageContent } from '../hooks/useHomepageContent'

export const HomePage: React.FC = () => {
  const homeData = useHomepageContent()

  const handleIdeaSubmit = () => {}

  const handlePromptClick = () => {}

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-main-gradient">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col items-center text-center space-y-8 flex-1 justify-center">
          <h1 className="text-h-1 font-bold text-center align-middle text-black-dark">
            {homeData.title} <span className="text-pink-700">{homeData.appName}</span>
          </h1>

          <IdeaInput onIdeaSubmit={handleIdeaSubmit} />
          <PromptButtons
            prompts={homeData.prompts}
            tryText={homeData.tryText}
            onPromptClick={handlePromptClick}
          />
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-default text-center max-w-4xl mx-auto text-black">
              {homeData.subtitle}
            </p>
            <p className="text-small text-center max-w-4xl mx-auto text-gray-200">
              {homeData.description}
            </p>
          </div>
          <div className="flex gap-12 mt-10">
            {homeData.featureList.map((feature: FeatureItem) => (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-2.5 border-pink-200 p-5 rounded-lg border-solid border"
              >
                <div className="p-3 bg-pink-100 rounded-md">
                  <Image src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="font-bold text-default text-black-dark">{feature.title}</h3>
                <p className="text-small text-gray-200 max-w-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
