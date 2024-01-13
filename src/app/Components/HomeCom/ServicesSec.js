"use client"
import React from 'react'
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import { FiArrowUpRight } from "react-icons/fi";
import ServiceCard from '../SmallCom/ServiceCard';
import { ServicesData } from '../../../../public/Constant/Data';
import { useRouter } from 'next/navigation';
import ComButton from '../SmallCom/ComButton';
const ServicesSec = () => {
       const router=useRouter()
  return (
    <div className='w-full bg-white dark:bg-[#060B2B] px-[4%] py-[5%]'>
<div className='flex items-center justify-between flex-wrap'>
<div className=''>
<h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// SERVICE WE PROVIDE"}</h3>

<h1 class="title whitespace-nowrap relative text-headingClg dark:text-white text-[35px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap">Services What We  <span  className='flex gap-3 relative'> <br className=' block md:hidden'/>  <UnderlineHeading text={"Provides"} top={"48px"}/></span>
</h1>
</div>
<div className=''>
<ComButton heading={"All Services"} link={'/services'}/>
</div>
</div>

<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-4'>
{
  ServicesData.map((item)=>{
    return <ServiceCard key={item.id} data={item}/>
  })
}

</div>
    </div>
  )
}

export default ServicesSec