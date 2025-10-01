import { MoreHorizontalIcon } from 'lucide-react'

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className='rounded-2xl bg-card text-card-foreground   p-4  flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        {' '}
        <span className='text-[10px]  bg-background text-foreground  px-2 py-1 rounded-full '>
          2024/2025
        </span>
        <MoreHorizontalIcon />
      </div>
      <h2 className='capitalize text-sm font-medium'>{type}</h2>
      <h1 className='font-semibold my-4 text-2xl'>1234</h1>
    </div>
  )
}

export default UserCard
