"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';
import Image from 'next/image';
import CountUp from './CostomCount';

const Counter = ({ item, index }) => {
  const controls = useAnimation();
  const { observe, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="text-center w-full"
      ref={observe}
      initial='hidden'
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      <div className='relative group overflow-hidden flex w-full bg-countBg items-center justify-center py-[42px] px-[30px] rounded-lg gap-4' key={index}>
        <div className=''>
          <Image src={item.icon} />
        </div>
        <div className='text-[36px] flex items-start flex-col font-Roboto font-semibold'>
          <CountUp end={item.count} duration={0.7} delay={0.05} />
          <div className=''>
            <h1 className='text-[16px] font-Roboto text-[#a0a5b9]'>{item.title}</h1>
          </div>
        </div>
        <div className='h-[3px] bg-blue-600 w-[0px] group-hover:w-full transition-all duration-700 left-[50%] translate-x-[-50%] absolute bottom-0'></div>
      </div>
    </motion.div> 
  );
};

export default Counter;
