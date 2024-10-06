import { ArrowBigRight, MoveRight } from 'lucide-react'
import React from 'react'
import container from '../../assets/images/Container.png'
const Section_one = () => {
    return (
        <div className='pt-[176px] md:px-default-lr flex flex-col gap-[64px]'>
            <div className='md:h-[312px] h-[402px]  pl-[32px] pr-[32px] items-center justify-center'>
                <div className='w-full h-full flex flex-col gap-[48px]'>
                    <div className='flex flex-col gap-[16px] justify-center items-center'>
                        <div className='text-[#6941C6] border-[1px] items-center border-[#E9D7FE] pl-[4px] pr-[10px] py-[4px]  w-[355px] rounded-[16px] gap-[12px] flex p-[4px] bg-[#F9F5FF]'>
                            <div className='rounded-[16px] bg-white py-[2px] text-sm px-[10px]'>New Features</div>
                            <p className='text-sm flex items-center justify-center gap-[4px]'>Check out the team Dashboard
                                <MoveRight className='w-[16px] h-[16px]' /></p>
                        </div>
                        <h1 className='md:text-5xl text-4xl font-semibold text-center'>Beautiful analytics to grow smarter</h1>
                        <p className='text-[#475467] md:text-xl text-md font-normal md:w-[768px] w-[343px] text-center'>
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                        </p>
                    </div>
                    <div className='flex md:flex-row flex-col justify-center gap-[12px]'>
                        <button className='py-[16px] px-[28px] border-[1px] border-[#D0D5DD] rounded-[8px]'>
                            Demo
                        </button>
                        <button className='bg-[#7F56D9] text-white py-[16px] px-[28px] rounded-[8px]'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex md:h-[560px] p-4 items-start overflow-hidden'>
                <img
                    className='border-[8px] border-black rounded-[12px] object-top'
                    src={`https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5SBg5-2xTpSBE-rJCr9ZYRucEK50JvJ55-tAKzZbxX9SnO-b57UJj6KDmzaZisKA4N~4BMUlupTLJqEftQ6BKeIznFmli3DsNyqR2aqQuOzwDrF1rmegRC0M0r9o2USygOsN49gx~1z~5F~ikKoRtv30aEFsv-WCugFebGpdehUeeg5jNRgJxfv6Cu~SZNb68F8FDHyhRWMh8F7DmQ2qIMTdGP8yMSLZdXRcRkGdfuAeQQPx-ayswOcMkz22wq2pmzBY5JbnWU6MP4o9XPJ-WKc5hRPv2RzYUwuHBAcWrt3WPbFpa3d7R1BsUG~7psqZd1iTit-MWHR8pHQjr6ARQ__`}
                    alt=""
                />
            </div>

        </div>
    )
}

export default Section_one