import { Button } from "@/components/ui/button"
import AnimatedGridPattern from "../ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { RainbowButton } from "../magicui/rainbow-button"
import HeroVideoDialog from "../ui/hero-video-dialog"
import { AnimatedTextShiny } from "../text-variants/animated-text"
import SparklesText from "../ui/sparkles-text"

export default function Hero() {
  return (
      <section className="py-20 relative px-4 sm:px-6 lg:px-8  max-w-7xl mx-auto">
      <div className="container grid grid-cols-1 gap-12 mx-auto text-center">
        <section>
          <AnimatedTextShiny text="Introducting Heftix"  />
          <SparklesText text="Streamline Your Psychiatric Practice" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 tracking-tight" />
          <p className="text-lg tracking-tight leading-tight text-muted-foreground mb-10 max-w-2xl mx-auto">
          Heftix is the all-in-one platform designed specifically for psychiatrists, enhancing client management and simplifying administrative tasks. Experience the future of mental health care with our secure, efficient, and user-friendly tools.
          </p>
          <main className="flex flex-row gap-4 items-center justify-center">
            <Button variant={"outline"} size={"sm"} asChild>
              <Link href={"/features"}>
                Learn More
              </Link>
            </Button>
            <RainbowButton className="bg-primary">
              Sign Up
            </RainbowButton>
          </main>
        </section>

        <section className="h-full w-full bg-gradient-to-b from-transparent to-white relative">
          <HeroVideoDialog
            className="block h-full w-full"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </section>
      </div>

      <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full skew-y-12 z-[-1] overflow-hidden",
          )}
        />
    </section>
  )
}

