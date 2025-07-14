import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

      {/* menu-items */}
      <div className="hidden text-gray-400 md:space-x-6 md:flex md:py-4 md:ml-10">
        <a href="#" className='hover:text-gray-600' >Home</a>
        <a href="#" className='hover:text-gray-600'>About</a>
        <a href="#" className='hover:text-gray-600'>Contact</a>
        <a href="#" className='hover:text-gray-600'>Blog</a>
        <a href="#" className='hover:text-gray-600'>Careers</a>
      </div>
      
      <div className="hidden md:flex ">
      <button 
      type="submit"
      className=" bg-green-400 rounded-full px-8 text-[15px]
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