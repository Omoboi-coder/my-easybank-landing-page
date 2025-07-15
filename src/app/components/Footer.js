import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section id='footer'>
        {/* flex container */}
        <div className='flex flex-col bg-gray-800 mt-15 px-20 mx-auto md:h-[12rem] md:mt-25 md:flex-row'>
            {/* footer 1 */}
            <div className=' flex-col space-y-6 items-center text-center md:space-y-13 md:items-start md:w-1/4'>
             <Image 
                  src="/images/logo-light.svg"
                  alt="white logo"
                  width={170}
                  height={170}
                  className="block mt-12 ml-12 md:ml-0 "
                  />

                {/* logo container*/}
                <div className='flex space-x-4 text-center ml-13 md:ml-0 md:text-start md:px-2'>
                    {/* logo 1 */}
                <div className='w-5'>
                  <Image 
                  src="/images/icon-facebook.svg"
                  alt='facebook logo'
                  width={40}
                  height={40}
                  className=''
                  />
                  </div>
                    {/* logo 2 */}
                <div className='w-5'>
                  <Image 
                  src="/images/icon-youtube.svg"
                  alt='facebook logo'
                  width={40}
                  height={40}
                  className=''
                  />
                  </div>
                    {/* logo 3 */}
                <div className='w-5'>
                  <Image 
                  src="/images/icon-twitter.svg"
                  alt='facebook logo'
                  width={40}
                  height={40}
                  className=''
                  />
                  </div>
                    {/* logo 4 */}
                <div className='w-5'>
                  <Image 
                  src="/images/icon-pinterest.svg"
                  alt='facebook logo'
                  width={40}
                  height={40}
                  className=''
                  />
                  </div>
                    {/* logo 5 */}
                <div className='w-5'>
                  <Image 
                  src="/images/icon-instagram.svg"
                  alt='facebook logo'
                  width={40}
                  height={40}
                  className=''
                  />
                  </div>
                  </div>

            </div>
            {/* footer 2 */}
            <div className='flex flex-col md:space-x-30 md:flex-row md:w-1/3'>
                <div className='text-[16px] text-gray-300 text-center mt-4 md:text-start md:flex
                 md:text-[15px] md:mt-13'>
                <ul className=' space-y-2 md:space-y-4'>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                </div>
            
                <div className='text-[16px] text-gray-300 text-center md:flex md:text-start md:text-[15px] md:mt-13'>
                <ul className=' space-y-2 md:space-y-4'>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Private Policy</li>
               </ul>
                </div>

              </div>

              {/* footer 3 */}
              <div className='flex flex-col mt-6 md:mt-12 md:w-1/3 md:ml-30'>
                 <div className="text-center md:text-end md:ml-25">
                 <button 
                type="submit"
                className=" bg-green-400/60 hover:bg-green-500/50 cursor-pointer rounded-full px-9 text-[15px]
                 text-white py-3"
                 >
                 Request Invite
                </button>
                </div>

                <div className=" text-center mt-4 mb-15 text-gray-400
                md:ml-25 md:text-end md:mt-6 md:mb-6">
                 &copy; Digitalbank. All Rights Reserved
                </div>
              </div>
        </div>
    </section>
  )
}

export default Footer