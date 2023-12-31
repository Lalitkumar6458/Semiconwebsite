import Image from 'next/image'
// import React, { useEffect } from 'react'
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import { FiArrowUpRight } from "react-icons/fi";


const HeroSec = () => {

    return (
        <div className='w-full h-screen  bg-blueDark px-[4%]' >
       
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center h-full'>
                <div className='w-full h-full flex items-center justify-center mt-[105px]'>
                    <div className=''>
                        <div class="content">
                            <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// Transforming Dreams into Digital Reality"}</h3>

                            <h1 class="title whitespace-nowrap relative text-white text-[35px] leading-[35px] md:text-[56px] font-bold md:leading-[56px] mb-[20px] z-[1]">Best IT Solutions And  <br/><span  className='flex gap-3 relative'> Great <UnderlineHeading text={"Business"} top={"51px"}/></span>
                            </h1>

                            <h5 class="description text-[#a0a5b9] mb-[36px]" >Revolutionize your business with <span className=' text-lighBlue font-Oswald font-semibold'>SemiCon</span>. Seamlessly integrate innovation, explore limitless possibilities, and embark on a transformative digital journey</h5>

                            <div class="button-set">
                            <a class="hero-btn1 flex items-center gap-3 text-white" href="">
                            Get Started      <FiArrowUpRight />                     
                        </a>
                            </div>
                        </div>
                        <div class="single-image md:hidden flex">
                        <Image  src={require("../../././../../public/Images/heroImg.png")} />
                    </div>
                    </div>
                </div>
                <div className=''>
                <div class="single-image md:flex hidden">
                <Image  src={require("../../././../../public/Images/heroImg.png")} />
            </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSec