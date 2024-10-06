import React from 'react';
import logo0 from '../../assets/logos/company-logo/logo.png';
import logo1 from '../../assets/logos/company-logo/logo-1.png';
import logo2 from '../../assets/logos/company-logo/logo-2.png';
import logo3 from '../../assets/logos/company-logo/logo-3.png';
import logo4 from '../../assets/logos/company-logo/logo-4.png';
import logo5 from '../../assets/logos/company-logo/logo-5.png';

const logoMap = {
    'logo.png': logo0,
    'logo-1.png': logo1,
    'logo-2.png': logo2,
    'logo-3.png': logo3,
    'logo-4.png': logo4,
    'logo-5.png': logo5,
};

const SocialProof = () => {
    return (
        <div className='h-auto p-default-lr'>
            <div className='flex flex-col gap-[32px]'>
                <div className='text-center text-[#475467]'>
                    Join 4,000+ companies already growing.
                </div>
                <div className='xl:flex grid grid-cols-2 md:gap-4 gap-[32px] justify-between items-center'>
                    {
                        Object.keys(logoMap).map((key, index) => (
                            <img
                                key={index}
                                src={logoMap[key]}
                                alt={`Company logo ${index}`}
                                className='w-full h-full object-scale-down'
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SocialProof;
