"use client"
import Image from 'next/image'
import React,{useEffect} from 'react'
import Marquee from "react-fast-marquee";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';
const BrandSec = () => {
    const controls = useAnimation();
    const { observe, inView } = useInView({
      threshold: [0.2],
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    const Data=[
        {
            id:1,
            img:require("../../../../public/Images/icons/khushimetal.png")
        },
        {
            id:2,
            img:require("../../../../public/Images/icons/logo.png")
        },
        {
            id:3,
            img:require("../../../../public/Images/icons/logo2.png")
        },
        {
            id:4,
            img:require("../../../../public/Images/icons/SRLogoNew.png")
        },
        {
            id:5,
            img:require("../../../../public/Images/icons/trlogo.png")
        },
        {
            id:6,
            img:require("../../../../public/Images/icons/logo3.png")
        },
    ]
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
    className='w-full bg-white dark:bg-[#181d42] px-[4%] py-[5%]'>
    <div className=''>
    <div className='flex items-center flex-col'>
    <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// OUR CLIENT"}</h3>
    
    <h1 class="title text-center whitespace-nowrap relative text-headingClg dark:text-white text-[18px] leading-[25px] md:text-[30px] font-bold md:leading-[40px] mb-[20px] z-[1] flex gap-3 flex-wrap">
  {"We worked with India's largest brands"}
    </h1>
    </div>
    </div>
    <div className='mt-[40px] mb-[40px]'>
    <Marquee>
    <motion.div  variants={{
        visible: { transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 } },
      }} className='flex items-center gap-3'>

    {
        Data.map((item)=>{
            return <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }} key={item.id} className='bg-white rounded-lg  p-4 last:mr-3'>
            <Image className='h-[70px] w-[250px]' src={item.img}/>
            </motion.div>
        })
    }

 
    </motion.div>
    </Marquee>
    </div>

    </motion.div>
  )
}

export default BrandSec