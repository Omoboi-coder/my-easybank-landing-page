"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HamburgerMenu = () => {

      const [menuOpen, setMenuOpen] = useState(false)
      const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <>
     {/* Hamburger Icon */}
        <div className="md:hidden mr-6 z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <Image src="/images/icon-close.svg" alt="Close" width={24} height={24} />
            ) : (
              <Image src="/images/icon-hamburger.svg" alt="Menu" width={24} height={24} />
            )}
          </button>
          {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 mx-auto w-[90%] bg-white 
        text-center shadow-sm rounded-sm z-40 md:hidden">
          <div className="flex flex-col space-y-4 py-6 shadow-2xs text-gray-700 text-xl font-medium">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
          </div>
      </div>
      )}
   </div>
   </>
  )
}

export default HamburgerMenu