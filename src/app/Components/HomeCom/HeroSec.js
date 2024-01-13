"use client"
import Image from 'next/image'
// import React, { useEffect } from 'react'
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect } from 'react';
import ComButton from '../SmallCom/ComButton';

const HeroSec = () => {



    return (
        <div className='w-full h-screen bg-white dark:bg-blueDark  px-[4%] relative heroSection' >
        <div className=' absolute top-0 left-0 right-0 w-full h-full opacity-[0.2]'>
        <div className='particle-area' id='/'>
  
  
      </div>    
            <Image src={require("../../../../public/Images/pattern-bg-1.jpg")} className='w-full h-full object-cover' />
        </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center h-full relative'>
    
                <div className='w-full h-full flex items-center justify-center mt-[105px]'>
                    <div className=''>
                        <div class="content">
                            <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// Transforming Dreams into Digital Reality"}</h3>

                            <h1 class="title whitespace-nowrap relative dark:text-white text-[#060922] text-[35px] leading-[35px] md:text-[56px] font-bold md:leading-[56px] mb-[20px] z-[1]">Best IT Solutions And  <br/><span  className='flex gap-3 relative'> Great <UnderlineHeading text={"Business"} top={"51px"}/></span>
                            </h1>

                            <h5 class="description dark:text-[#a0a5b9] text-[#060922] mb-[36px]" >Revolutionize your business with <span className=' text-lighBlue font-Oswald font-semibold'>SemiCon</span>. Seamlessly integrate innovation, explore limitless possibilities, and embark on a transformative digital journey</h5>

                            <ComButton heading={"Get Started"} link={'/services'}/>
                    
                        </div>
                        <div class="single-image md:hidden flex">
                        <Image  src={require("../../././../../public/Images/illustration-1.png")} />
                    </div>
                    </div>
                </div>
                <div className=''>
                <div class="single-image md:flex hidden">
                <Image  src={require("../../././../../public/Images/illustration-1.png")} />
            </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSec