import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
const BannerPage = ({heading,bredcrum}) => {

  return (
    <div className='w-full h-[300px] relative  bg-blueDark flex items-center justify-center'>
    <div className='w-ful h-full absolute top-0 left-0 opacity-[0.2]'>
    <Image className=' w-ful h-full object-cover ' src={require("../../../../public/Images/bannerImg.jpg")}/>
    </div>
  <div className='text-center relative'>
  <h1 className='text-[3.5rem] font-bold capitalize text-white'>{heading}</h1>
  <div className='flex items-center gap-3 justify-center'>
  {
    bredcrum?.map((item,index)=>{
        return <div className='flex items-center gap-2 text-white'>
        <Link className='flex items-center gap-2 font-semibold cursor-pointer' href={item.link}>{item.icon&&item.icon}{item.name}</Link>{bredcrum.length-1!==index?"/":null}
        </div>
    })
  }
  </div>
  </div>
    </div>
  )
}

export default BannerPage