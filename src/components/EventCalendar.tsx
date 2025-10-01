'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const upcomingEvents = [
  {
    id: '1',
    title: 'Summer Camp Trip',
    date: 'Aug 15',
    description: 'Outdoor activities and games for all students.',
  },
  {
    id: '2',
    title: 'Music Concert',
    date: 'Aug 20',
    description: 'Creative music concert for all students and teachers.',
  },
  {
    id: '3',
    title: 'Science Fair',
    date: 'Aug 25',
    description: 'Traditional science festival for all students.',
  },
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date())
  const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500']

  return (
    <div className='bg-white rounded-md p-4'>
      {/* Calendar */}
      <Calendar
        onChange={onChange}
        value={value}
        className='w-full flex flex-col items-center mb-6'
      />

      {/* Upcoming Events Header */}
      <h1 className='text-lg text-primary font-semibold mb-4'>
        Upcoming Events
      </h1>

      {/* Upcoming Events List */}
      <div className='flex flex-col gap-4'>
        {upcomingEvents.map((event, index) => (
          <div key={event.id} className='flex items-start gap-3'>
            {/* Colored disc */}
            <span
              className={`mt-2 w-3 h-3 rounded-full ${
                colors[index % colors.length]
              }`}
            ></span>

            {/* Event details */}
            <div>
              <h2 className='font-semibold text-black'>{event.title}</h2>
              <p className='text-gray-500'>{event.description}</p>
              <span className='text-xs text-gray-400 mt-1 block'>
                {event.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar
