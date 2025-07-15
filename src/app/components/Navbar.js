"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
     <nav className="relative">
        {/* flex container */}
    <div className="flex bg-gray-100 shadow-xs my-0 py-2
     mx-auto justify-between items-center md:py-2 md:px-20">

      {/* navbar Logo */}
      <Image 
      src="/images/logo-dark.svg"
      alt="dark logo"
      width={170}
      height={170}
      className="ml-7 py-4 md:ml-0 md:mt-2"
      />

      {/* Hamburger Menu */}
      <HamburgerMenu />

        
      {/* Desktop menu-items with hover underline */}
<div className="hidden text-gray-400 md:space-x-6 md:flex md:py-4 md:ml-10">
  {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
    <Link
      key={item}
      href="#"
      className="relative group text-gray-600 font-medium"
    >
      {item}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400
       transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}
</div>

       <div className="hidden md:flex ">
            <button 
            type="submit"
            className=" bg-green-400/75 hover:bg-green-600/50 cursor-pointer rounded-full px-8 text-[15px]
               text-white py-[10px] md:mr-23"
            >
               Request Invite
            </button>
            </div> 
          </div>
   </nav>
  )
}

export default Navbar