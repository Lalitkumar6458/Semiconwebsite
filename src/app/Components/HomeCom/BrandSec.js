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
        id:12,
        img:require("../../../../public/Images/icons/abhinav-overseas.png")
    },
        {
          id:10,
          img:require("../../../../public/Images/icons/logo1.png")
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
        {
          id:7,
          img:require("../../../../public/Images/icons/kcLogo.webp")
      },
      {
        id:8,
        img:require("../../../../public/Images/icons/rsvLogo.webp")
    },
    {
      id:9,
      img:require("../../../../public/Images/icons/rotexMetal.webp")
  },

  {
    id:1,
    img:require("../../../../public/Images/icons/khushimetal.png")
},
  {
    id:11,
    img:require("../../../../public/Images/icons/shreemohansteel.webp")
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
          transition: { staggerChildren: 0.3, delayChildren: 0.2, duration: 0.5 },
        },
        hidden: { opacity: 0, y: 30 },
      }}
      className='w-full bg-white dark:bg-[#181d42] px-[5%] py-[6%]'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center flex-col mb-12'>
          <h3 className="subtitle text-[12px] md:text-[14px] font-semibold text-lighBlue uppercase tracking-wider">
            {"// OUR TRUSTED PARTNERS"}
          </h3>
          
          <h1 className="title text-center relative text-headingClg dark:text-white text-[24px] leading-tight md:text-[36px] font-bold md:leading-[1.2] mt-3 mb-2 z-[1]">
            {"We Partner with India's Leading Brands"}
          </h1>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
          {Data.map((item) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              key={item.id}
              className='bg-white dark:bg-[#ffffff] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-4 flex items-center justify-center group'
            >
              <Image
                alt='Brand Logo'
                className='h-[60px] w-auto object-contain transition-transform duration-300 group-hover:scale-105'
                src={item.img}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default BrandSec