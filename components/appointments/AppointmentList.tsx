'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { format } from 'date-fns'
import type { Appointment } from '@/types/appointment'
import { AppointmentEditDialog } from './AppointmentEditDialog'

// Mock patient data (move this to a shared location later)
const mockPatients = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Robert Johnson" },
  { id: "4", name: "Sarah Williams" },
  { id: "5", name: "Michael Brown" },
]

interface AppointmentListProps {
  appointments: Appointment[]
  onUpdateAppointment: (appointment: Appointment) => void
  onDeleteAppointment: (id: string) => void
}

export function AppointmentList({ 
  appointments, 
  onUpdateAppointment, 
  onDeleteAppointment 
}: AppointmentListProps) {
  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments scheduled for this day.</p>
      ) : (
        appointments.map((appointment) => (
          <Card key={appointment.id} className="mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-lg">{appointment.patientName}</p>
                  <p className="text-gray-600">
                    {format(new Date(appointment.startTime), 'h:mm a')} - 
                    {format(new Date(appointment.endTime), 'h:mm a')}
                  </p>
                  {appointment.isRecurring && (
                    <p className="text-sm text-gray-600">
                      Repeats every {appointment.recurringDays} days
                    </p>
                  )}
                </div>
                <div className="space-x-2">
                  <AppointmentEditDialog
                    appointment={appointment}
                    onUpdateAppointment={onUpdateAppointment}
                    appointments={appointments}
                    mockPatients={mockPatients}
                  />
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => onDeleteAppointment(appointment.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

