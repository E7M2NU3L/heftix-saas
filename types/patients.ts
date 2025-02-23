import { z } from "zod";
import { createPatientsSchema } from "~/schemas/patients";

export type Patient = {
    id: string;
    name: string;
    age: number;
    gender: string;
    diagnosis: string;
    admissionDate: string;
}
  
export type Document = {
    id: string;
    patientId: string;
    type: 'report' | 'prescription' | 'document' | 'log';
    title: string;
    content: string;
    date: string;
}

export type createPatientTypes = z.infer<typeof createPatientsSchema>;