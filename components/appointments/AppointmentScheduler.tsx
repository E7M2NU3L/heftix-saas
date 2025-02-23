'use client'

import { useState } from 'react'
import { AppointmentForm } from './AppointmentForm'
import { AppointmentList } from './AppointmentList'
import type { Appointment } from '@/types/appointment'
import { format } from 'date-fns'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { RainbowButton } from '../ui/rainbow-button'
import { Timer } from 'lucide-react'
import { Calendar } from '../ui/calendar'

export function AppointmentScheduler() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const addAppointment = (newAppointment: Appointment) => {
    // Validate appointment doesn't overlap with existing ones
    const isOverlapping = appointments.some(apt => {
      const newStart = new Date(newAppointment.startTime)
      const newEnd = new Date(newAppointment.endTime)
      const existingStart = new Date(apt.startTime)
      const existingEnd = new Date(apt.endTime)
      
      return (
        (newStart >= existingStart && newStart < existingEnd) ||
        (newEnd > existingStart && newEnd <= existingEnd) ||
        (newStart <= existingStart && newEnd >= existingEnd)
      )
    })

    if (isOverlapping) {
      alert('This time slot overlaps with an existing appointment')
      return
    }

    setAppointments([...appointments, newAppointment])
  }

  const updateAppointment = (updatedAppointment: Appointment) => {
    setAppointments(appointments.map(apt => 
      apt.id === updatedAppointment.id ? updatedAppointment : apt
    ))
  }

  const deleteAppointment = (id: string) => {
    setAppointments(appointments.filter(apt => apt.id !== id))
  }

  const selectedDateAppointments = appointments.filter(apt => 
    format(new Date(apt.startTime), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
     <main className='flex flex-row flex-wrap gap-4 md:gap-0 justify-between'>
      <main className='flex flex-col gap-2 mb-6'>
      <h1 className="text-3xl font-semibold ">Appointment <span className='bg-gradient-to-tr from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text'>Scheduler</span></h1>
      <p className='text-sm font-light text-muted-foreground'>Manage and schedule your appointments and logs</p>
      </main>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <RainbowButton>
            <Timer className='mr-2 w-4 h-4' />
            Schedule
          </RainbowButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Schedule Appointments
            </DialogTitle>
            <DialogDescription>
              New Appointment for {format(selectedDate, 'MMMM dd, yyyy')}
            </DialogDescription>
          </DialogHeader>
          <AppointmentForm
            open={open}
            setOpen={setOpen}
            onAddAppointment={addAppointment}
            selectedDate={selectedDate}
            appointments={appointments}
          />
        </DialogContent>
      </Dialog>
     </main>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-6 col-span-1">
          <Calendar />
        </div>
        <main className='md:col-span-3'>
          <AppointmentList 
            appointments={selectedDateAppointments}
            onUpdateAppointment={updateAppointment}
            onDeleteAppointment={deleteAppointment}
          />
        </main>
      </div>
    </div>
  )
}

