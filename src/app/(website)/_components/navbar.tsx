"use client"
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LandingPageNavBar = () => {
  return (
    <div className="flex w-full justify-between items-center py-4 px-6 bg-gradient-to-b from-gray-800 to-black shadow-lg">
      {/* Logo - Left Aligned */}
      <div className="flex items-center gap-x-3">
        <Image alt="Opal logo" src="/logo.svg" width={40} height={40} />
        <span className="text-3xl font-semibold text-white">Opal</span>
      </div>

      {/* Login and Sign-Up Buttons - Right Aligned */}
      <div className="flex gap-x-4 items-center">
        <Link href="/auth/sign-in">
          <Button className="text-base px-6 py-2 rounded-full border border-transparent bg-[#7320DD] text-white hover:bg-[#5c16b1] transition-all duration-200">
            <User fill="#fff" />
            Login
          </Button>
        </Link>
        <Link href="/auth/sign-up">
          <Button className="text-base px-6 py-2 rounded-full border border-[#7320DD] text-[#7320DD] hover:bg-[#7320DD] hover:text-white transition-all duration-200">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPageNavBar
