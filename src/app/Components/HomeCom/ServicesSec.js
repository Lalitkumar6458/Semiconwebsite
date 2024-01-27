"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';
import UnderlineHeading from '../SmallCom/UnderlineHeading';
import ServiceCard from '../SmallCom/ServiceCard';
import { ServicesData } from '../../../../public/Constant/Data';
import ComButton from '../SmallCom/ComButton';

const ServicesSec = () => {
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
      className='w-full bg-white dark:bg-[#060B2B] px-[4%] py-[5%]'
      ref={observe}
      initial='hidden'
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 },
        },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      <div className='flex items-center justify-between flex-wrap'>
        <div className=''>
          <h3 className='subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase '>
            {"// SERVICE WE PROVIDE"}
          </h3>

          <h1 className='title whitespace-nowrap relative text-headingClg dark:text-white text-[35px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap'>
            Services What We{' '}
            <span className='flex gap-3 relative'>
              {' '}
              <br className=' block md:hidden' />{' '}
              <UnderlineHeading text={'Provides'} top={'48px'} />
            </span>
          </h1>
        </div>
        <div className=''>
          <ComButton heading={'All Services'} link={'/services'} />
        </div>
      </div>

      <motion.div
        className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-4'
        variants={{
          visible: { transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 } },
        }}
      >
        {ServicesData.map((item, index) => (
          <motion.div key={item.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }}>
            <ServiceCard data={item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesSec;
