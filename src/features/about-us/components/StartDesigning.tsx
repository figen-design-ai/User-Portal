import React from 'react'
import { StartDesigningSection } from '../types'
import { Button } from '@/shared/view'

interface StartDesigningProps {
  data: StartDesigningSection
}

export const StartDesigning: React.FC<StartDesigningProps> = props => {
  const { data } = props
  return (
    <div className="relative w-full bg-pink-600 rounded-2xl max-w-6xl flex flex-col items-center py-10 px-4">
      <h2 className="text-h-3 font-bold text-center mb-4 text-white">{data.title}</h2>
      <p className="text-center text-body text-white mb-8">{data.description}</p>
      <Button className="bg-white text-pink-600 font-bold border-transparent">
        {data.btnText}
      </Button>
    </div>
  )
}
