'use client'

import { useMessages } from 'next-intl'
import { AboutUsPageContentDataType, ValueItem } from '../types'
import speedIcon from '@/assets/feature/about-us/icon-speed.svg'
import designFidelityIcon from '@/assets/feature/about-us/icon-design-fidelity.svg'
import devCodeIcon from '@/assets/feature/about-us/icon-dev-code.svg'

// Map value icon by index
const valueIcons = [speedIcon, designFidelityIcon, devCodeIcon]

export const useAboutUsPageContent = (): AboutUsPageContentDataType => {
  const messages = useMessages()
  const aboutUsData = messages.aboutUs as AboutUsPageContentDataType

  return {
    ...aboutUsData,
    ourValues: {
      ...aboutUsData.ourValues,
      values: aboutUsData.ourValues.values.map((value: ValueItem, index: number) => ({
        ...value,
        icon: valueIcons[index],
      })),
    },
  }
}
