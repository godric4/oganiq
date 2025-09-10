'use client' // Needed for client-side hooks like useState and Framer Motion

import { useState } from 'react'
import { SearchIcon, X, Bell, Megaphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [imgError, setImgError] = useState(false)

  const notifications = 3
  const announcements = 5

  const userName = 'Ikeji Godric marto '
  const userRole = 'Admin'
  const userImage = ''

  // Get first two initials from username
  const initials = userName
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowMobileSearch(false)
      console.log('Searching:', (e.target as HTMLInputElement).value)
    }
  }

  return (
    <div className='relative p-4 flex items-center justify-between gap-4 border-b '>
      {/* Desktop Search Bar */}
      <div className='relative hidden md:flex w-full max-w-[50%] lg:max-w-[500px] items-center'>
        <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-foreground/80 w-5 h-5' />
        <input
          type='search'
          placeholder='Search...'
          className='w-full h-10 pl-10 pr-3 rounded-lg border border-foreground focus:ring-1 focus:ring-foreground/60 outline-none bg-accent/10 '
        />
      </div>

      {/* Mobile Search Icon and Expanding Bar */}
      <div className='md:hidden relative'>
        <button
          aria-label='Open search'
          onClick={() => setShowMobileSearch(true)}
          className='p-2 relative z-10'
        >
          <SearchIcon className='w-6 h-6 text-foreground' />
        </button>

        <AnimatePresence>
          {showMobileSearch && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '200px', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='absolute top-0 left-0 z-20 bg-white p-1 rounded-lg shadow-md flex items-center text-primary origin-left'
            >
              <SearchIcon className='ml-2 w-5 h-5 text-primary/80' />
              <input
                autoFocus
                type='search'
                placeholder='Search...'
                className='ml-2 w-full h-8 pl-1 pr-2 border border-primary rounded outline-none bg-accent/10'
                onKeyDown={handleSearchKeyDown}
              />
              <button
                aria-label='Close search'
                onClick={() => setShowMobileSearch(false)}
                className='ml-2 p-1'
              >
                <X className='w-5 h-5 text-primary' />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Section: User Icons */}
      <div className='flex items-center gap-4 pr-2'>
        {/* Notifications */}
        <button
          aria-label='View notifications'
          className='relative'
          onClick={() => console.log('Open notifications')}
        >
          <Bell className='w-6 h-6 text-foreground' />
          {notifications > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
              {notifications}
            </span>
          )}
        </button>

        {/* Announcements */}
        <button
          aria-label='View announcements'
          className='relative'
          onClick={() => console.log('Open announcements')}
        >
          <Megaphone className='w-6 h-6 text-foreground' />
          {announcements > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
              {announcements}
            </span>
          )}
        </button>

        {/* User Profile */}
        <button
          aria-label='Open user menu'
          className='flex items-center gap-2'
          onClick={() => console.log('Open user menu')}
        >
          {userImage && !imgError ? (
            <Image
              src={userImage}
              alt={userName}
              className='w-8 h-8 rounded-full border object-cover'
              width={100}
              height={100}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className='w-8 h-8 rounded-full border bg-primary text-white flex items-center justify-center font-medium'>
              {initials}
            </div>
          )}

          <div className='hidden sm:block text-sm'>
            <p className='font-medium'>{userName}</p>
            <p className='text-xs text-foreground/60'>{userRole}</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar
