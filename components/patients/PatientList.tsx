'use client'

import { useState } from 'react'
import PatientCard from './PatientCard'
import { PlusCircle } from 'lucide-react'
import { Patient } from '@/types/patients'
import { RainbowButton } from '../ui/rainbow-button'
import Link from 'next/link'

interface PatientListProps {
  initialPatients: Patient[]
}

export default function PatientList({ initialPatients }: PatientListProps) {
  const [patients, setPatients] = useState<Patient[]>(initialPatients)

  const addPatient = (newPatient: Patient) => {
    setPatients([...patients, newPatient])
  };

  console.log(addPatient);

  const updatePatient = (updatedPatient: Patient) => {
    setPatients(patients.map(p => p.id === updatedPatient.id ? updatedPatient : p))
  }

  const deletePatient = (patientId: string) => {
    setPatients(patients.filter(p => p.id !== patientId))
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <main className='flex flex-col gap-1'>
        <h2 className="text-3xl tracking-tight text-foreground font-semibold">Patient <span className='bg-gradient-to-tr from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent'>List</span></h2>
        <p className='text-sm font-light text-muted-foreground tracking-tight'>Create and manage patients in your hospital to view insights</p>
        </main>
        <Link href={"/create-patient"}>
          <RainbowButton>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Patient
          </RainbowButton>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map(patient => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onUpdate={updatePatient}
            onDelete={deletePatient}
          />
        ))}
      </div>
    </div>
  )
}

