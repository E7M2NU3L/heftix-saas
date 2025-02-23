"use client";

import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { people } from '@/constants/people'
import { Button } from '../ui/button'
import { RainbowButton } from '../ui/rainbow-button'
import Link from 'next/link';
import {motion} from 'framer-motion'
import { MagicCard } from '../ui/magic-card';
import { Banknote, Book, Timer } from 'lucide-react';
import { Separator } from '../ui/separator';

const features = [
  {
      title: 'Client Database',
      description: 'Organize and access all client details easily in one place, enhancing efficiency and workflow management.',
      Icon: <Banknote className="bg-violet-500/20 rounded-full text-violet-700" />
  },
  {
      title: 'Smart Scheduling',
      description: 'Manage appointments with ease, reduce no-shows, and improve scheduling with automated reminders.',
      Icon: <Timer className="bg-violet-500/20 rounded-full text-violet-700" />
  },
  {
      title: 'AI Insights',
      description: 'Utilize data-driven insights and advanced analytics to improve decision-making and optimize patient care.',
      Icon: <Book className="bg-violet-500/20 rounded-full text-violet-700" />
  },
];


const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial fade-in and move up animation
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

const FeatureList = () => {
  return (
    <div className='py-20'>
        <main className='flex flex-col gap-5 items-center py-12 justify-center w-full max-w-xl text-center mx-auto'>
            <div className='flex flex-row gap-4 items-center'>
            <div className='flex flex-row items-center justify-center'>
                <AnimatedTooltip items={people} />
            </div>
            <p className='text-lg leading-tight ml-2 tracking-tight text-muted-foreground font-medium'>trusted by <span className='text-violet-500'>500+</span> users</p>
            </div>
            <h1 className='text-4xl font-semibold tracking-tight text-foreground'>
                Revolutionize Your Psychiatric Practice Today
            </h1>
            <p className='text-sm leading-tight tracking-tight text-muted-foreground font-light'>
            Heftix offers a comprehensive suite of tools designed specifically for psychiatrists. Streamline your practice with features that enhance client management and improve patient outcomes.
            </p>
        </main>

        <main className='max-w-7xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-10 p-6">
      {features.map((feature, index) => (
        <MagicCard gradientColor='#D9D9D955' key={index}>
            <motion.div
          className="group relative flex flex-col items-center text-left overflow-hidden border border-gray-300 rounded-3xl h-[170px]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.main
            className="p-5 flex flex-col gap-3"
            whileHover={{
              y: -10,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            <main className='flex flex-row items-center justify-start gap-5'>
              {feature.Icon}
              <h3 className="text-2xl tracking-tight font-semibold text-gray-900 group-hover:scale-105 group-hover:translate-y-1 transition-all duration-300">
                {feature.title}
              </h3>
            </main>
            <Separator className="my-2" />
            <p className="text-gray-600 text-sm tracking-tight leading-tight font-light group-hover:scale-105 group-hover:translate-y-1 transition-all duration-300">
              {feature.description}
            </p>
          </motion.main>
        </motion.div>
        </MagicCard>
      ))}
    </div>
        </main>

        <main className='flex justify-center items-center gap-4 flex-row w-full my-4'>
            <Button asChild size={"sm"} variant={"outline"}>
                <Link href="/features">
                    Learn More
                </Link>
            </Button>
            <RainbowButton>
                <Link href="/auth/signin">
                    Sign In
                </Link>
            </RainbowButton>
        </main>

    </div>
  )
}

export default FeatureList;