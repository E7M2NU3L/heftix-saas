import { Document, Patient } from "@/types/patients";

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    diagnosis: 'Major Depressive Disorder',
    admissionDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    diagnosis: 'Generalized Anxiety Disorder',
    admissionDate: '2023-02-20',
  },
];

export const mockDocuments: Document[] = [
  {
    id: '1',
    patientId: '1',
    type: 'report',
    title: 'Initial Assessment',
    content: 'Patient shows signs of severe depression...',
    date: '2023-01-15',
  },
  {
    id: '2',
    patientId: '1',
    type: 'prescription',
    title: 'Antidepressant Medication',
    content: 'Prescribed 20mg Fluoxetine daily...',
    date: '2023-01-16',
  },
];

