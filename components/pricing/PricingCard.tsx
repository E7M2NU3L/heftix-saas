import { Check, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatPrice } from '@/utils/formatPrice'
import { MagicCard } from '../ui/magic-card'
import { BorderBeam } from '../ui/border-beam'
import { cn } from '@/lib/utils'
import AnimatedGradientText from '../ui/animated-gradient-text'
import ShimmerButton from '../ui/shimmer-button'

interface PricingPlan {
  name: string
  price: number
  description: string
  features: string[]
}

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card className={cn(plan.name === "Professional Plan" && "scale-105", 'relative')}>
      <MagicCard className="flex flex-col" gradientColor='#D9D9D955'>
        <CardHeader className='text-center relative'>
          {plan.name !== "Professional Plan" && <CardTitle>{plan.name}</CardTitle>}
          <div className="flex items-start text-left w-full">
            {plan.name === "Professional Plan" && (
              <AnimatedGradientText>
                🎉
                <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  {plan.name}
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            )}
          </div>
          <CardDescription>{plan.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 flex-grow">
          <p className="text-3xl font-bold">{formatPrice(plan.price)}<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <ShimmerButton className='w-full text-xs font-medium rounded-md h-8 py-2'>Get Started</ShimmerButton>
        </CardFooter>
      </MagicCard>

      {plan.name === "Professional Plan" && <BorderBeam size={250} duration={12} delay={9} />}
    </Card>
  )
}

