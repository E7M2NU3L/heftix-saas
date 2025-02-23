"use client";

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { AppErrClient } from '@/utils/app-err'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createPatientsSchema } from '@/schemas/patients'
import type { createPatientTypes } from '@/types/patients'

const CreatePatient = () => {
    const form = useForm<createPatientTypes>({
        resolver : zodResolver(createPatientsSchema),
        defaultValues : {
            firstname : "",
            lastname : "",
            gender : "unknown",
            age : "",
            maritalStatus : "unknown",
            nationality : "",

            mobile : "",
            email : "",
            emergency : {
                fullname : "",
                relationship : "",
                contact : ""
            },
            bloodgroup : "unknown",
            allergies : [{
                allergy : ""
            }],

            medicalhistory : "",
            medications : [{
                med : ""
            }],
            surgicalHistory : "",
            familyhistory : "",
            badhabits : ""
        }
    });

    const allergiesArrayfield = useFieldArray({
        control : form.control,
        name : "allergies"
    });

    const medicationsArrayfield = useFieldArray({
        control : form.control,
        name : "medications"
    });

    async function onSubmit(values: createPatientTypes) {
        try {
            console.log(values);
        } catch (error) {
            AppErrClient(error); // Await if it returns a Promise
        } finally {
            form.reset(); // Await if reset is asynchronous
        }
    }    

  return (
    <div className='p-4'>
        <Form {...form}>
        <form  onSubmit={form.handleSubmit(onSubmit)}>
        <main className='flex flex-row min-h-[10vh] mb-4 flex-wrap gap-4 md:gap-0 justify-between items-center'>
        <main className=' flex flex-col gap-1'>
            <h1 className='text-3xl font-semibold text-foreground tracking-tight'>Create <span className='text-primary'>Patient</span></h1>
            <p className='text-sm tracking-tight leading-tight font-light text-muted-foreground'>Create a patient profile to your hospital/clinic database</p>
        </main>
        <main className='flex flex-row items-center gap-4'>
            <Button variant={"destructive"} asChild size={"sm"}>
                <Link href={"/patients"}>
                    Cancel
                </Link>
            </Button>
            <Button variant={"default"} size={"sm"} type='submit'>
                Save
            </Button>
        </main>
        </main>

        <main className='grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-flow-col-dense'>
            <Card className='md:row-span-2 border border-primary'>
                <CardHeader>
                    <CardTitle>
                        Personal Details
                    </CardTitle>
                    <CardDescription>
                        Important details to get a patient&spos;s dashboard up and running.
                    </CardDescription>

                    <CardContent className='pt-6 grid grid-cols-1  gap-2'>
                        <FormField control={form.control} name='firstname' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Firstname <span className='text-red-500 text-xs font-medium'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder='john' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name='lastname' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Lastname <span className='text-red-500 text-xs font-medium'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder='doe' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name='gender' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Gender
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="select your gender" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                                <SelectItem value="Others">Others</SelectItem>
                                <SelectItem value="unknown">unknown</SelectItem>
                                <SelectItem value="Preferred not to Say">Preferred not to Say</SelectItem>
                                </SelectContent>
                            </Select>
                            </FormItem>
                        )} />

                        <FormField control={form.control} name='age' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Age <span className='text-red-500 text-xs font-medium'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} type='text' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name='maritalStatus' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Marital status
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="select your marital status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Single">Single</SelectItem>
                                        <SelectItem value="Married">Married</SelectItem>
                                        <SelectItem value="Divorced">Divorced</SelectItem>
                                        <SelectItem value="Widowed">Widowed</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                        <SelectItem value="unknown">unknown</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />
                        
                        <FormField control={form.control} name='nationality' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Nationality
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} type='text' placeholder='Eg: America' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </CardContent>
                </CardHeader>
            </Card>

            <Card className='md:row-span-1 border border-primary'>
                <CardHeader>
                    <CardTitle>
                        Contact Information
                    </CardTitle>
                    <CardDescription>
                        Details about the patient&spos;s contacts and ways to approach them
                    </CardDescription>
                    <CardContent className='grid pt-6 grid-cols-1 gap-3'>
                    <FormField control={form.control} name='mobile' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Mobile <span className='text-red-500 text-xs font-medium'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} type='text' placeholder='xxx xxxxxxx' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name='email' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Email <span className='text-red-500 text-xs font-medium'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} type='text' placeholder='johndoe@example.com' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </CardContent>
                </CardHeader>
            </Card>

            <Card className='md:row-span-1 border border-primary'>
                <CardHeader>
                    <CardTitle>
                        Emergency Contacts
                    </CardTitle>
                    <CardDescription>
                        Details of their loved ones to contact to
                    </CardDescription>
                </CardHeader>
                <CardContent className='pt-4 grid grid-cols-1 gap-3'>
                    <FormField control={form.control} name='emergency.fullname' render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Fullname
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type='text' placeholder='jenniedoe' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name='emergency.relationship' render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Relationship
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type='text' placeholder='their relationship' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name='emergency.contact' render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                contact
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type='text' placeholder='9191929191' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </CardContent>
            </Card>

            <Card className='md:row-span-1 border border-primary'>
                <CardHeader>
                    <CardTitle>
                        Identification Details
                    </CardTitle>
                    <CardDescription>
                        need to make a clear cut understanding of patient
                    </CardDescription>
                </CardHeader>

                <CardContent className='grid-cols-1 gap-3 grid'>
                    <FormField control={form.control} name='bloodgroup' render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Blood group
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="select your Blood type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="A+ve">A+ve</SelectItem>
                                    <SelectItem value="A-ve">A-ve</SelectItem>
                                    <SelectItem value="B+ve">B+ve</SelectItem>
                                    <SelectItem value="B-ve">B-ve</SelectItem>
                                    <SelectItem value="AB+ve">AB+ve</SelectItem>
                                    <SelectItem value="AB-ve">AB-ve</SelectItem>
                                    <SelectItem value="O+ve">O+ve</SelectItem>
                                    <SelectItem value="O-ve">O-ve</SelectItem>
                                    <SelectItem value="unknown">unknown</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )} />

                    <main className='flex flex-col justify-start gap-2'>
                    <Label>
                        Allergies
                    </Label>
                    <main className='flex flex-row gap-3 w-full items-start justify-start'>
                   <main className='flex flex-col gap-2 w-full'>
                   {allergiesArrayfield.fields.map((field, index) => (
                        <div className="flex flex-row items-center gap-2" key={field.id}>
                            <Input {...form.register(`allergies.${index}.allergy`)} placeholder={`Allergy ${index + 1}`} />
                            <Button variant="destructive" size="icon" onClick={() => allergiesArrayfield.remove(index)}>
                                <Trash />
                            </Button>
                        </div>
                    ))}
                   </main>
                    <Button onClick={() => {
                        allergiesArrayfield.append({
                            allergy : ""
                        })
                        }} variant={"outline"} size={"icon"}>
                            <Plus />
                        </Button>
                    </main>
                    </main>
                </CardContent>
            </Card>

            <Card className='md:row-span-1 border border-primary'>
                <CardHeader>
                    <CardTitle>
                        Medical History
                    </CardTitle>
                    <CardDescription>
                        Details of patient&spos;s pre existing medical conditions
                    </CardDescription>
                </CardHeader>

                <CardContent className='grid grid-cols-1 gap-3'>
                    <FormField control={form.control} name='medicalhistory' render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Medical History
                            </FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder='explain the medical history of the patient' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <main className='flex flex-col justify-start gap-2'>
                        <Label>
                            Medications
                        </Label>
                        <main className='flex flex-row gap-3 w-full items-start justify-start'>
                    <main className='flex flex-col gap-2 w-full'>
                        {medicationsArrayfield.fields.map((field, index) => (
                            <div className="flex flex-row items-center gap-2" key={field.id}>
                                <Input {...form.register(`medications.${index}.med`)} placeholder={`Medication ${index + 1}`} />
                                <Button variant="destructive" size="icon" onClick={() => medicationsArrayfield.remove(index)}>
                                    <Trash />
                                </Button>
                            </div>
                        ))}
                    </main>
                        <Button onClick={() => {
                            medicationsArrayfield.append({
                                med : ""
                            })
                            }} variant={"outline"} size={"icon"}>
                                <Plus />
                            </Button>
                        </main>
                    </main>

                    <FormField control={form.control} name='surgicalHistory' render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Surgical History
                            </FormLabel>
                            <FormControl>
                                <Input {...field} placeholder='Eg: Heart Surgery' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <FormField control={form.control} name='familyhistory' render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Family History
                            </FormLabel>
                            <FormControl>
                                <Input {...field} placeholder='Eg: cancer genetics' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <FormField control={form.control} name='badhabits' render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Bad habits
                            </FormLabel>
                            <FormControl>
                                <Input {...field} placeholder='Eg: Alcohol addict' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </CardContent>
            </Card>
            </main>
            </form>
        </Form>
    </div>
  )
}

export default CreatePatient