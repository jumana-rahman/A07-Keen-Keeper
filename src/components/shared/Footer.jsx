import React from 'react';
import FooterLogo from '@/assets/logo-xl.png'
import Image from 'next/image';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
    const socialLinks = [
        {
            icon: <RiInstagramFill />,
            url: "https://instagram.com"
        },
        {
            icon: <FaFacebookSquare />,
            url: "https://facebook.com"
        },
        {
            icon: <FaSquareXTwitter />,
            url: "https://x.com"
        }
    ];

    const terms = [
        {
            text: "Privacy Policy",
            path: "/policy"
        },
        {
            text: "Terms of Service",
            path: "/terms"
        },
        {
            text: "Cookies",
            path: "/cookies"
        },
        
    ];

    return (
        <div className='pt-20 pb-7 bg-[#244D3F]'>
            <div className='w-[90%] mx-auto text-center text-white'>
                <div className='flex justify-center'>
                    <Image src={FooterLogo} alt='Logo' />
                </div>

                <p className='text-[16px]/[24px] pt-2'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <div className='pt-4'>
                    <p className='text-[20px]'>Social Links</p>

                    <ul className='flex items-center justify-center mt-2 gap-2'>
                        {
                            socialLinks.map((item, index) => (
                                <Link key={index} href={item.url} target='_blank' className=' p-2.5 bg-white text-[#1F2937] rounded-full hover:bg-zinc-200'>
                                    {item.icon}
                                </Link>
                            ))
                        }
                    </ul>
                </div>

                <div className="border border-[rgba(250,250,250,0.1)] mt-5 mb-2"></div>

                <div className='text-[16px] text-[rgba(250,250,250,0.7)] block mb-2 md:flex md:mb-0 justify-between items-center'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <ul className='block mb-2 md:mb-0 md:flex items-center gap-3'>
                        {
                            terms.map((term, index) => (
                                <Link key={index} href={term.path}>
                                    {term.text}
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;