import { Button } from "@/components/ui/button"
import { PricingCard } from "./PricingCard"
import { FAQ } from "./FAQ"
import ShimmerButton from "../ui/shimmer-button"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter Plan",
    price: 29,
    description: "For Individual Practitioners",
    features: [
      "Manage up to 50 clients",
      "Appointment scheduling and reminders",
      "Basic client reports and analytics",
      "Secure data storage",
      "Email support"
    ]
  },
  {
    name: "Professional Plan",
    price: 79,
    description: "For Growing Practices",
    features: [
      "Manage unlimited clients",
      "Advanced reports with AI insights",
      "Integrated telehealth and chat",
      "Payment processing and billing tools",
      "Priority email and chat support"
    ]
  },
  {
    name: "Enterprise Plan",
    price: 199,
    description: "For Clinics and Hospitals",
    features: [
      "Multi-user access (up to 10 team members)",
      "Custom workflows and branding",
      "Advanced data analytics and trends",
      "Compliance tools for HIPAA/GDPR",
      "Dedicated account manager and 24/7 support"
    ]
  }
]

export function HeftixPricing() {
  return (
    <div className="container mx-auto p-4">
      <main className="mb-8 flex flex-col gap-2 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Pricing <span className="underline text-purple-600">Plans</span></h1>
      <p className="text-sm leading-tight tracking-tight text-muted-foreground font-light">Choose the best pricing plan tailored for your business architecture</p>
      </main>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8"><span className="text-purple-600">F</span>requently <span className="text-green-500">A</span>sked <span className="text-blue-500">Q</span>uestions</h2>
        <FAQ />
      </div>
      
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
    </div>
  )
}

