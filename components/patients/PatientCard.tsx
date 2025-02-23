'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2, Edit, FileText } from 'lucide-react'
import DocumentModal from './DocumentModal'
import type { Document, Patient } from '@/types/patients'
import { mockDocuments } from '@/constants/mockData'
import PatientForm from './PatientForm'
import { BorderBeam } from '../ui/border-beam'

interface PatientCardProps {
  patient: Patient
  onUpdate: (patient: Patient) => void
  onDelete: (patientId: string) => void
}

export default function PatientCard({ patient, onUpdate, onDelete }: PatientCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [showDocuments, setShowDocuments] = useState(false)
  const [documents, setDocuments] = useState<Document[]>(
    mockDocuments.filter(d => d.patientId === patient.id)
  )

  const addDocument = (newDocument: Document) => {
    setDocuments([...documents, newDocument])
  };

  const [open, setOpen] = useState(false);

  return (
    <Card className='relative'>
      <CardHeader>
        <CardTitle className="flex justify-between items-center w-full">
          {patient.name}
          <div>
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => onDelete(patient.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <PatientForm
            open={open}
            setOpen={setOpen}
            patient={patient}
            onSubmit={(updatedPatient : Patient) => {
              onUpdate(updatedPatient)
              setIsEditing(false)
            }}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
            <p><strong>Admission Date:</strong> {patient.admissionDate}</p>
            <div className="mt-4">
              <Button onClick={() => setShowDocuments(true)} size={"sm"} variant={"outline"}>
                <FileText className="mr-2 h-4 w-4" /> View Documents
              </Button>
            </div>
          </>
        )}
      </CardContent>
      {showDocuments && (
        <DocumentModal
          documents={documents}
          onClose={() => setShowDocuments(false)}
          onAddDocument={(doc) => addDocument({ ...doc, patientId: patient.id })}
        />
      )}
      <BorderBeam size={250} duration={12} delay={9} className='absolute'/>
    </Card>
  )
}

