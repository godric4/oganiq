'use client'

import Image from 'next/image'
import {
  Mail,
  Phone,
  CalendarDays,
  User,
  MapPin,
  BookOpen,
  HeartPulse,
  Award,
  Wallet,
  Edit,
  FileText,
} from 'lucide-react'

export default function StudentProfilePage() {
  const student = {
    photo: '/admin.jpg',
    name: 'Tunde Balogun',
    studentId: 'STU-2025-009',
    admissionNo: 'ADM-2214',
    rollNumber: '08',
    class: 'SS1',
    section: 'A',
    academicYear: '2024–2025',
    admissionDate: '2022/09/10',
    dob: '2009/06/25',
    category: 'Science',
    gender: 'Male',
    bloodGroup: 'B+',
    mobile: '08023451234',
    email: 'tunde.balogun@studentportal.com',
    religion: 'Islam',
    address: {
      current: '15 Ogunlana Drive, Surulere, Lagos',
      permanent: '23 Balogun Close, Ikorodu, Lagos State',
    },
    parent: {
      father: {
        name: 'Mr. Ibrahim Balogun',
        phone: '08037778899',
        occupation: 'Electrical Engineer',
      },
      mother: {
        name: 'Mrs. Amina Balogun',
        phone: '08055566777',
        occupation: 'Trader',
      },
      guardian: {
        name: 'Mr. Wasiu Adedeji',
        phone: '08123456789',
        relation: 'Uncle',
      },
    },
    health: {
      allergies: 'None',
      conditions: 'None',
      doctor: 'Dr. Adewale Adebayo',
      emergencyContact: 'Mrs. Amina Balogun – 08055566777',
    },
    fee: {
      status: 'Partially Paid',
      total: '₦180,000',
      paid: '₦120,000',
      balance: '₦60,000',
      lastPayment: '2025/06/20',
    },
    extracurricular: {
      clubs: ['Press Club', 'ICT Club', 'Science Society'],
      sports: ['Football', 'Athletics'],
      achievements: [
        '2nd Place – Lagos State Science Quiz (2024)',
        'Best in Mathematics – Term 1 (2025)',
      ],
    },
  }

  return (
    <main className='min-h-screen bg-background text-foreground flex justify-center items-start p-6'>
      <div className='w-full max-w-6xl rounded-2xl border border-border shadow-md overflow-hidden'>
        {/* === Header Section === */}
        <header className='flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-primary/10 border-b border-border'>
          <div className='flex items-center gap-4'>
            <div className='w-24 h-24 relative rounded-full overflow-hidden border-4 border-primary'>
              <Image
                src={student.photo}
                alt='Student Photo'
                fill
                className='object-cover'
              />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-primary'>
                {student.name}
              </h1>
              <p className='text-sm text-muted-foreground'>
                Student ID: {student.studentId} | Class: {student.class} –{' '}
                {student.section}
              </p>
              <p className='text-sm text-muted-foreground'>
                Academic Year: {student.academicYear}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-3 mt-4 md:mt-0'>
            <button className='btn-accent flex items-center gap-2'>
              <FileText size={16} /> View Results
            </button>
            <button className='btn-primary flex items-center gap-2'>
              <Edit size={16} /> Edit Info
            </button>
          </div>
        </header>

        {/* === Academic Info === */}
        <Section title='Academic Information' icon={<BookOpen size={18} />}>
          <Grid cols={3}>
            <Info label='Admission No' value={student.admissionNo} />
            <Info label='Roll Number' value={student.rollNumber} />
            <Info label='Admission Date' value={student.admissionDate} />
            <Info label='Date of Birth' value={student.dob} />
            <Info label='Category' value={student.category} />
            <Info label='Gender' value={student.gender} />
            <Info label='Blood Group' value={student.bloodGroup} />
            <Info label='Religion' value={student.religion} />
            <Info label='Email' value={student.email} />
            <Info label='Mobile' value={student.mobile} />
          </Grid>
        </Section>

        {/* === Address === */}
        <Section title='Address' icon={<MapPin size={18} />}>
          <Grid cols={2}>
            <Info label='Current Address' value={student.address.current} />
            <Info label='Permanent Address' value={student.address.permanent} />
          </Grid>
        </Section>

        {/* === Parent / Guardian === */}
        <Section title='Parent / Guardian Details' icon={<User size={18} />}>
          <Grid cols={3}>
            <Info label="Father's Name" value={student.parent.father.name} />
            <Info label="Father's Phone" value={student.parent.father.phone} />
            <Info
              label="Father's Occupation"
              value={student.parent.father.occupation}
            />
            <Info label="Mother's Name" value={student.parent.mother.name} />
            <Info label="Mother's Phone" value={student.parent.mother.phone} />
            <Info
              label="Mother's Occupation"
              value={student.parent.mother.occupation}
            />
            <Info
              label="Guardian's Name"
              value={student.parent.guardian.name}
            />
            <Info
              label="Guardian's Phone"
              value={student.parent.guardian.phone}
            />
            <Info label='Relation' value={student.parent.guardian.relation} />
          </Grid>
        </Section>

        {/* === Health & Welfare === */}
        <Section title='Health & Welfare' icon={<HeartPulse size={18} />}>
          <Grid cols={2}>
            <Info label='Allergies' value={student.health.allergies} />
            <Info
              label='Medical Conditions'
              value={student.health.conditions}
            />
            <Info label='Doctor' value={student.health.doctor} />
            <Info
              label='Emergency Contact'
              value={student.health.emergencyContact}
            />
          </Grid>
        </Section>

        {/* === Fee & Finance === */}
        <Section title='Fee & Finance' icon={<Wallet size={18} />}>
          <Grid cols={3}>
            <Info label='Fee Status' value={student.fee.status} />
            <Info label='Total Fees' value={student.fee.total} />
            <Info label='Amount Paid' value={student.fee.paid} />
            <Info label='Balance' value={student.fee.balance} />
            <Info label='Last Payment' value={student.fee.lastPayment} />
          </Grid>
        </Section>

        {/* === Extracurricular & Achievements === */}
        <Section
          title='Extracurricular & Achievements'
          icon={<Award size={18} />}
        >
          <div className='grid sm:grid-cols-3 gap-4 text-sm'>
            <div>
              <h4 className='font-semibold text-primary mb-1'>Clubs</h4>
              <ul className='list-disc ml-5 space-y-1'>
                {student.extracurricular.clubs.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-primary mb-1'>Sports</h4>
              <ul className='list-disc ml-5 space-y-1'>
                {student.extracurricular.sports.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-primary mb-1'>Achievements</h4>
              <ul className='list-disc ml-5 space-y-1'>
                {student.extracurricular.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </main>
  )
}

/* === Reusable Components === */

function Section({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className='card mt-4 mx-6 border border-border bg-card text-card-foreground'>
      <h3 className='font-semibold text-lg mb-3 flex items-center gap-2 text-primary'>
        {icon} {title}
      </h3>
      {children}
    </section>
  )
}

function Grid({ cols, children }: { cols: number; children: React.ReactNode }) {
  return (
    <div
      className={`grid gap-4 text-sm ${
        cols === 3
          ? 'sm:grid-cols-3'
          : cols === 2
          ? 'sm:grid-cols-2'
          : 'grid-cols-1'
      }`}
    >
      {children}
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className='font-semibold'>{label}:</span>{' '}
      <span className='text-foreground'>{value || '—'}</span>
    </p>
  )
}
