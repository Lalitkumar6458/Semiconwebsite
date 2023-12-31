"use client"
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup';
import Counter from '../SmallCom/CounterCom';
const CounterSec = () => {
    const data=[
        {
            id:1,
            title:'Project Completed',
            count:15,
            icon:require("../../../../public/Images/icons/counter5-icon1.png")
        },
        {
            id:2,
            title:'Satisfied Clients',
            count:7,
            icon:require("../../../../public/Images/icons/counter-icon5-2.png")
        },
        {
            id:3,
            title:'Expert Members',
            count:3,
            icon:require("../../../../public/Images/icons/counter5-icon3.png")
        },
        {
            id:4,
            title:'Years experience',
            count:2,
            icon:require("../../../../public/Images/icons/counter-icon5-4.png")
        },
    ]
  return (
    <div className=' relative py-[50px] lg:h-[300px] flex items-center justify-center w-full'>
    <Image className=' absolute object-cover top-0 left-0 right-0 w-full h-full' alt='counter part image' src={require("../../../../public/Images/counter5-bg.jpg")}/>

    <div className=' relative z-50 px-[4%] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-items-center'>
    {
        data.map((item,index)=>{
            return   <Counter key={index} index={index} item={item}/>
        })
    }
 
    </div>
    </div>
  )
}

export default CounterSec