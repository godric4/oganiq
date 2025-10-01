import BigCalendar from '@/components/BigCalendar'

const SingleTeacherPage = () => {
  return (
    <>
      <div className='flex-1 p-4 flex flex-col xl:flex-row'>
        {/* Left */}
        <div className='w-full xl-1/3'>Left</div>
        {/* Right */}
        <div className='w-full xl-2/3'>R</div>
      </div>
      <div className=''>
        <BigCalendar />
      </div>
    </>
  )
}

export default SingleTeacherPage
