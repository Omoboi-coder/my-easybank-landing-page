import React from 'react'
import  Image from 'next/image'

const Hero = () => {
  return (
    <section id='Hero'>
     {/* flex container */}
    <div className='container flex flex-col-reverse gap-5 md:mx-auto md:flex-row md:gap-25'>
        {/* left-items */}
        <div className='space-y-6 mx-4 mt-6 md:mx-6 w-full  md:mt-45 md:space-y-6 md:ml-35 md:max-w-[27rem]'>
            <h1 className='text-5xl text-center text-gray-700 md:text-start md:text-[3.5rem]'>
                Next generation digital banking
            </h1>
            <div className='max-w-xl text-gray-400 text-center text-[17px] md:min-w-[29rem] md:text-start md:text-[19px]'>    
            <p>
                 Take your financial life online. Your Digitalbank account will be a one-stop-shop 
                 for spending, saving, budgeting, investing, and much more.
            </p>
            </div>
             <div className="text-center md:flex md:text-start">
            <button 
              type="submit"
              className="bg-green-400 rounded-full px-8 py-3 text-[17px] text-white md:text-[15px]">
               Request Invite
              </button>
              </div>

        </div>
        {/* right-item */}
        <div className=" relative overflow-hidden w-full min-h-[350px]
         md:min-w-[45rem] md:min-h-[800px]">
        
        <div className="absolute hidden object-cover object-left-top md:block
         md:-top-62 md:-left-[69px] md:w-[1200px] md:min-h-[1000px]">
        <Image
        src="/images/bg-intro-desktop.svg"
        alt='Background image'
        fill
        />
        </div>

        <div className='absolute z-0 top-0 left-0 w-[27rem] min-h-[400px] right-[-20px] flex object-contain
         object-left-top md:hidden'>
        <Image
        src="/images/bg-intro-mobile.svg"
        alt='Background image mobile'
        fill
        />
        </div>
        
        <div>
        <Image 
            src="/images/image-mockups.png"
            alt="Mockup phones"
            width={650}
            height={750}
            className='absolute z-10 top-[-145px] right-0 max-w-[410px] 
            md:top-[-95px] md:right-[-120px] md:min-w-[700px]'
            />
            </div>

            </div>
    </div>
    </section>
  )
}

export default Hero