"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Counter = ({ item,index }) => {
  const counterRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="text-center w-full" ref={counterRef}>
    <div className=' relative group overflow-hidden flex w-full bg-countBg items-center justify-center py-[42px] px-[30px] rounded-lg gap-4' key={index}>
    <div className=''>
    <Image src={item.icon}/>
    </div>
    <div className=' text-[36px] flex items-start flex-col font-Roboto font-semibold'>
    <CountUp end={item.count} duration={1} suffix={" +"} />
    <div className=''>
    <h1 className='text-[16px] font-Roboto text-[#a0a5b9]'>{item.title}</h1>
    </div>
    </div>
    <div className='h-[3px] bg-blue-600 w-[0px] group-hover:w-full  transition-all duration-700 left-[50%] translate-x-[-50%] absolute bottom-0'></div>
    </div>
    </div>
  );
};

export default Counter;
