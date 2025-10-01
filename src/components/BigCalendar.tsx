'use client'

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import { calendarEvents } from '@/lib/data'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  // set view to make UI clickable

  const [view, setView] = useState<View>(Views.WORK_WEEK)

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView)
  }
  const messages = {
    work_week: 'School Week',
  }

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor='start'
      endAccessor='end'
      views={['work_week', 'day']}
      view={view}
      style={{ height: '98%' }}
      onView={handleOnChangeView}
      messages={messages}
      min={new Date(2025, 5, 0, 8, 0, 0)}
      max={new Date(2025, 5, 0, 16, 0, 0)}
    />
  )
}
export default BigCalendar
