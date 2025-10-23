'use client'
import FormModal from '@/components/FormModal'
// import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role } from '@/lib/data'
import {
  EditIcon,
  FilterIcon,
  PlusIcon,
  ScanEye,
  SortAscIcon,
  TrashIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Parent = {
  id: number
  name: string
  email?: string
  students: string[]
  phone: string
  address: string
}

const columns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Student Names',
    accessor: 'students',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
]

const ParentListPage = () => {
  const router = useRouter()
  const renderRow = (item: Parent) => (
    <tr
      onClick={() => router.push(`/list/parents/${item.id}`)}
      key={item.id}
      className='border-b border-primary odd:bg-card  text-sm hover:bg-primary cursor-pointer hover:text-white'
    >
      <td className='flex items-center gap-4 p-4'>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.students.join(',')}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td onClick={(e) => e.stopPropagation()}>
        <div className='flex items-center gap-2'>
          {role === 'admin' && (
            <div className='flex flex-row gap-2'>
              <FormModal table='parent' type='update' data={item} />

              <FormModal table='parent' type='delete' id={item.id} />
            </div>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg  font-semibold'>
          Parents Management
          <span className='text-sm font-light text-mute'>
            <br />
            Parents and guardian information
          </span>
        </h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-card'>
              <FilterIcon className='p-1' />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-card'>
              <SortAscIcon className='p-1' />
            </button>

            {role === 'admin' && (
              <div className=''>
                <FormModal table='parent' type='create' />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default ParentListPage
