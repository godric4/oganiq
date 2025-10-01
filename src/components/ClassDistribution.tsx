'use client'

import { UserRound, UserRoundCheck } from 'lucide-react'

interface ClassDistributionProps {
  data: {
    className: string
    total: number
    male: number
    female: number
  }[]
}

const ClassDistribution = ({ data }: ClassDistributionProps) => {
  return (
    <div className='rounded-2xl bg-card text-card-foreground p-4 shadow-md w-full max-w-md mt-2'>
      {/* Title */}
      <h2 className='text-lg font-semibold mb-4'>Student Distribution</h2>
      <p className='text-sm text-muted-foreground mb-4'>By Class</p>

      {/* List of classes */}
      <div className='space-y-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex items-center justify-between border-b pb-1 last:border-none'
          >
            {/* Class name */}
            <span className='font-medium'>{item.className}</span>

            {/* Totals + male/female */}
            <div className='flex items-center gap-4 text-sm'>
              <span className='font-semibold'>{item.total}</span>
              <div className='flex items-center gap-1 text-blue-600'>
                <UserRound className='w-4 h-4' />
                {item.male}
              </div>
              <div className='flex items-center gap-1 text-pink-600'>
                <UserRoundCheck className='w-4 h-4' />
                {item.female}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassDistribution
