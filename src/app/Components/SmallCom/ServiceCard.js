'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAnglesRight } from "react-icons/fa6";
const ServiceCard = ({data}) => {
  const[onHovered,setOnHovered]=useState(false)
  const onHoverHandler=(type)=>{
if(type==='enter'){
  setOnHovered(true)
}else{
  setOnHovered(false)
 
}
  }
  return (
    <article onMouseOver={()=>onHoverHandler('enter')} onMouseLeave={()=>onHoverHandler('leave')} className="overflow-hidden group rounded-lg border shadow-cardShadow border-cardBorder dark:border-borderClr dark:shadow-sm  bg-transparent relative">
{ /*   <img
      alt ={data.heading}
      src={data.img}
      className="h-56 w-full object-cover"
  />*/}
  <div className={`w-0 h-full group-hover:w-full group-hover:right-0 bg-bgClr absolute top-0  transition-all duration-700 ease-in-out ${onHovered?"w-full left-0":"w-0 right-0"}`}>
  
  </div>
    <div className="p-4 sm:p-6  relative  group-hover:text-white">
     
        <h3 className="text-[20px]  font-semibold text-headingClg dark:text-white group-hover:text-white transition-all duration-700">
         {data.heading}
        </h3>

  
      <p className="mt-2 text-headingClg group-hover:text-white dark:text-textClr  text-sm/relaxed c transition-all duration-700">
      {data.desc}
      </p>
      <div className='text-headingClg dark:text-textClr mt-2 group-hover:text-white transition-all duration-700'>
      <ul>
      {
        data?.list?.map((item,index)=>{
          return <li key={index} className='flex items-center gap-2 text-sm/relaxed mt-1'>
          <FaAnglesRight /> {item.name}
          </li>
        })
      }
      </ul>
      </div>
  {
    data.link&&    <Link href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:text-white">
    Find out more

    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
      &rarr;
    </span>
  </Link>
  }
  
    </div>
  </article>
  )
}

export default ServiceCard