import { Menu } from 'lucide-react'
import type { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const NavSheets = ({session} : {session : Session | null | undefined}) => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle asChild>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <Image src={"/logo.png"} width={42} height={42} alt='logo' className='object-contain' />
                        <h1 className='text-3xl font-semibold tracking-tight text-foreground'>Hef<span className='text-green-500 underline'>tix</span></h1>
                    </Link>
                </SheetTitle>
                <SheetDescription>
                    Streamline appointments, client data, and AI-powered insights—all in one secure, intuitive platform for psychiatrists.
                </SheetDescription>
            </SheetHeader>
            <section className='my-6'>
                <ul className='list-none flex gap-3 flex-col'>
                    <li>
                        <Link href={"/pricing"}>
                            <Button variant={"ghost"} className='w-full px-3' size={"sm"}>Pricing</Button> 
                        </Link>
                    </li>
                    <li>
                        <Link href={"/features"}>
                            <Button variant={"ghost"} className='w-full px-3' size={"sm"}>Features</Button> 
                        </Link>
                    </li>
                    <li>
                        <Link href={"/blogs"}>
                            <Button variant={"ghost"} className='w-full px-3' size={"sm"}>Blogs</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            <Button variant={"ghost"} className='w-full px-3' size={"sm"}>Contact</Button>
                        </Link>
                    </li>
                </ul>
            </section>

            <main className='flex items-center justify-center gap-3'>
                {session?.user?.id ? (
                    <>
                        <Link href={"/dashboard"}>
                            <RainbowButton>
                                Track Changes
                            </RainbowButton>
                        </Link>
                        <Button variant={"destructive"} size={"sm"}>Logout</Button>
                    </>
                    ) : (
                        <>
                            <Link href={"/auth/signin"}>
                                <RainbowButton>
                                    Get Started
                                </RainbowButton>
                            </Link>
                        </>
                    )}
                </main>
        </SheetContent>
    </Sheet>
  )
}

export default NavSheets