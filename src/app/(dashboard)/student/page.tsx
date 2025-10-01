import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'

const StudentPage = () => {
  return (
    <div className='p-4 flex flex-col xl:flex-row gap-4'>
      {/* Left */}
      <div className='w-full xl:w-2/3 '>
        <div className='h-full bg-white p-4  rounded-md'>
          <h1 className='text-xl font-semibold text-primary'>
            Lesson Schedule (JSS1A)
          </h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}

export default StudentPage
