'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, GraduationCap, BookOpen, Shield } from 'lucide-react'

export default function HomePage() {
  const [role, setRole] = useState('student')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/${role}`)
  }

  return (
    <div className='min-h-screen flex'>
      {/* Left Section: Advertorial */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center bg-[url('/kg.jpg')] bg-cover bg-center text-white p-10 relative">
        <div className='absolute inset-0 bg-black/50' /> {/* Overlay */}
        <div className='relative z-10 max-w-md text-center'>
          <h1 className='text-4xl font-bold mb-4'>
            Welcome to St. Godric&apos;s Academy
          </h1>
          <p className='text-lg mb-6'>
            Empowering students with knowledge, discipline, and excellence for a
            brighter tomorrow.
          </p>
          <button className='px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition'>
            Register Now
          </button>
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-[url('/library.jpg')] p-8 bg-cover bg-center relative ">
        <div className='absolute inset-0 bg-black/40' /> {/* Overlay */}
        <div className='relative z-10 w-full max-w-md bg-card/90 backdrop-blur-sm text-card-foreground rounded-2xl shadow-lg px-6  '>
          {/* Title */}
          <h1 className='text-2xl font-bold text-center mb-6'>
            Login to Portal
          </h1>
          <p className='text-sm text-muted-foreground text-center mb-8'>
            Choose your role to continue
          </p>

          {/* Role Selection */}
          <div className='grid grid-cols-1 md:grid-grid-cols-2 gap-3 mb-6'>
            <button
              type='button'
              onClick={() => setRole('student')}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition ${
                role === 'student'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <GraduationCap className='w-5 h-5' /> Student
            </button>
            <button
              type='button'
              onClick={() => setRole('teacher')}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition ${
                role === 'teacher'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <BookOpen className='w-5 h-5' /> Teacher
            </button>
            <button
              type='button'
              onClick={() => setRole('parent')}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition ${
                role === 'parent'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <User className='w-5 h-5' /> Parent
            </button>
            <button
              type='button'
              onClick={() => setRole('admin')}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition ${
                role === 'admin'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Shield className='w-5 h-5' /> Admin
            </button>
          </div>

          {/* Login Form */}
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm mb-1'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full px-3 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none'
                required
              />
            </div>

            <div>
              <label className='block text-sm mb-1'>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                className='w-full px-3 py-2 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition'
            >
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>

          {/* Footer */}
          <p className='text-xs text-muted-foreground text-center mt-6'>
            Forgot your password?{' '}
            <a href='#' className='text-primary hover:underline'>
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
