import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
     <nav className="relative container bg-white shadow-xs md:min-w-[108%]">
        {/* flex container */}
    <div className="flex my-0 py-2 mx-auto justify-between items-center md:py-2 md:px-4">

      {/* navbar Logo */}
      <Image 
      src="/images/logo-dark.svg"
      alt="dark logo"
      width={170}
      height={170}
      className=" ml-8 py-4 md:ml-38 md:mt-2"
      />

      {/* menu-items */}
      <div className="hidden text-gray-400 md:space-x-6 md:flex md:py-4 md:ml-10">
        <a href="#" className='hover:text-gray-600' >Home</a>
        <a href="#" className='hover:text-gray-600'>About</a>
        <a href="#" className='hover:text-gray-600'>Contact</a>
        <a href="#" className='hover:text-gray-600'>Blog</a>
        <a href="#" className='hover:text-gray-600'>Careers</a>
      </div>
      
      <div className="hidden md:flex">
      <button 
      type="submit"
      className=" bg-green-400 rounded-full px-8 text-[15px] text-white py-3 md:mr-35"
      >
        Request Invite
      </button>
      </div>


    </div>

   </nav>
  )
}

export default Navbar