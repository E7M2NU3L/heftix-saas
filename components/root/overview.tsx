"use client";

import React from 'react'
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { Button } from '../ui/button';
import ShimmerButton from '../ui/shimmer-button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Badge } from '../ui/badge';

const Overview = () => {
  return (
    <div className='min-h-[70vh] grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto'>
         <main className='flex justify-center items-center'>
            <div className='p-4'>
                <Badge variant={"outline"} className='mb-2'>
                Streamlined
                </Badge>
                <h2 className='text-4xl tracking-tight font-semibold text-foreground mb-4'>Effortless Billing and Payment Tracking</h2>
                <p className='mt-2 text-gray-700 leading-tight text-sm font-light tracking-tight line-clamp-2'>
                Our billing and payment tracking feature simplifies financial management for psychiatric practices. With seamless integration, you can effortlessly monitor payments and generate invoices, ensuring a hassle-free experience.
                </p>
                <main className='flex flex-col gap-2 mt-5'>
                    <section className='flex text-sm font-medium text-foreground tracking-tight flex-row items-center gap-2'>
                        <Check className='text-green-500' />
                        <h1 className=''>Automated invoicing saves you valuable time.</h1>
                    </section>
                    <section className='flex text-sm font-medium text-foreground tracking-tight flex-row items-center gap-2'>
                        <Check className='text-green-500' />
                        <h1 className=''>Real-time payment tracking enhances cash flow management.</h1>
                    </section>
                    <section className='flex text-sm font-medium text-foreground tracking-tight flex-row items-center gap-2'>
                        <Check className='text-green-500' />
                        <h1 className=''>Secure and compliant processing protects your clients data.</h1>
                    </section>
                </main>
                <main className="flex flex-row gap-4 items-center justify-start my-10">
                    <Button variant={"outline"} size={"sm"} asChild>
                    <Link href={"/features"}>
                        Learn More
                    </Link>
                    </Button>
                    <ShimmerButton className="text-xs font-medium rounded-md h-8 py-2">
                    <Link href={"/auth/signup"}>
                        Sign Up
                    </Link>
                    </ShimmerButton>
                </main>
            </div>
        </main>
        <main className='flex justify-center items-center'>
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col p-6 overflow-hidden ",
                "",
            )}
            >
            <AnimatedList>
                {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
            </div>
        </main>
    </div>
  )
}

export default Overview;

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "Appointment Confirmed",
      description: "Your client has confirmed the scheduled appointment.",
      time: "15m ago",
      icon: "📅",
      color: "#1E86FF", // Blue for scheduling-related updates
    },
    {
      name: "Report Generated",
      description: "An automated report is ready for review.",
      time: "10m ago",
      icon: "📊",
      color: "#00C9A7", // Green for analytics and success messages
    },
    {
      name: "Payment Processed",
      description: "A new payment has been successfully processed.",
      time: "5m ago",
      icon: "💳",
      color: "#FFB800", // Yellow for financial updates
    },
    {
      name: "Data Synced",
      description: "Your data has been securely synced and stored.",
      time: "2m ago",
      icon: "🔒",
      color: "#FF3D71", // Red for security or system notifications
    },
  ];
  

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
