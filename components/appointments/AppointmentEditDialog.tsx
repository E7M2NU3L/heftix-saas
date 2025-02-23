'use client'

import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { format, parse, addMinutes } from 'date-fns'
import type { Appointment } from '@/types/appointment'

const editAppointmentSchema = z.object({
  patientId: z.string({
    required_error: "Please select a patient",
  }),
  startTime: z.string({
    required_error: "Please select a start time",
  }),
  duration: z.string({
    required_error: "Please select appointment duration",
  }),
  isRecurring: z.boolean().default(false),
  recurringDays: z.string().optional(),
})

interface AppointmentEditDialogProps {
  appointment: Appointment
  onUpdateAppointment: (appointment: Appointment) => void
  appointments: Appointment[]
  mockPatients: Array<{ id: string; name: string }>
}

export function AppointmentEditDialog({ 
  appointment, 
  onUpdateAppointment, 
  appointments,
  mockPatients 
}: AppointmentEditDialogProps) {
  const [open, setOpen] = useState(false)
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([])

  const startDate = new Date(appointment.startTime)
  const endDate = new Date(appointment.endTime)
  const duration = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60))

  const form = useForm<z.infer<typeof editAppointmentSchema>>({
    resolver: zodResolver(editAppointmentSchema),
    defaultValues: {
      patientId: appointment.patientId,
      startTime: format(startDate, 'HH:mm'),
      duration: duration.toString(),
      isRecurring: appointment.isRecurring,
      recurringDays: appointment.recurringDays?.toString(),
    },
  })

  // Generate time slots for the selected date
  const generateTimeSlots = () => {
    const slots: string[] = []
    const bookedTimes = appointments
      .filter(apt => 
        apt.id !== appointment.id && // Exclude current appointment
        format(new Date(apt.startTime), 'yyyy-MM-dd') === format(startDate, 'yyyy-MM-dd')
      )
      .map(apt => ({
        start: format(new Date(apt.startTime), 'HH:mm'),
        end: format(new Date(apt.endTime), 'HH:mm')
      }))

    for (let i = 9; i <= 17; i++) {
      for (let j = 0; j < 60; j += 30) {
        const time = `${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`
        const isBooked = bookedTimes.some(({ start, end }) => time >= start && time < end)
        if (!isBooked) {
          slots.push(time)
        }
      }
    }
    setAvailableTimeSlots(slots)
  }

  const onSubmit = (data: z.infer<typeof editAppointmentSchema>) => {
    const start = parse(data.startTime, 'HH:mm', startDate)
    const end = addMinutes(start, parseInt(data.duration))

    const updatedAppointment: Appointment = {
      ...appointment,
      patientId: data.patientId,
      patientName: mockPatients.find(p => p.id === data.patientId)?.name ?? '',
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      isRecurring: data.isRecurring,
      recurringDays: data.isRecurring ? parseInt(data.recurringDays!) : undefined,
    }

    onUpdateAppointment(updatedAppointment)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" onClick={generateTimeSlots}>
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Appointment</DialogTitle>
          <DialogDescription>
            Make changes to the appointment scheduled for {format(startDate, 'MMMM dd, yyyy')}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="patientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a patient" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {mockPatients.map(patient => (
                        <SelectItem key={patient.id} value={patient.id}>
                          {patient.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Time</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select start time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableTimeSlots.map(time => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isRecurring"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Recurring Appointment</FormLabel>
                </FormItem>
              )}
            />

            {form.watch("isRecurring") && (
              <FormField
                control={form.control}
                name="recurringDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repeat every</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="7">Weekly</SelectItem>
                        <SelectItem value="14">Bi-weekly</SelectItem>
                        <SelectItem value="30">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
} 