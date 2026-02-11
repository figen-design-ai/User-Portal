import React from 'react'
import { OurMissionSection } from '../types'

interface OurMissionProps {
  data: OurMissionSection
}

export const OurMission: React.FC<OurMissionProps> = props => {
  const { data } = props
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="text-sm font-medium bg-pink-600 text-white px-2 py-1 rounded-xl mb-4">
        {data.badge}
      </div>
      <h2 className="text-h-1 font-bold text-center">{data.heading.primary}</h2>
      <h2 className="text-pink-600 text-h-1 font-bold text-center">{data.heading.highlight}</h2>
      <p className="text-center text-base text-gray-200 max-w-2xl mt-4 mb-10">{data.description}</p>

      <div className="flex gap-8 w-full max-w-7xl flex-wrap lg:flex-nowrap justify-center">
        {data.stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-64 justify-center w-full gap-4 text-center px-5 py-8 bg-gradient-to-tr from-pink-500/20 to-pink-50/80 rounded-lg border border-pink-600"
          >
            <div className="text-h-3 font-bold text-pink-600">{stat.value}</div>
            <div className="text-body font-bold text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
