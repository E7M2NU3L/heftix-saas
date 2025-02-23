import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { Button } from '../ui/button'
import { RainbowButton } from '../ui/rainbow-button'

const Automations = () => {
  return (
    <div className='grid min-h-[70vh] grid-cols-1 md:grid-cols-2 place-content-center'>
        <section className='space-y-4 mt-6'>
            <Badge variant={"outline"}>
                Effortless
            </Badge>
            <h1 className='text-3xl font-semibold tracking-tight text-foreground'>
            Unlock Insights with AI-Powered Analytics
            </h1>
            <p className='text-lg tracking-tight leading-tight text-muted-foreground'>
            Leverage AI-powered insights to unlock actionable data that improves patient outcomes and boosts practice performance. Heftix analyzes patient reports to uncover trends and provide progress metrics, enabling informed decision-making. Enhance care delivery with detailed analytics and intuitive dashboards.
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
        <section className='w-full h-full relative'>
             <Image src={"https://cdn.dribbble.com/userupload/16170766/file/original-b0b5a9ce212a3d45b732927fa8409c3e.png?resize=752x&vertical=center"} alt='feature-1' width={700} height={700} className='object-contain' />   
        </section>
    </div>
  )
}

export default Automations