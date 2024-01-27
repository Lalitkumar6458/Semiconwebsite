"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';
import Image from 'next/image';
import Counter from '../SmallCom/CounterCom';

const CounterSec = () => {
  const data = [
    {
      id: 1,
      title: 'Project Completed',
      count: 15,
      icon: require("../../../../public/Images/icons/counter5-icon1.png"),
    },
    {
      id: 2,
      title: 'Satisfied Clients',
      count: 7,
      icon: require("../../../../public/Images/icons/counter-icon5-2.png"),
    },
    {
      id: 3,
      title: 'Expert Members',
      count: 3,
      icon: require("../../../../public/Images/icons/counter5-icon3.png"),
    },
    {
      id: 4,
      title: 'Years experience',
      count: 2,
      icon: require("../../../../public/Images/icons/counter-icon5-4.png"),
    },
  ];
  const controls = useAnimation();
  const { observe, inView } = useInView({
    threshold: [0.2],
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className='relative py-[50px] lg:h-[300px] flex items-center justify-center w-full z-[1]'
      ref={observe}
      initial='hidden'
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      <Image
        className='absolute object-cover top-0 left-0 right-0 w-full h-full'
        alt='counter part image'
        src={require("../../../../public/Images/counter5-bg.jpg")}
      />

      <motion.div  variants={{
        visible: { transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 } },
      }} className='relative z-50 px-[4%] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-items-center'>
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }}
          >
            <Counter key={index} index={index} item={item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CounterSec;
