import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import ShimmerButton from '../ui/shimmer-button'

const CTA = () => {
  return (
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
  )
}

export default CTA