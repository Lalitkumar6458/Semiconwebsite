import Image from 'next/image'
import React from 'react'
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import ProggressCom from '../SmallCom/ProggressCom'

import { FiArrowUpRight } from "react-icons/fi";
const AboutCom = () => {
  return (
    <div className='w-full  bg-[#060B2B] px-[4%] py-[5%]'>
    <div className='grid grid-cols-1 md:grid-cols-2'>
    <div className=''>
    <img alt='about us' src={"https://urnothemes.com/solute/wp-content/uploads/2023/07/about-us5.png"}/>
    </div>
    <div className=''>

    <div className=''>
<h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// About Us"}</h3>

<h1 class="title whitespace-nowrap relative text-white text-[30px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap">Trusted By Worldwide  <span  className='flex gap-3 relative'> <br className=' block md:hidden'/>  <UnderlineHeading text={"Clients"} top={"48px"}/>

</span>
<span className='text-white text-[35px] leading-[35px]'>for the Best Services</span>
</h1>
</div>
<p className='text-[#a0a5b9]'>
Unlock the power of innovation with our web and app development solutions. From cutting-edge websites to dynamic mobile applications, we turn your ideas into digital realities. Elevate your online presence with our expert development services – where creativity meets functionality.
</p>
<ProggressCom text="Development" percentage={90} />
<ProggressCom text="UI/UX Design" percentage={70} />
<ProggressCom text="IT Consulting" percentage={60} />

<div class="button-set mt-[40px]">
<a class="hero-btn1 flex items-center gap-3 text-white" href="">
More About    <FiArrowUpRight />                     
</a>
</div>
<div>
  
    </div>
    </div>

    

    </div>
    </div>
  )
}

export default AboutCom