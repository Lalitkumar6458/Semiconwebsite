import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";
const BrandSec = () => {
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
    <div className='w-full  bg-[#181d42] px-[4%] py-[5%]'>
    <div className=''>
    <div className='flex items-center flex-col'>
    <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// OUR CLIENT"}</h3>
    
    <h1 class="title text-center whitespace-nowrap relative text-white text-[18px] leading-[25px] md:text-[30px] font-bold md:leading-[40px] mb-[20px] z-[1] flex gap-3 flex-wrap">
  {"We worked with India's largest brands"}
    </h1>
    </div>
    </div>
    <div className='mt-[40px] mb-[40px]'>
    <Marquee>
    <div className='flex items-center gap-3'>

    {
        Data.map((item)=>{
            return <div key={item.id} className='bg-white rounded-lg  p-4 last:mr-3'>
            <Image className='h-[70px] w-[250px]' src={item.img}/>
            </div>
        })
    }

 
    </div>
    </Marquee>
    </div>

    </div>
  )
}

export default BrandSec