import React, { useState, useEffect } from 'react';
import desk from '../../assets/images/Container.png';
import phone from '../../assets/images/iPhone 12 Pro mockup.png';
import Featuresdata from '../../assets/logos/features/featureData';
import { MoveRight } from 'lucide-react';

const FeatureTwo = () => {
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
        <div className="md:p-default-lr md-py-[96px] px-[16px] flex flex-col gap-[64px]">
            <div className='flex flex-col gap-[20px] items-center justify-center text-center'>
                <div className='flex flex-col gap-[12px] items-center justify-center'>
                    <h1 className='text-[#6941C6] font-semibold'>Features</h1>
                    <h1 className='text-[#101828] text-3xl font-semibold'>
                        Cutting-edge features for advanced analytics
                    </h1>
                </div>
                <div className='text-[#475467] font-medium text-xl text-center'>
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className=" flex relative md:items-center items-start justify-center md:h-[558px] h-[360px] md:overflow-visible overflow-hidden ">
                    {/* Mobile Image (Always visible) */}
                    <img src={phone} className='md:absolute -left-20 -bottom-20' alt="Phone Mockup" />
                    {/* <div className="md:absolute flex z-20 bottom-0 left-1/2 transform -translate-x-1/2 md:left-auto md:-bottom-20">
                    </div> */}

                    {/* Desktop Image (Visible only on medium screens and above) */}
                    {width > 750 ? (
                        <img className='h-full border-[4px] rounded-[10px] border-[#101828]' src={`https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5SBg5-2xTpSBE-rJCr9ZYRucEK50JvJ55-tAKzZbxX9SnO-b57UJj6KDmzaZisKA4N~4BMUlupTLJqEftQ6BKeIznFmli3DsNyqR2aqQuOzwDrF1rmegRC0M0r9o2USygOsN49gx~1z~5F~ikKoRtv30aEFsv-WCugFebGpdehUeeg5jNRgJxfv6Cu~SZNb68F8FDHyhRWMh8F7DmQ2qIMTdGP8yMSLZdXRcRkGdfuAeQQPx-ayswOcMkz22wq2pmzBY5JbnWU6MP4o9XPJ-WKc5hRPv2RzYUwuHBAcWrt3WPbFpa3d7R1BsUG~7psqZd1iTit-MWHR8pHQjr6ARQ__`} alt="Desk Mockup" />
                    ) : null}
                </div>
            </div>
            <div className='grid md:grid-cols-3 md:mt-12 grid-cols-1 gap-[40px]'>
                {
                    Featuresdata && Featuresdata.map((data, index) => (
                        index < 3 ? (
                            <div key={index} className='flex flex-col gap-[20px] px-[16px] justify-center items-center'>
                                <img src={data.img} className='w-[48px] h-[48px]' alt="" />
                                <div className='text-xl font-semibold text-[#101828]'>
                                    {data.heading}
                                </div>
                                <div className='text-center text-[#475467] font-normal'>
                                    {data.text}
                                </div>
                                <button className='flex gap-2 items-center justify-center text-[#6941C6] cursor-pointer'>Learn More <MoveRight/></button>
                            </div>
                        ) : null
                    ))
                }
            </div>

        </div>
    );
};

export default FeatureTwo;
