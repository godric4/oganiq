import { FilterIcon, PlusIcon, SortAscIcon } from 'lucide-react'
import { role } from '@/lib/data'

const TableActions = () => {
  return (
    <div className=''>
      <div className='flex items-center gap-4 self-end'>
        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-card'>
          <FilterIcon className='p-1' />
        </button>
        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-card'>
          <SortAscIcon className='p-1' />
        </button>

        {role === 'admin' && (
          <div className=''>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-card'>
              <PlusIcon className='p-1' />
            </button>
          </div>
          // <FormModal table="teacher" type="create"/>
        )}
      </div>
    </div>
  )
}

export default TableActions
