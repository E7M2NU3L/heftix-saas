'use client'

import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { addMinutes, format, parse } from 'date-fns'
import type { Appointment } from '@/types/appointment'
import { Loader } from 'lucide-react'

const appointmentFormSchema = z.object({
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

// Mock patient data (you'll replace this with DB data later)
const mockPatients = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Robert Johnson" },
  { id: "4", name: "Sarah Williams" },
  { id: "5", name: "Michael Brown" },
]

interface AppointmentFormProps {
  onAddAppointment: (appointment: Appointment) => void
  selectedDate: Date
  appointments: Appointment[],
  open : boolean;
  setOpen : (state : boolean) => void;
}

export function AppointmentForm({ open, setOpen,  onAddAppointment, selectedDate, appointments }: AppointmentFormProps) {
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  console.log(open);

  const form = useForm<z.infer<typeof appointmentFormSchema>>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      patientId: '',
      startTime: '09:00',
      duration: '60',
      isRecurring: false,
    },
  })

  useEffect(() => {
    // Generate available time slots
    const slots: string[] = []
    const bookedTimes = appointments
      .filter(apt => format(new Date(apt.startTime), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))
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
  }, [selectedDate, appointments])

  function onSubmit(data: z.infer<typeof appointmentFormSchema>) {
    const start = parse(data.startTime, 'HH:mm', selectedDate)
    const end = addMinutes(start, parseInt(data.duration))

    const newAppointment: Appointment = {
      id: Date.now().toString(),
      patientId: data.patientId,
      patientName: mockPatients.find(p => p.id === data.patientId)?.name ?? '',
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      isRecurring: data.isRecurring,
      recurringDays: data.isRecurring ? parseInt(data.recurringDays!) : undefined,
    }

    onAddAppointment(newAppointment)
    setOpen(false);
    form.reset()
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white rounded-lg shadow">
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

        <Button 
          type="submit" 
          size={"sm"}
          className="w-full bg-gradient-to-tr from-violet-600 via-purple-700 to-blue-600 hover:from-violet-700 hover:via-purple-600 hover:to-blue-700"
        >
          {form.formState.isSubmitting ? <>
          <Loader className='mr-2 w-4 h-4 animate-spin' /> Loading...
          </> : <>Schedule Appointment</>}
        </Button>
      </form>
    </Form>
  )
}

