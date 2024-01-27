
"use client"
import Image from 'next/image'
// import React, { useEffect } from 'react'
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect } from 'react';
import ComButton from '../SmallCom/ComButton';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from "framer-motion";
const HeroSec = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      };

    return (
        <div className='w-full h-screen bg-white dark:bg-blueDark  px-[4%] relative heroSection' >
        <div className=' absolute top-0 left-0 right-0 w-full h-full opacity-[0.2]'>
        <div className='particle-area' id='/'>
  
  
      </div>    
            <Image src={require("../../../../public/Images/pattern-bg-1.jpg")} className='w-full h-full object-cover' />
        </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center h-full relative'>
    
            <motion.div
            className='w-full h-full flex items-center justify-center mt-[105px]'
            initial='initial'
            animate='animate'
            variants={fadeInUp}
          >
            <div className=''>
              <div className=''>
                <div class='content'>
                  <motion.h3
                    class='subtitle text-[11px] md:text-[14px] font-semibold text-lighBlue uppercase'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2,duration:0.7 }}
                  >
                    {"// Transforming Dreams into Digital Reality"}
                  </motion.h3>
      
                  <motion.h1
                    class='title whitespace-nowrap relative dark:text-white text-[#060922] text-[35px] leading-[35px] md:text-[56px] font-bold md:leading-[56px] mb-[20px] z-[1]'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4,duration:0.7 }}
                  >
                    Best IT Solutions And <br />
                    <span className='flex gap-3 relative'>
                      Great <UnderlineHeading text={'Business'} top={'51px'} />
                    </span>
                  </motion.h1>
      
                  <motion.h5
                    class='description dark:text-[#a0a5b9] text-[#060922] mb-[36px]'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6,duration:0.7 }}
                  >
                    Revolutionize your business with{' '}
                    <span className=' text-lighBlue font-Oswald font-semibold'>
                      SemiCon
                    </span>
                    . Seamlessly integrate innovation, explore limitless possibilities,
                    and embark on a transformative digital journey
                  </motion.h5>
      
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8,duration:0.7 }}
                  >
                    <ComButton heading={'Get Started'} link={'/services'} />
                  </motion.div>
                </div>
                <div class='single-image md:hidden flex'>
                <motion.div initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1,duration:0.7 }} className=''>
                <Image
                  src={require('../../././../../public/Images/illustration-1.png')}
                />
                </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
                <div className=''>
                <motion.div initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1,duration:0.7 }} class="single-image md:flex hidden">
                <Image  src={require("../../././../../public/Images/illustration-1.png")} />
            </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroSec