// app/parents/[id]/page.tsx
'use client'

import { useState } from 'react'
import { User, Phone, Mail, MapPin, Users, Heart, Home } from 'lucide-react'

export default function ParentPage() {
  const [activeTab, setActiveTab] = useState('profile')

  const parent = {
    id: 'PRT-2045',
    name: 'Mrs. Chinyere Okafor',
    gender: 'Female',
    occupation: 'Civil Servant',
    email: 'chinyere.okafor@schoolportal.ng',
    phone: '+234 806 271 4910',
    address: '23, Bode Thomas Street, Surulere, Lagos',
    maritalStatus: 'Married',
    spouse: 'Mr. Emeka Okafor',
    emergencyContact: '+234 809 334 2205',
    relationshipToStudent: 'Mother',
    students: [
      { name: 'Okafor Kelechi', class: 'JSS2', section: 'Blue House' },
      { name: 'Okafor Chisom', class: 'Primary 6', section: 'Red House' },
    ],
    hobbies: ['Cooking', 'Reading', 'Community Service'],
    occupationDetails: {
      employer: 'Lagos State Civil Service',
      position: 'Administrative Officer',
      yearsOfService: '12 years',
    },
  }

  const sections = [
    { id: 'profile', label: 'Profile Info' },
    { id: 'contact', label: 'Contact Info' },
    { id: 'family', label: 'Family & Students' },
    { id: 'extra', label: 'Additional Info' },
  ]

  return (
    <div className='p-6 bg-background min-h-screen text-foreground'>
      {/* Header */}
      <div className='card border-b border-border mb-6'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div>
            <h1 className='text-2xl font-semibold text-primary'>
              {parent.name}
            </h1>
            <p className='text-muted-foreground'>Parent ID: {parent.id}</p>
            <p className='text-accent mt-1'>
              Relationship: {parent.relationshipToStudent}
            </p>
          </div>
          <button className='btn-accent hover:opacity-90'>Edit Profile</button>
        </div>
      </div>

      {/* Tabs */}
      <div className='flex gap-3 mb-6 flex-wrap'>
        {sections.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='card'>
        {activeTab === 'profile' && (
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-primary flex items-center gap-2'>
              <User className='w-5 h-5 text-accent' /> Personal Information
            </h2>
            <div className='grid md:grid-cols-2 gap-3'>
              <p>
                <strong>Full Name:</strong> {parent.name}
              </p>
              <p>
                <strong>Gender:</strong> {parent.gender}
              </p>
              <p>
                <strong>Occupation:</strong> {parent.occupation}
              </p>
              <p>
                <strong>Marital Status:</strong> {parent.maritalStatus}
              </p>
              <p>
                <strong>Spouse:</strong> {parent.spouse}
              </p>
            </div>
            <div className='mt-3'>
              <h3 className='font-semibold text-accent'>Occupation Details:</h3>
              <p>
                <strong>Employer:</strong> {parent.occupationDetails.employer}
              </p>
              <p>
                <strong>Position:</strong> {parent.occupationDetails.position}
              </p>
              <p>
                <strong>Years of Service:</strong>{' '}
                {parent.occupationDetails.yearsOfService}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-primary flex items-center gap-2'>
              <Mail className='w-5 h-5 text-accent' /> Contact Information
            </h2>
            <div className='grid md:grid-cols-2 gap-3'>
              <p className='flex items-center gap-2'>
                <Phone className='w-4 h-4' /> {parent.phone}
              </p>
              <p className='flex items-center gap-2'>
                <Mail className='w-4 h-4' /> {parent.email}
              </p>
              <p className='flex items-center gap-2'>
                <MapPin className='w-4 h-4' /> {parent.address}
              </p>
              <p className='flex items-center gap-2'>
                <Heart className='w-4 h-4' /> Emergency:{' '}
                {parent.emergencyContact}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'family' && (
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-primary flex items-center gap-2'>
              <Users className='w-5 h-5 text-accent' /> Family & Students
            </h2>
            <div>
              <strong>Children:</strong>
              <ul className='list-disc pl-6 mt-2'>
                {parent.students.map((student) => (
                  <li key={student.name}>
                    {student.name} — {student.class} ({student.section})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'extra' && (
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-primary flex items-center gap-2'>
              <Home className='w-5 h-5 text-accent' /> Additional Information
            </h2>
            <p>
              <strong>Hobbies:</strong> {parent.hobbies.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
