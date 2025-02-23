"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowUpIcon, AlertCircle, Bell } from 'lucide-react'
import {  Line, LineChart, ResponsiveContainer } from "recharts"
import { BorderBeam } from "../ui/border-beam"
import { AreaChartOverview } from "./area-chart"
import { PieChartOverview } from "./pie-chart-overview"
import { BarChartOverview } from "./barchart-overview"

const appointmentData = [
  { date: "Mon", confirmed: 5, pending: 3, missed: 1 },
  { date: "Tue", confirmed: 7, pending: 2, missed: 0 },
  { date: "Wed", confirmed: 6, pending: 4, missed: 2 },
  { date: "Thu", confirmed: 8, pending: 3, missed: 1 },
  { date: "Fri", confirmed: 9, pending: 2, missed: 0 },
  { date: "Sat", confirmed: 4, pending: 1, missed: 0 },
  { date: "Sun", confirmed: 3, pending: 1, missed: 0 },
]

{/*
const patientInsightsData = [
  { category: "High Priority", value: 30 },
  { category: "Medium Priority", value: 50 },
  { category: "Low Priority", value: 20 },
]

const revenueData = [
  { name: "Paid", value: 60 },
  { name: "Pending", value: 30 },
  { name: "Overdue", value: 10 },
]
*/}

const notifications = [
  { id: 1, message: "John Doe has an upcoming appointment tomorrow.", type: "info" },
  { id: 2, message: "Invoice #12345 is overdue.", type: "warning" },
  { id: 3, message: "New patient report ready for review.", type: "info" },
  { id: 4, message: "Appointment with Jane Smith rescheduled.", type: "info" },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <main className="flex flex-col mb-6 leading-tight gap-1 justify-start">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground ">Therapist <span className="bg-gradient-to-tr from-purple-600 via-violet-700 to-blue-600 bg-clip-text text-transparent">Dashboard</span></h1>
      <p className="text-sm font-light tracking-tight text-muted-foreground">View your insights, overall workflow and performance</p>
      </main>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="relative">
          <BorderBeam />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Appointments</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 urgent</p>
            <div className="h-[40px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={appointmentData}>
                  <Line type="monotone" dataKey="pending" stroke="#8884d8" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="relative">
        <BorderBeam />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <ArrowUpIcon className="inline mr-1" />
              Up 10% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="relative">
        <BorderBeam />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Invoice Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,234</div>
            <p className="text-xs text-muted-foreground">Current month revenue</p>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">75% paid</p>
          </CardContent>
        </Card>

        <Card className="relative">
        <BorderBeam />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Report Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 / 50</div>
            <p className="text-xs text-muted-foreground">Completed / Total</p>
            <p className="text-xs text-red-500 mt-1">
              <AlertCircle className="inline mr-1 h-3 w-3" />
              3 critical reports flagged
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <AreaChartOverview />
      <PieChartOverview />
      <BarChartOverview />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            {notifications.map((notification) => (
              <Alert key={notification.id} className="mb-2">
                <Bell className="h-4 w-4" />
                <AlertTitle>{notification.type === "warning" ? "Warning" : "Info"}</AlertTitle>
                <AlertDescription>{notification.message}</AlertDescription>
              </Alert>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

