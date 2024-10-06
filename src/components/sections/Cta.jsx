import React from 'react'

const Cta = () => {
    return (
        <div className='md:p-default-lr px-[16px] md:py-[96px] py-[64px] bg-[#F9FAFB]'>
            <div className='flex flex-col items-center justify-center gap-[40px]'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-[#101828]'>Start your free trial</h1>
                    <h1 className='text-lg text-[#475467]'>Join over 4,000+ startups already growing with Untitled.</h1>
                </div>
                <div className='flex md:flex-row flex-col justify-center gap-[12px]'>
                    <button className='py-[16px] border-[1px] border-[#D0D5DD] px-[28px] rounded-[8px]'>
                        Learn More
                    </button>
                    <button className='bg-[#7F56D9] text-white py-[16px] px-[28px] rounded-[8px]'>
                        Get Started 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cta