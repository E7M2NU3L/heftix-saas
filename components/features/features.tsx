import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import ShimmerButton from '../ui/shimmer-button'
import HeroVideoDialog from '../ui/hero-video-dialog'
import Appointments from './appointments'
import Automations from './automations'
import { FeaturesBento } from './bento-cards'

export default function FeaturesSection() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4">
        <section className="text-center flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-gray-800"><span className='text-blue-500'>Streamline</span> Your <span className='text-purple-500 underline'>Psychiatric</span> Practice</h1>
          <p className="text-sm leading-tight tracking-tight text-gray-600 max-w-2xl mb-4 mx-auto">
            Heftix is a modern SaaS platform built for psychiatrists to enhance efficiency, 
            improve client care, and simplify practice management.
          </p>
          <main className='flex flex-row justify-center items-center gap-4'>
            <Button asChild size={"sm"} variant={"outline"}>
                <Link href={"/pricing"}>
                    View Plans
                </Link>
            </Button>
            <ShimmerButton className='text-xs font-medium rounded-md h-8 py-2'>
                <Link href={"/auth/signup"}>
                    Get Started
                </Link>
            </ShimmerButton>
          </main>
        </section>

        <FeatureCard />

        <section className="py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-800 mb-3">Only CRM Tailored for Psychiatrists</h2>
              <p className="text-lg leading-tight tracking-tight text-gray-600 mb-6">
              Heftix is the all-in-one platform designed specifically for psychiatrists, enhancing client management and simplifying administrative tasks. Experience the future of mental health care with our secure, efficient, and user-friendly tools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Centralized Management</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Efficient Scheduling</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Automated Insights</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
                <HeroVideoDialog
                    className="block"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
          </div>
        </section>
        
        <FeaturesBento />

        <Appointments />
        <Automations />

        <div className="text-center space-y-8 mb-8 flex justify-center items-center">
        <div>
          <h3 className="text-3xl tracking-tight font-semibold mb-4">Start Your <span className="text-green-500 underline">Free Trial</span> Today!</h3>
          <p className="mb-4">Experience the power of Heftix with a 14-day free trial—no credit card required.</p>
          <main className="flex flex-row gap-4 items-center justify-center">
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
      </div>
      </main>
    </div>
  )
}

function FeatureCard() {
  return (
    <div></div>
  )
}
