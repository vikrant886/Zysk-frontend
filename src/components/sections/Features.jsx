import React from 'react'
import Featuresdata from '../../assets/logos/features/featureData'

const Features = () => {
    return (
        <div className='w-full h-auto md:p-default-lr py-[64px] flex flex-col gap-[64px]'>
            <div className='flex flex-col gap-[20px] items-center justify-center text-center'>
                <div className='flex flex-col gap-[12px] items-center justify-center'>
                    <h1 className='text-[#6941C6] font-semibold'>Features</h1>
                    <h1 className='text-[#101828] text-3xl font-semibold'>
                        Analytics that feels like it’s from the future
                    </h1>
                </div>
                <div className='text-[#475467] font-medium text-xl'>
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-[40px]'>
                {
                    Featuresdata && Featuresdata.map((data, index) => (
                        <div className='flex flex-col gap-[20px] px-[16px] justify-center items-center'>
                            <img src={data.img} className='w-[48px] h-[48px]' alt="" />
                            <div className='text-xl font-semibold text-[#101828]'>
                                {data.heading}
                            </div>
                            <div className='text-center text-[#475467] font-normal'>
                                {data.text}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Features