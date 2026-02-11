import React from 'react'
import { OurValuesSection } from '../types'
import Image from 'next/image'

interface OurValuesProps {
  data: OurValuesSection
}

export const OurValues: React.FC<OurValuesProps> = props => {
  const { data } = props
  return (
    <div className="relative w-full flex flex-col items-center py-10">
      <h2 className="text-h-3 font-bold text-center mb-4">{data.title}</h2>
      <p className="text-center text-default text-gray-200 max-w-2xl mb-10">{data.subtitle}</p>
      <div className="flex items-start justify-center gap-12 w-full max-w-7xl flex-wrap lg:flex-nowrap">
        {data.values.map((value, index) => (
          <div key={index} className="flex flex-col gap-4 items-start w-full max-w-80">
            <div className="p-3 bg-pink-100 rounded-md">
              <Image src={value.icon} alt={value.title} />
            </div>

            <div className="text-body font-bold">{value.title}</div>
            <div className="text-small text-gray-200">{value.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
