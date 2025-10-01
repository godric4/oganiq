'use client'

const announcements = [
  {
    id: '1',
    title: 'About JSS2A Math Test',
    date: '2025-01-02',
    description:
      'The Math test scheduled for 2nd January has been cancelled. A new date will be announced soon.',
  },
  {
    id: '2',
    title: 'Field Trip Rescheduled',
    date: '2025-01-05',
    description:
      'The field trip to Obudu cattle ranch has been rescheduled. Please check back for the new date and further instructions.',
  },
]

const Announcements = () => {
  const colors = ['bg-red-200', 'bg-green-200', 'bg-blue-200']

  return (
    <div className='bg-white rounded-2xl shadow-md p-6 w-full max-w-lg mx-auto mt-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-xl font-bold text-primary'>Announcements</h1>
        <button className='text-sm text-primary font-medium hover:underline'>
          View All
        </button>
      </div>

      <div className='flex flex-col gap-5'>
        {announcements.map((item, index) => (
          <div
            key={item.id}
            className='bg-card rounded-lg p-4 hover:shadow-lg transition-shadow'
          >
            <div className='flex justify-between items-start mb-2'>
              <h2 className='font-semibold text-black'>{item.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  colors[index % colors.length]
                }`}
              >
                {item.date}
              </span>
            </div>
            <p className='text-sm text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements
