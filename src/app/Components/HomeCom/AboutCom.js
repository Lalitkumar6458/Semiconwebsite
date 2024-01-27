"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';
import UnderlineHeading from '../SmallCom/UnderlineHeading';
import ProggressCom from '../SmallCom/ProggressCom';
import { FiArrowUpRight } from "react-icons/fi";
import ComButton from '../SmallCom/ComButton';

const AboutCom = () => {
  const controls = useAnimation();
  const { observe, inView } = useInView({
    threshold: 0.5,
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
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <motion.div className=''
        initial='hidden'
        animate={controls}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }}
        >
          <img alt='about us' src={"https://urnothemes.com/solute/wp-content/uploads/2023/07/about-us5.png"} />
        </motion.div>
        <div className=''>
          <div className=''>
            <h3 className='subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase '>
              {"// About Us"}
            </h3>

            <h1 className='title whitespace-nowrap relative text-headingClg dark:text-white text-[30px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap'>
              Trusted By Worldwide{' '}
              <span className='flex gap-3 relative'>
                {' '}
                <br className=' block md:hidden' /> <UnderlineHeading text={"Clients"} top={"48px"} />
              </span>
              <span className='dark:text-white text-headingClg text-[35px] leading-[35px]'>for the Best Services</span>
            </h1>
          </div>
          <p className='dark:text-[#a0a5b9] text-headingClg'>
            Unlock the power of innovation with our web and app development solutions. From cutting-edge websites to dynamic mobile applications, we turn your ideas into digital realities. Elevate your online presence with our expert development services – where creativity meets functionality.
          </p>
          <ProggressCom text="Development" percentage={90} />
          <ProggressCom text="UI/UX Design" percentage={70} />
          <ProggressCom text="IT Consulting" percentage={60} />
          <div className='mt-[40px]'>
            <ComButton heading={"More About"} link={'/about'} />
          </div>

          <div></div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutCom;
