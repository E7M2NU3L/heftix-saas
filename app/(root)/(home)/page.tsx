import React from 'react'
import CTA from '@/components/root/cta'
import FAQ from '@/components/root/faq'
import FeatureList from '@/components/root/feature-list'
import Features from '@/components/root/features'
import Hero from '@/components/root/hero'
import { More } from '@/components/root/more'
import Overview from '@/components/root/overview'
import { Testimonials } from '@/components/root/testimonials'
import { TrustedCompanies } from '@/components/root/trusted-companies'

const Home = () => {
  return (
    <div className='relative min-h-screen px-4 md:px-0'>
        <Hero />
        <More />
        <TrustedCompanies />
        <Features />
        <Overview />
        <FeatureList />
        <Testimonials />
        <FAQ />
        <CTA />
    </div>
  )
}

export default Home
