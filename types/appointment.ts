export interface Appointment {
  id: string
  patientId: string
  patientName: string
  startTime: string
  endTime: string
  isRecurring: boolean
  recurringDays?: number
}

