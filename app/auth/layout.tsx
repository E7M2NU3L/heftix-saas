import React from 'react'
import Navbar from '@/components/navbar/navbar'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'

type Props = {
    children : React.ReactNode
}

const AuthLayout = (props : Props) => {
  return (
    <div className='relative h-screen overflow-hidden'>
        <Navbar />
        {props.children}

        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full skew-y-12 z-[-1]",
          )}
        />
    </div>
  )
}

export default AuthLayout