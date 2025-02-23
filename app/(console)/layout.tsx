"use client";

import { useSession } from 'next-auth/react';
import React from 'react'
import {AppSidebar} from '@/components/dashboard/sidebar';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
 

type Props = {
    children : React.ReactNode;
}

const DashLayout = (props : Props) => {
  const session = useSession();
  console.log(session);
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative flex-1 min-h-screen overflow-x-hidden">
        <main className="absolute bottom-1 left-1">
        <SidebarTrigger />
        </main>
        {props.children}
        <AnimatedGridPattern className='h-screen opacity-30 w-full absolute inset-0 -z-10' />
      </main>
    </SidebarProvider>
  )
}

export default DashLayout