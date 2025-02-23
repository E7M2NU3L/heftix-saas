import Image from 'next/image'
import React from 'react';
import {Facebook, Youtube, Twitter, Instagram} from 'lucide-react'
import Link from 'next/link';
import LinkPreview from '@/components/ui/link-preview';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
                <main className='flex items-center gap-2'>
                    <Image src={"/logo.png"} width={42} height={42} alt='logo' className='object-contain' />
                    <h1 className='text-3xl font-semibold tracking-tight text-foreground'>Hef<span className='text-green-500 underline'>tix</span></h1>
                </main>

                <p className="mt-4 max-w-xs text-gray-500">
                    Streamline appointments, client data, and AI-powered insights—all in one secure, intuitive platform for psychiatrists.
                </p>

                <ul className="mt-8 flex gap-6">
                    <Link href={"/"}>
                        <Facebook />
                    </Link>

                    <Link href={"/"}>
                        <Youtube />
                    </Link>

                    <Link href={"/"}>
                        <Instagram />
                    </Link>

                    <Link href={"/"}>
                        <Twitter />
                    </Link>
                </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                <div>
                <p className="font-medium text-gray-900">Products</p>

                <ul className="mt-6 space-y-4 text-sm">
                    <li>
                    <LinkPreview url="https://volquix.vercel.app" className="text-gray-700 transition hover:opacity-75">AI Tutor </LinkPreview>
                    </li>

                    <li>
                    <LinkPreview url="https://zyberquip.vercel.app" className="text-gray-700 transition hover:opacity-75">Biomed Automation Tool</LinkPreview>
                    </li>

                    <li>
                    <LinkPreview url="https://flynte.vercel.app" className="text-gray-700 transition hover:opacity-75">Family Finance Tracker</LinkPreview>
                    </li>

                    <li>
                    <LinkPreview url="https://xcontour.vercel.app" className="text-gray-700 transition hover:opacity-75">Contract Management System</LinkPreview>
                    </li>

                    <li>
                    <LinkPreview url="https://etracks.vercel.app" className="text-gray-700 transition hover:opacity-75">Employee Management System</LinkPreview>
                    </li>
                </ul>
                </div>

                <div>
                <p className="font-medium text-gray-900">Support</p>

                <ul className="mt-6 space-y-4 text-sm">
                    <li>
                    <Link href="/contact" className="text-gray-700 transition hover:opacity-75"> Contact </Link>
                    </li>

                    <li>
                    <Link href="/terms-of-service" className="text-gray-700 transition hover:opacity-75"> Terms of Service </Link>
                    </li>

                    <li>
                    <Link href="/privacy-policy" className="text-gray-700 transition hover:opacity-75"> Privacy Policy </Link>
                    </li>
                </ul>
                </div>

                <div>
                <p className="font-medium text-gray-900">Quick Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                    <li>
                    <Link href="/pricing" className="text-gray-700 transition hover:opacity-75"> Pricing </Link>
                    </li>

                    <li>
                    <Link href="/blogs" className="text-gray-700 transition hover:opacity-75"> Blogs </Link>
                    </li>

                    <li>
                    <Link href="/features" className="text-gray-700 transition hover:opacity-75"> Features </Link>
                    </li>
                </ul>
                </div>

                <div>
                <p className="font-medium text-gray-900">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                    <li>
                    <Link href="/shipping-and-delivery" className="text-gray-700 transition hover:opacity-75">Shipping & Delivery</Link>
                    </li>

                    <li>
                    <Link href="/cancellation-and-refund" className="text-gray-700 transition hover:opacity-75"> Returns Policy </Link>
                    </li>

                    <li>
                    <Link href="/cancellation-and-refund" className="text-gray-700 transition hover:opacity-75"> Refund Policy </Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>

            <p className="text-xs text-gray-500">&copy; {currentYear}. Company Name. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer