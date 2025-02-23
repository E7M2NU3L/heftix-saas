"use client";

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Navlinks from './nav-links';
import NavSheets from './nav-sheets';
import LogoutButton from './logout-btn';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const {data} = useSession();
    console.log(data);

    

    return (
        <div className='min-h-[10vh] flex flex-row justify-between items-center px-4'>
            <Link href={"/"} className='flex flex-row items-center gap-3'>
                <Image src={"/logo.png"} alt='logo' className='object-contain' width={36} height={36} />
                <h1 className='md:block hidden text-2xl text-foreground font-medium tracking-tighter'>
                    Hef<span className="text-green-500">tix</span>
                </h1>
            </Link>

            <main className='hidden md:block'>
                <Navlinks />
            </main>

            <main className='hidden md:flex items-center gap-3'>
                {data && data.user?.id ? (
                    <>
                        <Link href={"/overview"}>
                            <RainbowButton>
                                Track Changes
                            </RainbowButton>
                        </Link>
                        <LogoutButton />
                    </>
                ) : (
                    <>
                        <Link href={"/auth/signup"}>
                            <Button variant={"outline"} size={"sm"}>
                                Get Started
                            </Button>
                        </Link>
                        <Link href={"/auth/signin"}>
                            <RainbowButton className='bg-primary'>
                                Login
                            </RainbowButton>
                        </Link>
                    </>
                )}
            </main>

            <main className='block md:hidden'>
                <NavSheets session={data}/>
            </main>
        </div>
    )
}

export default Navbar