'use client'

import { useMessages } from 'next-intl'
import { FeatureItem, PromptButton } from '../types'
import plusIcon from '@/assets/feature/home/icon-plus.svg'
import equalIcon from '@/assets/feature/home/icon-equal.svg'
import customIcon from '@/assets/feature/home/icon-custom.svg'

export interface HomepageContentDataType {
  title: string
  appName: string
  subtitle: string
  description: string
  ideaPlaceholder: string
  tryText: string
  prompts: PromptButton[]
  featureList: FeatureItem[]
}

// Map icon by index
const featureIcons = [plusIcon, equalIcon, customIcon]

export const useHomepageContent = (): HomepageContentDataType => {
  const messages = useMessages()

  const homeMessages = messages.home as {
    title: string
    appName: string
    subtitle: string
    description: string
    ideaPlaceholder: string
    tryText: string
    prompts: {
      onboardingFlow: string
      dataDashboard: string
      gradientGallery: string
    }
    features: Array<{ title: string; description: string }>
  }

  const prompts: PromptButton[] = [
    { id: '1', label: homeMessages.prompts.onboardingFlow },
    { id: '2', label: homeMessages.prompts.dataDashboard },
    { id: '3', label: homeMessages.prompts.gradientGallery },
  ]

  const featureList: FeatureItem[] = homeMessages.features.map((feature, index) => ({
    icon: featureIcons[index],
    title: feature.title,
    description: feature.description,
  }))

  return {
    title: homeMessages.title,
    appName: homeMessages.appName,
    subtitle: homeMessages.subtitle,
    description: homeMessages.description,
    ideaPlaceholder: homeMessages.ideaPlaceholder,
    tryText: messages.home.tryText,
    prompts,
    featureList,
  }
}
