import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Link from 'next/link'
import { RainbowButton } from '../ui/rainbow-button'

const Appointments = () => {
  return (
    <div className='grid min-h-[70vh] grid-cols-1 md:grid-cols-2 place-content-center'>
        <section className='w-full h-full relative'>
             <Image src={"https://cdn.dribbble.com/userupload/16170766/file/original-b0b5a9ce212a3d45b732927fa8409c3e.png?resize=752x&vertical=center"} alt='feature-1' width={700} height={700} className='object-contain' />   
        </section>
        <section className='space-y-4 mt-6'>
            <Badge variant={"outline"}>
                Effortless
            </Badge>
            <h1 className='text-3xl font-semibold tracking-tight text-foreground'>
            Streamline Your Appointment Scheduling Process
            </h1>
            <p className='text-lg tracking-tight leading-tight text-muted-foreground'>
            Our appointment scheduling feature simplifies the booking process, allowing you to manage your calendar with ease. With automated reminders and a user-friendly interface, you can reduce no-shows and enhance client satisfaction.
            </p>
            <main className='flex flex-row gap-4 items-center'>
                <Button variant={"outline"} size={"sm"} asChild>
                    <Link href={"/pricing"}>
                        View Pricing
                    </Link>
                </Button>
                <RainbowButton>
                    <Link href={"/auth/signin"}>
                        Sign Up
                    </Link>
                </RainbowButton>
            </main>
        </section>
    </div>
  )
}

export default Appointments