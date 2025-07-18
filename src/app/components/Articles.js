import React from 'react'

const Articles = () => {
  return (
    <section id="articles">
        {/* flex container */}
        <div className='flex flex-col gap-8 mx-auto pl-0 md:px-20 md:flex md:gap-6'>
            {/* Heading */}
            <div className='block text-center mt-20 md:text-start'>
                <h2 className='text-4xl items-center text-gray-700 md:items-start md:text-[40px]'>
                    Latest Articles
                </h2>
            </div>
           
            {/* Article container */}
            <div className='flex flex-col items-center gap-2 md:flex-row md:gap-6 md:items-start'>
                {/* Article item 1 */}
                <div className='flex flex-col items-start bg-white shadow-xs mx-5 space-y-2 mt-4 md:mt-8 md:pl-0 md:mx-0 md:w-[140rem]'>
                    <img src="/images/image-currency.jpg" 
                    alt="Currency"
                    width={50}
                    height={50}
                    className='w-100 h-60 md:w-80 md:h-50 rounded-sm'
                    />
                    <h4>
                        <span className='text-gray-400 text-[10px] pl-5'>By Claire Robinson</span>
                    </h4>
                    <h3 className='text-[22px] pl-5 font-light text-gray-600 md:text-[16px] md:max-w-[12rem]'>Receive money in any currency with no fees</h3>
                    <p className='text-gray-400 pl-5 pb-6 text-[15px] max-w-[18.5rem] md:text-[13px] md:max-w-[14.2rem]'>
                        The world is getting smaller and we’re becoming more mobile. So why should you be 
                         forced to only receive money in a single …
                    </p>
                </div>

                {/* Article item 2 */}
                <div className='flex flex-col items-start mx-5 bg-white shadow-xs pl-0 mt-3 space-y-2 md:mt-8 md:pl-0 md:mx-0 md:w-[140rem]'>
                    <img src="/images/image-restaurant.jpg" 
                    alt="Restaurant"
                    width={50}
                    height={50}
                    className='w-100 h-50 md:w-80 md:h-50 rounded-sm'
                    />
                    <h4>
                        <span className='text-gray-400 text-[10px] pl-5'>By Wilson Hutton</span>
                    </h4>
                    <h3 className='text-[22px] w-[15rem] pl-5 font-light text-gray-600 md:text-[16px] md:max-w-[12rem]'>Treat yourself without worrying about money</h3>
                    <p className='text-gray-400 pl-5  pb-6 text-[15px] max-w-[18rem] md:text-[13px] md:max-w-[14.2rem]'>
                       Our simple budgeting feature allows you to separate out your spending and set 
                        realistic limits each month. That means you …
                    </p>
                </div>

                {/* Article item 3 */}
                <div className='flex flex-col items-start bg-white shadow-xs mx-5 mt-3 pl-0 space-y-2 md:mt-8 md:pl-0 md:mx-0 md:w-[140rem]'>
                    <img src="/images/image-plane.jpg" 
                    alt="Plane"
                    width={50}
                    height={50}
                    className='w-100 h-50 md:w-80 md:h-50 rounded-sm'
                    />
                    <h4>
                        <span className='text-gray-400 text-[10px] pl-5'>By Wilson Hutton</span>
                    </h4>
                    <h3 className='text-[22px] font-light pl-5 max-w-[20rem] text-gray-600 md:text-[16px] md:max-w-[14rem]'>Take your Digitalbank card wherever you go</h3>
                    <p className='text-gray-400 text-[15px] pl-5 pb-6 max-w-[18.7rem] md:text-[13px] md:max-w-[13.6rem]'>
                         We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                         while you’re abroad. We’ll even …
                    </p>
                </div>
                {/* Article item 4 */}
                <div className='flex flex-col items-start bg-white shadow-xs mx-5 pl-0 mt-3 space-y-2 md:mt-8 md:pl-0 md:mx-0 md:w-[140rem]'>
                    <img src="/images/image-confetti.jpg" 
                    alt="Confetti"
                    width={50}
                    height={50}
                    className='w-100 h-50 md:w-80 md:h-50 rounded-sm'
                    />
                    <h4>
                        <span className='text-gray-400 text-[10px] pl-5'>By Claire Robinson</span>
                    </h4>
                    <h3 className='text-[22px] pl-5 font-light text-gray-600 md:text-[16px] md:max-w-[15rem]'>Our invite-only Beta accounts are now live!</h3>
                    <p className='text-gray-400 text-[15px] pl-5 pb-6 max-w-[18rem] md:text-[13px] md:max-w-[14rem]'>
                        After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                        It’s easy to request an invite through the site ...
                    </p>
                    </div>
                </div>
        </div>  
    </section>
    
  )
}

export default Articles