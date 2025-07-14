import React from 'react'

const Features = () => {
  return (
    <section id="features">
    {/* flex container */}
        <div className="container flex flex-col bg-gray-100 pb-25 gap-8 mt-[60px] md:px-44 md:min-w-[107%] 
         md:flex md:mt-[-130px]">
        <div className="flex flex-col items-center mt-20 md:items-start md:mt-25 md:space-y-4">
        <h2 className="text-4xl font-light text-center text-gray-800 max-w-[25rem] md:text-start md:max-w-[40rem] md:text-[38px]">
            Why Choose Digitalbank?
            </h2>
        <p className="text-gray-400 mt-4 max-w-[24rem] text-[17px] text-center md:text-start md:max-w-[43rem] md:text-[19px]">    
            We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
            </p>
        </div>
        {/* feature container*/}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 md:mt-10">
            {/* feature item 1 */}
            <div className="flex flex-col items-center space-y-8 md:space-y-8 md:items-start">
                <img src="/images/icon-online.svg" 
                alt="Online Banking"
                width={70}
                height={70}
                
                  />
                <h3 className="mb-5 text-[25px] font-light text-gray-800 md:text-xl">
                    Online Banking
                    </h3>
                <p className="text-gray-500 text-center max-w-[22rem] md:text-start md:max-w-[30rem]">
                     Our modern web and mobile applications allow you to keep track of your finances 
                     wherever you are in the world.
                    </p>
            </div>
            {/* feature item 2 */}
            <div className="flex flex-col items-center space-y-8 md:space-y-8 md:items-start">
                <img src="/images/icon-budgeting.svg"
                 alt="Simple Budgeting"
                 width={70}
                 height={70}
                
                  />
                <h3 className="mb-5 text-[25px] font-light text-gray-800 md:text-xl">
                    Simple Budgeting
                    </h3>
                <p className="text-gray-500 text-center max-w-[22rem] md:text-start md:max-w-[30rem]">
                     See exactly where your money goes each month. Receive notifications when you’re 
                     close to hitting your limits.
                    </p>
            </div>
            {/* feature item 3 */}
            <div className="flex flex-col items-center space-y-8 md:space-y-8 md:items-start">
                <img 
                src="/images/icon-onboarding.svg" 
                alt="Fast Onboarding"
                width={70}
                height={70} 
                
                />
                <h3 className="mb-5 text-[25px] font-light text-gray-800 md:text-xl">
                    Fast Onboarding
                    </h3>
                <p className="text-gray-500 text-center max-w-[22rem] md:text-start md:max-w-[30rem]">
                    We don’t do branches. Open your account in minutes online and start taking control 
                    of your finances right away.
                    </p>
            </div>

            {/* feature item 4 */}
            <div className='flex flex-col items-center space-y-8 md:space-y-8 md:items-start'>
                <img 
                src="/images/icon-api.svg" 
                alt="Open API"
                width={70}
                height={70}
                 />
                <h3 className="mb-5 text-[25px] font-light text-gray-800 md:text-xl">
                    Open API
                    </h3>
                <p className="text-gray-500 text-center max-w-[22rem] md:text-start md:max-w-[35rem]">
                      Manage your savings, investments, pension, and much more from one account. Tracking 
                      your money has never been easier.
                     </p>   
            </div>
        </div>
    </div>
  </section>
  )
}

export default Features