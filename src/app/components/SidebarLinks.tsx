'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '../lib/data'
import { Cog, LogOut } from 'lucide-react'

const SidebarLinks = () => {
  const pathname = usePathname()

  const secondaryLinks = [
    { label: 'Settings', route: '/settings', icon: Cog },
    { label: 'Logout', route: '/logout', icon: LogOut },
  ]

  const getLinkClasses = (isActive: boolean) =>
    `flex gap-2 items-center rounded px-2 py-2 transition-colors duration-200 
     ${isActive ? 'bg-accent text-white' : 'text-accent'} 
     hover:bg-accent hover:text-white`

  const isLinkActive = (route: string) =>
    pathname === route || pathname.startsWith(route + '/')

  return (
    <div className='font-medium'>
      {/* Primary Links */}
      <ul className='p-4 border-b border-text-secondary'>
        {sidebarLinks.map(({ label, route, icon: Icon }) => {
          const isActive = isLinkActive(route)
          return (
            <Link href={route} key={label} className={getLinkClasses(isActive)}>
              <Icon className='w-6 h-6 lg:w-5 lg:h-5' />
              <span className='hidden lg:block'>{label}</span>
            </Link>
          )
        })}
      </ul>

      {/* Secondary Links */}
      <ul className='mt-2 p-4'>
        {secondaryLinks.map(({ label, route, icon: Icon }) => {
          const isActive = isLinkActive(route)
          return (
            <Link href={route} key={label} className={getLinkClasses(isActive)}>
              <Icon className='w-6 h-6 lg:w-5 lg:h-5' />
              <span className='hidden lg:block'>{label}</span>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default SidebarLinks
