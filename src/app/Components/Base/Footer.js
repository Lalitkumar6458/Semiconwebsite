import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";
import { MdKeyboardArrowRight, MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {

    const QuickLink = [
        {
            name: 'Home',
            link: ""
        },
        {
            name: 'About Us',
            link: ""
        },
        {
            name: 'Blog Page',
            link: ""
        },
        {
            name: ' Terms & Conditions',
            link: ""
        },
        {
            name: 'Privacy Policy',
            link: ""
        },

    ]
    const Community = [
        {
            name: 'Help Center',
            link: ""
        },
        {
            name: 'Customers',
            link: ""
        },
        {
            name: 'Downloads',
            link: ""
        },
        {
            name: 'Newsletter',
            link: ""
        },
        {
            name: 'Privacy Policy',
            link: ""
        },
        {
            name: 'Career',
            link: ''
        }

    ]
    return (
        <div className=' relative pt-[100px]'>
            <Image className=' absolute top-0 w-full h-full object-cover' src={require("../../../../public/Images/footer-dark-bg.jpg")} />
            <div className='grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-4 z-40 relative px-[4%] md:gap-3'>
                <div className='text-white'>
                    <img src='https://urnothemes.com/solute/wp-content/uploads/2023/01/logo.png' className='mb-[40px] ' />
                    <p className='mb-3'>Lesires to obtain pain of itself because pain, but occasionally circumstances.

                    </p>
                    <div className='flex items-center gap-2 mt-[30px]'>
                        <div className='hover:scale-125 transition-all duration-700  cursor-pointer bg-iconBg rounded-full flex items-center justify-center p-2 text-[18px]'>
                            <FaFacebookF />
                        </div>
                        <div className='hover:scale-125 transition-all duration-700  cursor-pointer bg-iconBg rounded-full flex items-center justify-center p-2 text-[18px]'>
                            <FaInstagram />
                        </div>
                        <div className='hover:scale-125 transition-all duration-700  cursor-pointer bg-iconBg rounded-full flex items-center justify-center p-2 text-[18px]'>
                            <FaLinkedinIn />
                        </div>
                        <div className='hover:scale-125 transition-all duration-700  cursor-pointer bg-iconBg rounded-full flex items-center justify-center p-2 text-[18px]'>
                            <FaTwitter />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-white text-[20px] font-Roboto font-semibold'>
                        Quick Links
                    </h3>
                    <ul className='mt-[40px] text-[#A0A5B9]'>
                        {
                            QuickLink.map((item,index) => {
                                return <li key={index} className=' leading-[40px]'><Link href={item.link} className='flex items-center gap-2 hover:text-white'><MdKeyboardArrowRight />{item.name}
                                </Link></li>
                            })
                        }

                    </ul>
                </div>
                <div className=''>
                    <h3 className='text-white text-[20px] font-Roboto font-semibold'>
                        Community
                    </h3>
                    <ul className='mt-[40px] text-[#A0A5B9]'>
                        {
                            Community.map((item,index) => {
                                return <li key={index} className=' leading-[40px]'><Link href={item.link} className='flex items-center gap-2 hover:text-white'><MdKeyboardArrowRight />{item.name}
                                </Link></li>
                            })
                        }

                    </ul>
                </div>
                <div className='text-[#A0A5B9]'>
                    <h3 className='text-white text-[20px] font-Roboto font-semibold'>
                        Contact
                    </h3>
                    <p className='mt-[40px] mb-[20px]'>88 Broklyn Street, 600 New
                        York, USA</p>
                    <div className='flex items-center gap-2 leading-[40px] hover:text-white'>
                        <FaGlobe className='  text-lighBlue' />  www.yourweb.com
                    </div>
                    <div className='flex items-center gap-2 leading-[40px] hover:text-white cursor-pointer'>
                        <MdEmail className='  text-lighBlue' /> semiconinfotech@gmail.com
                    </div>
                    <div className='flex items-center gap-2 leading-[40px] hover:text-white cursor-pointer'>
                        <FaPhone className='  text-lighBlue' />  9326875077
                    </div>
                </div>
            </div>
            <div className='px-[4%] mt-3'>
            <div className='h-[1px] w-full bg-[#A0A5B9] relative'>
            
            </div>
            </div>
            <div className='h-[100px] w-full flex items-center justify-center relative px-[4%]'>
            <div className='text-[#A0A5B9]'>
            Copyright © 2023 semicon | Powered by Semicon
            </div>
            </div>
        </div>
    )
}

export default Footer