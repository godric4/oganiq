import Link from 'next/link'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-screen flex'>
      {/* LEFT */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-primary p-4 overflow-y-auto'>
        <Link
          href='/'
          className='flex items-center justify-center lg:justify-start gap-2'
        >
          <span className='hidden lg:block font-bold'>Oganiq</span>
        </Link>
      </div>
      {/* RIGHT */}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-foreground  overflow-scroll flex flex-col'>
        {children}
      </div>
    </div>
  )
}
