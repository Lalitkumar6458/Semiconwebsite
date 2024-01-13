import Image from 'next/image'
import React from 'react'
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import { IoGlobeOutline } from "react-icons/io5";
import { FaHandHoldingUsd,FaBalanceScale ,FaPuzzlePiece,FaLightbulb   } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiArrowUpRight } from 'react-icons/fi';
import ComButton from '../SmallCom/ComButton';
const WhyChooseSec = () => {
    const data = [
        {
            id: 1,
            heading: "Expertise and Innovation",
            text: "Expertise-driven development: Our seasoned team excels in innovative solutions, ensuring cutting-edge website and app development",
            icon: <FaLightbulb />
        },
        {
            id: 2,
            heading: "Tailored Solutions for Your Needs",
            text: "Tailored solutions for your uniqueness: From sleek websites to feature-rich apps, we customize development to align seamlessly with your goals.",
            icon: <FaPuzzlePiece />
        },
        {
            id: 3,
            heading: "Affordable Excellence",
            text: "Affordable excellence is our promise. We deliver high-quality website and app development, ensuring value for your investment without breaking the bank",
            icon: <FaBalanceScale />
        },
    ]
    return (
        <div className='w-full bg-white dark:bg-[#060B2B] px-[4%] py-[5%]'>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div className=''>
                    <div className=''>
                        <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// REASON FOR CHOOSE US"}</h3>

                        <h1 class="title whitespace-nowrap relative text-headingClg dark:text-white text-[30px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[50px] z-[1] flex gap-3 flex-wrap">{"We're the Best Digital"} <span className='flex gap-3 relative'> <br className=' block md:hidden' />  <UnderlineHeading text={"Solution"} top={"48px"} />

                        </span>
                            <span className='text-white text-[35px] leading-[35px]'>Provider Company</span>
                        </h1>
                    </div>

                    <div className=''>
                        {
                            data.map((item,index) => {
                                return <div key={index} className='flex dark:text-white text-headingClg mt-6 group'>
                                    <div className=' relative w-[100px]'>
                                        <div className='p-[18px] bg-cardBorder group-hover:bg-bgClr transition-all duration-700 group-hover:text-white  mb-5 rounded-[5px] mr-[30px] dark:bg-iconBg flex items-center justify-center text-[30px] text-lighBlue'>
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div className=''>
                                        <div className=' text-[22px] leading-[21px] font-semibold'>
                                            {item.heading}
                                        </div>
                                        <div className=' dark:text-gray-500 text-headingClg leading-[26px] mt-4'>
                                            {item.text}
                                        </div>

                                    </div>
                                </div>
                            })
                        }
                    </div>

                    <div className='mt-[40px]'>
                    <ComButton heading={"All Services"} link={'/services'}/>
                    </div>

                </div>
                <div className=''>
                    <Image src={require("../../../../public/Images/choose-us5.png")} />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseSec