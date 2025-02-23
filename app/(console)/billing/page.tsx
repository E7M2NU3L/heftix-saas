'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { BorderBeam } from '@/components/ui/border-beam'

// Mock data
const billingHistory = [
  { id: 1, date: '2023-05-01', amount: 29.99, status: 'Paid' },
  { id: 2, date: '2023-04-01', amount: 29.99, status: 'Paid' },
  { id: 3, date: '2023-03-01', amount: 29.99, status: 'Paid' },
]

const currentPlan = {
  name: 'Pro Plan',
  price: 29.99,
  billingCycle: 'Monthly',
  features: ['Unlimited projects', '24/7 support', 'Custom domain'],
}

const usageLogs = [
  { id: 1, date: '2023-05-15', resource: 'Bandwidth', usage: '1.2 GB' },
  { id: 2, date: '2023-05-14', resource: 'Storage', usage: '5.7 GB' },
  { id: 3, date: '2023-05-13', resource: 'Functions', usage: '10,234 invocations' },
]

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState('billing-history')

  return (
    <div className="container mx-auto p-4">
      <main className='flex flex-roww flex-wrap justify-between items-center'>
        <main className='flex flex-col gap-1 leading-tight mb-6'>
          <h1 className="text-3xl tracking-tighter bg-gradient-to-tr from-purple-700 via-violet-600 to-blue-600 font-semibold text-transparent bg-clip-text">Billing</h1>
          <p className='text-sm font-light text-muted-foregroud tracking-tight'>Manage your billing and payment logs with heftix in-app purchases</p>
        </main>
      </main>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="billing-history">Billing History</TabsTrigger>
          <TabsTrigger value="current-plan">Current Plan</TabsTrigger>
          <TabsTrigger value="usage-logs">Usage Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="billing-history">
          <Card className='relative'>
            <BorderBeam size={250} delay={9} duration={12} className='absolute' />
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your past invoices and payment status.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {billingHistory.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          {invoice.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="current-plan">
          <Card className='relative'>
            <BorderBeam size={250} delay={9} duration={12} className='absolute' />
            <CardHeader>
              <CardTitle>Current Plan: {currentPlan.name}</CardTitle>
              <CardDescription>Your current subscription and plan details.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <strong>Price:</strong> ${currentPlan.price} / {currentPlan.billingCycle}
                </div>
                <div>
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {currentPlan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <RainbowButton>Upgrade Plan</RainbowButton>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="usage-logs">
          <Card className='relative'>
            <BorderBeam size={250} delay={9} duration={12} className='absolute' />
            <CardHeader>
              <CardTitle>Usage Logs</CardTitle>
              <CardDescription>Monitor your resource usage and consumption.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Resource</TableHead>
                    <TableHead>Usage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usageLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>{log.date}</TableCell>
                      <TableCell>{log.resource}</TableCell>
                      <TableCell>{log.usage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

