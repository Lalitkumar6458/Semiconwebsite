import React from 'react'
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

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
  return (
    <div className='w-full bg-white dark:bg-[#060B2B] px-[4%] py-[5%]'>
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
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[40px]'>
 {data.map((item)=>{
    return (<div className="h-[250px] relative overflow-hidden group shadow-cardShadow border-cardBorder" key={item.id}>
     <Image className='w-full h-full object-fill  rounded-[10px]' src={item.img}/>
    <div className=' absolute top-[251px] group-hover:top-0  transition-all duration-700 ease-in-out w-full h-full   left-0 right-0 rounded-[10px] overflow-hidden'>
    <div className='h-[80%] w-full bg-bgClr opacity-[0.7] '>
    
    </div>
    <div className='h-[20%] w-full bg-white flex items-center justify-between'>
    <h3 className='w-[80%] pl-5 font-semibold font-Roboto'>{item.heading}</h3>
    <button className='h-full bg-bgClr w-[20%] flex items-center justify-center text-white text-[18px]'><FiArrowUpRight /></button>
    </div>
    </div>
    </div>)
 })}
 </div>
    </div>
  )
}

export default PortfolioSec