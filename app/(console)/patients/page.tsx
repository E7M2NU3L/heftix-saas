import { mockPatients } from '@/constants/mockData'
import React from 'react'
import PatientList from '@/components/patients/PatientList'

const SnippetsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <PatientList initialPatients={mockPatients} />
  </div>
  )
}

export default SnippetsPage