'use client'

import { useState } from 'react'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MagicCard } from '../ui/magic-card'
import { BorderBeam } from '../ui/border-beam'
import { RainbowButton } from '../ui/rainbow-button'

export default function HelpAndSupportPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold tracking-tight mb-8 text-center">Help & <span className='text-violet-500 underline'>Support</span></h1>
      <Card className="mb-12 relative">
        <CardHeader>
          <CardTitle>Send Us a Message</CardTitle>
          <CardDescription>Have a specific question or concern? Send us a message and we&spos;ll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <RainbowButton className='w-full'>Submit</RainbowButton>
          </form>
        </CardContent>
        <BorderBeam size={250} duration={12} delay={9} />
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
        <MagicCard gradientColor='#dcfce7'>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>We&spos;re here to help. Reach out to us through any of these channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>aemmanuel685210@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>+91 7397336625</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-muted-foreground" />
              <span>Live Chat (Available 24/7)</span>
            </div>
          </CardContent>
          </MagicCard>
        </Card>

        <Card className='relative'>
          <MagicCard gradientColor='#dcfce7' className='w-full inset-0'>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions about Heftix.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is Heftix HIPAA compliant?</AccordionTrigger>
                <AccordionContent>
                  Yes, Heftix is fully HIPAA compliant. We employ industry-standard encryption and security measures to protect all patient data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I set up telehealth sessions?</AccordionTrigger>
                <AccordionContent>
                  Telehealth sessions can be easily set up through the Appointments module. Simply select &spos;Telehealth&spos; as the appointment type, and our system will generate a secure link for your session.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize the AI-generated insights?</AccordionTrigger>
                <AccordionContent>
                  You can customize the AI insights in the Settings menu. You can select which types of insights you&spos;d like to receive and adjust the frequency of reports.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          </MagicCard>
        </Card>
      </div>
    </div>
  )
}

