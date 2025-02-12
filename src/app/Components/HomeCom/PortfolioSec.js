"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import PortfolioCom from '../SmallCom/PortfolioCom';

const PortfolioSec = () => {
    const data=[
        {
            id:1,
            heading:'Modi Metals',
            img:require("../../../../public/Images/clientImg/modimetal.PNG"),
            link:''
        },
        {
            id:2,
            heading:'Maruti Steel Alloys',
            img:require("../../../../public/Images/clientImg/marutisteel.PNG"),
            link:''
        },
        {
            id:3,
            heading:'Rajesh Alloys',
            img:require("../../../../public/Images/clientImg/rajeshalloys.PNG"),
            link:''
        }, {
            id:4,
            heading:'Shree Ram alloys Metal',
            img:require("../../../../public/Images/clientImg/shreeram.PNG"),
            link:''
        },
        {
            id:5,
            heading:'Khushi Metal & Alloys',
            img:require("../../../../public/Images/clientImg/khushimetal.PNG"),
            link:''
        },
        {
            id:6,
            heading:'MatoShree Metal & Alloys',
            img:require("../../../../public/Images/clientImg/matoshreemetal.PNG"),
            link:''
        },

    ]
    const controls = useAnimation();
    const { observe, inView } = useInView({
      threshold: [0.2],
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  return (
    <motion.div 
    ref={observe}
      initial='hidden'
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 },
        },
        hidden: { opacity: 0, y: 30 },
      }}
    className='w-full bg-white dark:bg-[#060B2B] px-[4%] py-[5%]'>
    <div className='flex justify-between'>
    <div className=''>
    <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// LATEST PORTFOLIO"}</h3>
    
    <h1 class="title whitespace-nowrap relative text-headingClg dark:text-white text-[30px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap">Our Latest Case  <span  className='flex gap-3 relative'> <br className=' block md:hidden'/>  <UnderlineHeading text={"Studies"} top={"40px"}/>
    
    </span>

    </h1>
    </div>
    <div className='md:flex items-center gap-[20px] hidden'>
    <Image src={require("../../../../public/Images/icons/portfolio5-icon.png")} alt="images icon" />
    <div className=''>
    <h1 className='text-[38px] font-bold font-Roboto text-headingClg dark:text-white'>15 +</h1>
    <h4 className=' text-headingClg dark:text-textClr text-[16px]'>Project Completed</h4>
    </div>
    </div>
    </div>
    <PortfolioCom  />
    </motion.div>
  )
}

export default PortfolioSec