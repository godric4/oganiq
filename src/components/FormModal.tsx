'use client'

import { TrashIcon, PencilIcon, PlusIcon, X } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'

// USE LAZY LOADING

// import TeacherForm from './forms/TeacherForm'
// import StudentForm from './forms/StudentForm'

const TeacherForm = dynamic(() => import('./forms/TeacherForm'), {
  loading: () => <h1>Loading...</h1>,
})
const StudentForm = dynamic(() => import('./forms/StudentForm'), {
  loading: () => <h1>Loading...</h1>,
})

const forms: {
  [key: string]: (type: 'create' | 'update', data?: any) => React.ReactElement
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
}

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | 'teacher'
    | 'student'
    | 'parent'
    | 'subject'
    | 'class'
    | 'lesson'
    | 'exam'
    | 'assignment'
    | 'result'
    | 'attendance'
    | 'event'
    | 'announcement'
  type: 'create' | 'update' | 'delete'
  data?: any
  id?: number
}) => {
  const size = type === 'create' ? 'w-8 h-8' : 'w-7 h-7'
  const bgColor =
    type === 'create'
      ? 'bg-card !text-black hover:bg-card/70 '
      : type === 'update'
      ? 'bg-blue-600 hover:bg-blue-700'
      : 'bg-red-700 hover:bg-red-800'

  const iconMap = {
    create: PlusIcon,
    update: PencilIcon,
    delete: TrashIcon,
  }

  const Icon = iconMap[type]

  const [open, setOpen] = useState(false)

  const Form = () => {
    return type === 'delete' && id ? (
      <form action='' className='p-4 flex flex-col gap-4'>
        <span className='text-center font-medium'>
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center'>
          Delete
        </button>
      </form>
    ) : type === 'create' || type === 'update' ? (
      forms[table](type, data)
    ) : (
      'Form not found!'
    )
  }

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} text-white`}
        onClick={() => setOpen(true)}
      >
        <Icon className='p-1' />
      </button>
      {open && (
        <div className='w-screen h-screen absolute left-0 top-0 bg-primary/90 bg-opacity-10 z-50 flex items-center justify-center'>
          <div className='bg-white text-black p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
            <Form />
            <div
              className='absolute top-4 right-4 cursor-pointer bg-red-700 text-white'
              onClick={() => setOpen(false)}
            >
              <X />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FormModal
