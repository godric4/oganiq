'use client'
import { useRouter } from 'next/navigation'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import Link from 'next/link'
// import FormModal from '@/components/FormModal'
import { role, teachersData } from '@/lib/data'
import {
  EditIcon,
  FilterIcon,
  PlusIcon,
  ScanEye,
  SortAscIcon,
  TrashIcon,
} from 'lucide-react'

type Teacher = {
  id: number
  teacherId: string
  name: string
  email?: string
  photo: string
  phone: string
  subjects: string[]
  classes: string[]
  address: string
  status: string
}

const columns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Teacher ID',
    accessor: 'teacherId',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Subjects',
    accessor: 'subjects',
    className: 'hidden md:table-cell',
  },
  // {
  //   header: 'Classes',
  //   accessor: 'classes',
  //   className: 'hidden md:table-cell',
  // },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Status',
    accessor: 'status',
    className: 'hidden lg:table-cell',
  },
  // {
  //   header: 'Address',
  //   accessor: 'address',
  //   className: 'hidden lg:table-cell',
  // },
  {
    header: 'Actions',
    accessor: 'action',
  },
]

const TeacherListPage = () => {
  const router = useRouter()
  const renderRow = (item: Teacher) => (
    <tr
      onClick={() => router.push(`/list/teachers/${item.id}`)}
      key={item.id}
      className='border-b border-primary odd:bg-card  text-sm hover:bg-primary cursor-pointer hover:text-white'
    >
      <td className='flex items-center gap-4 p-4'>
        <Image
          src={item.photo}
          alt=''
          width={40}
          height={40}
          className='md:hidden xl:block w-10 h-10 rounded-full object-cover'
        />
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </td>

      <td className='hidden md:table-cell'>{item.teacherId}</td>
      <td className='hidden md:table-cell'>{item.subjects.join(',')}</td>
      {/* <td className='hidden md:table-cell'>{item.classes.join(',')}</td> */}
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.status}</td>
      {/* <td className='hidden md:table-cell'>{item.address}</td> */}
      <td onClick={(e) => e.stopPropagation()}>
        <div className='flex items-center gap-2'>
          <Link href={`/list/teachers/${item.id}`}>
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-yellow-200 text-black cursor-pointer hover:bg-white hover:text-red-800 '>
              <ScanEye className='p-1 ' />
            </button>
          </Link>
          {role === 'admin' && (
            <div className='flex flex-row gap-2'>
              <button className='w-7 h-7 flex items-center justify-center rounded-full  bg-blue-500 text-white cursor-pointer hover:bg-white hover:text-black'>
                <EditIcon className='p-1' />
              </button>
              {/*  */}
              <button className='w-7 h-7 flex items-center justify-center rounded-full  bg-red-800 text-white cursor-pointer hover:bg-white hover:text-red-800'>
                <TrashIcon className='p-1' />
              </button>
            </div>
            // <FormModal table='teacher' type='delete' id={item.id} />
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
          Teacher Management
          <span className='text-sm font-light text-mute'>
            <br />
            Teaching staff and faculty information
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
                <button className='w-8 h-8 flex items-center justify-center rounded-full bg-card'>
                  <PlusIcon className='p-1' />
                </button>
              </div>
              // <FormModal table="teacher" type="create"/>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </div>
  )
}

export default TeacherListPage
