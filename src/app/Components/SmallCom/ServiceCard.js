import Link from 'next/link'
import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";
const ServiceCard = ({data}) => {
  return (
    <article className="overflow-hidden rounded-lg border border-borderClr  bg-transparent shadow-sm">
    <img
      alt ={data.heading}
      src={data.img}
      className="h-56 w-full object-cover"
    />
  
    <div className="p-4 sm:p-6 hover:bg-hoverClr">
      <a href="#">
        <h3 className="text-lg font-medium text-white">
         {data.heading}
        </h3>
      </a>
  
      <p className="mt-2 text-textClr line-clamp-4 text-sm/relaxed c">
      {data.desc}
      </p>
      <div className='text-textClr mt-2'>
      <ul>
      {
        data.list.map((item,index)=>{
          return <li key={index} className='flex items-center gap-2 text-sm/relaxed mt-1'>
          <FaAnglesRight /> {item.name}
          </li>
        })
      }
      </ul>
      </div>
  
      <Link href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
        Find out more
  
        <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
          &rarr;
        </span>
      </Link>
    </div>
  </article>
  )
}

export default ServiceCard