import React, { useEffect, useState } from 'react'
import logo from '../../assets/logos/Content.png'
import hamburger from '../../assets/logos/hamburger.png'
const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setWidth]);
    return (
        <div className='h-[80px] z-50 fixed w-full bg-white md:px-default-lr px-[16px] border-2 border-[#F2F4F7]  flex items-center' >
            <div className='w-full flex justify-between'>
                <div className='flex gap-[40px]'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={logo} className='h-[32px] w-[32px]' alt="" />
                        <h1 className='text-xl font-semibold'>
                            Untitiled UI
                        </h1>
                    </div>
                    {
                        width && width > 800 ? (
                            <div className='flex gap-[32px] text-[#475467] font-semibold items-center'>
                                <div className='cursor-pointer'>Home</div>
                                <div className='cursor-pointer'>Products</div>
                                <div className='cursor-pointer'>Resources</div>
                                <div className='cursor-pointer'>Pricing</div>
                            </div>
                        ) : null
                    }
                </div>
                <div className=''>
                    {
                        width && width >800 ?(
                            <img className='w-[40px] rounded-full h-[40px]' src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ozCWcJyiy~xoZmxmMH7Z3V5YvDS6EpCMuzNDf1aa42QkAQSi1zhXNW1io9Y7BpTbgrz11RVtpc-p4TEBgwp2kF6JU1yRDX63vWV9kWRGKEiB-XHPjprXpSjqINGhQhoTO0fNTbaKlbt0LsHUYrYcOG1bG6Nyf7TudcstGkMH9~L3j-ziqsphp-xLC34-b9QpLKO6oLWCBnm3L-mCmCUihJGehvCuf7v9bhqAPXAHPvPGhna054rBA1M-oC5oPfGH9VXrPJydzpYwlJdLsy3dLow8VG1c3Um6cRis9T6fxepwNlNeUt8nsvzQHr9kF8fVFMOyq7oWQEUj3JLyOtjGEw__" alt="" />
                        ) : (
                            <img className='w-[24px] rounded-full h-[24px] cursor-pointer' src={hamburger} />
                            
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Header