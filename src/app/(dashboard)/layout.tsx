import Navbar from '@/components/Navbar'
import SidebarLinks from '@/components/SidebarLinks'
import { School2Icon } from 'lucide-react'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-screen flex sidebar '>
      {/* LEFT */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-primary  overflow-y-auto'>
        <div className=' border-b-1 border-text-white'>
          <Link
            href='/'
            className='flex items-center justify-center lg:justify-start gap-1 p-4 text-card'
          >
            <School2Icon />
            <span className='hidden lg:block font-bold'>Mivara </span>
          </Link>
        </div>
        {/* Sidebar links */}
        <div className=''>
          <SidebarLinks />
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-border  overflow-scroll flex flex-col text-foreground'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
