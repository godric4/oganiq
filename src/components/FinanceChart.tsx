'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const feeData = [
  { term: 'First Term', Paid: 50000, Due: 10000 },
  { term: 'Second Term', Paid: 45000, Due: 5000 },
  { term: 'Third Term', Paid: 60000, Due: 0 },
]

const recentPayments = [
  { id: 1, student: 'John Doe', amount: 15000, date: '2025-08-01' },
  { id: 2, student: 'Jane Smith', amount: 20000, date: '2025-08-02' },
  { id: 3, student: 'Mary Johnson', amount: 10000, date: '2025-08-03' },
]

const overduePayments = [
  { id: 1, student: 'Peter Pan', due: 5000 },
  { id: 2, student: 'Lucy Liu', due: 3000 },
]

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-2xl shadow-md p-6 space-y-6'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold text-[#800020]'>
          Fee / Payment Summary
        </h2>
      </div>

      {/* Bar Chart */}
      <div className='w-full h-52'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={feeData}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <XAxis dataKey='term' tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Legend verticalAlign='top' height={36} />
            <Bar dataKey='Paid' fill='#800020' radius={[4, 4, 0, 0]} />
            <Bar dataKey='Due' fill='#FFD700' radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Payments */}
      <div>
        <h3 className='text-lg font-semibold text-gray-700 mb-2'>
          Recent Payments
        </h3>
        <ul className='space-y-2 max-h-40 overflow-y-auto'>
          {recentPayments.map((payment) => (
            <li
              key={payment.id}
              className='flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition'
            >
              <span>{payment.student}</span>
              <span className='font-medium text-[#800020]'>
                ₦{payment.amount.toLocaleString()}
              </span>
              <span className='text-gray-400 text-sm'>{payment.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Overdue Alerts */}
      {overduePayments.length > 0 && (
        <div className='bg-red-50 p-4 rounded-lg border-l-4 border-red-500'>
          <h3 className='text-red-600 font-semibold mb-2'>Overdue Payments</h3>
          <ul className='space-y-1'>
            {overduePayments.map((payment) => (
              <li key={payment.id}>
                {payment.student} has an overdue of ₦
                {payment.due.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FinanceChart
