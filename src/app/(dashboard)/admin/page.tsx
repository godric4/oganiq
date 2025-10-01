import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import ClassDistribution from '@/components/ClassDistribution'
import EventCalendar from '@/components/EventCalendar'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'

const Admin = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* User Cards */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='Total Students' />
          <UserCard type='Teaching Staff' />
          <UserCard type='Registered Parents' />
          <UserCard type='Support Staff' />
        </div>
        {/*charts  */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* class distribution */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <ClassDistribution
              data={[
                { className: 'JSS1', total: 120, male: 65, female: 55 },
                { className: 'JSS2', total: 110, male: 60, female: 50 },
                { className: 'JSS3', total: 100, male: 52, female: 48 },
                { className: 'SS1', total: 95, male: 47, female: 48 },
                { className: 'SS2', total: 85, male: 40, female: 45 },
                { className: 'SS3', total: 90, male: 44, female: 46 },
              ]}
            />
          </div>
          {/* attendance chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            {' '}
            <AttendanceChart />
          </div>
        </div>

        {/* bottom chart */}
        <FinanceChart />
      </div>
      {/* RIGHT  */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <div className=''>
          <EventCalendar />
          <Announcements />
        </div>
      </div>
    </div>
  )
}

export default Admin
