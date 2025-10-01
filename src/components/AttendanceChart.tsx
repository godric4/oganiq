'use client'

import { MoreHorizontalIcon } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 13,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 98,
  },
  {
    name: 'Thur',
    present: 27,
    absent: 39,
  },
  {
    name: 'Fri',
    present: 18,
    absent: 48,
  },
]

const AttendanceChart = () => {
  return (
    <div className='bg-white w-full h-full rounded-xl p-4'>
      <div className='flex justify-center items-center'>
        <h2 className='text-lg  font-semibold'>Total Weekly Attendance </h2>
        {/* <MoreHorizontalIcon /> */}
      </div>
      <div className='relative w-full h-[90%]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis dataKey='name' tickLine={false} axisLine={true} />
            <YAxis tickLine={false} axisLine={true} />
            <Tooltip />
            <Legend
              wrapperStyle={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
            <Bar
              dataKey='present'
              fill='#B85C58'
              legendType='circle'
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey='absent'
              fill='#f3d984'
              legendType='circle'
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AttendanceChart
