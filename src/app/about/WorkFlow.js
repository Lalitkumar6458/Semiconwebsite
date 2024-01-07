'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const WorkFlow = () => {
    const workFlowData=[

        {
            id:1,
            heading:"Understand",
            text:'In-depth analysis to grasp project requirements and goals.'
        },
        {
            id:2,
            heading:"Plan & Sketch",
            text:'Comprehensive planning and sketching to visualize and structure the project effectively.'
        },
        {
            id:3,
            heading:"Execution & Developement ",
            text:'Implementing the plan through coding and development to bring the project to life.'
        },
        {
            id:4,
            heading:"User Testing",
            text:'Thorough evaluation of user experience through testing, collecting feedback, and making necessary refinements for improvement.'
        },
        {
            id:5,
            heading:"Host",
            text:'Deploying the project to a hosting environment to ensure accessibility and availability for users.'
        },
        {
            id:6,
            heading:"Internet Marketing",
            text:'Strategically promoting and maximizing the online visibility of the project to reach the target audience effectively.'
        },
    ]
  return (
    <div>
    <Swiper
    spaceBetween={0}

    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    breakpoints= {{
        640: {
          slidesPerView: 2,
          
        },
        768: {
          slidesPerView: 3,
        
        },
        1024: {
          slidesPerView: 4,
         
        },
        1280: {
            slidesPerView: 4,
          
          },
          1480: {
            slidesPerView: 4,
           
          },
      }}
  >

  {
    workFlowData.map((item,index)=>{
        return  <SwiperSlide key={index}>
        <div className='w-full  ' key={index}>

        <div className='w-full  '>
        <h5 className='text-center mb-6'>Step 0{item.id}</h5>
        <div className='h-[1px] w-full border-[1px] border-black dark:border-gray-500 flex items-center justify-center'>
        <div className='h-[17px] w-[17px] p-[2px] rounded-full bg-white dark:bg-blueDark'>
        <div className='rounded-full w-full h-full bg-yellow-500'></div>
        </div>
        </div>
        </div>
        <div className='text-center '>
        <h1 className='text-[4rem]  font-bold text-slate-200 dark:text-[#3133a860]'>0{item.id}</h1>
        <h3 className=' font-bold text-[20px]'>
        {item.heading}
        </h3>
        <p className='h-[80px] text-[14px] mt-2 text-gray-600 dark:text-textClr font-medium px-[10px]'>{item.text}</p>

        </div>
        </div>
        </SwiperSlide>
        
    })
}

  </Swiper>
    </div>
  )
}

export default WorkFlow