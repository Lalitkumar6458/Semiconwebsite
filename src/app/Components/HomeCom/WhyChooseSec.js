"use client"
import Image from 'next/image';
import React,{useEffect} from 'react';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';
import UnderlineHeading from '../SmallCom/UnderlineHeading';
import { FaLightbulb, FaPuzzlePiece, FaBalanceScale } from 'react-icons/fa';
import ComButton from '../SmallCom/ComButton';

const WhyChooseItem = ({ item }) => {

  return (
    <motion.div
      className='flex dark:text-white text-headingClg mt-6 group'
    
    >
      <div className='relative w-[100px]'>
        <div className='p-[18px] bg-cardBorder group-hover:bg-bgClr transition-all duration-700 group-hover:text-white  mb-5 rounded-[5px] mr-[30px] dark:bg-iconBg flex items-center justify-center text-[30px] text-lighBlue'>
          {item.icon}
        </div>
      </div>
      <div className=''>
        <div className='text-[22px] leading-[21px] font-semibold'>{item.heading}</div>
        <div className='dark:text-gray-500 text-headingClg leading-[26px] mt-4'>{item.text}</div>
      </div>
    </motion.div>
  );
};

const WhyChooseSec = () => {
  const data = [
    {
      id: 1,
      heading: 'Expertise and Innovation',
      text: 'Expertise-driven development: Our seasoned team excels in innovative solutions, ensuring cutting-edge website and app development',
      icon: <FaLightbulb />,
    },
    {
      id: 2,
      heading: 'Tailored Solutions for Your Needs',
      text: 'Tailored solutions for your uniqueness: From sleek websites to feature-rich apps, we customize development to align seamlessly with your goals.',
      icon: <FaPuzzlePiece />,
    },
    {
      id: 3,
      heading: 'Affordable Excellence',
      text: 'Affordable excellence is our promise. We deliver high-quality website and app development, ensuring value for your investment without breaking the bank',
      icon: <FaBalanceScale />,
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
    className='w-full bg-white dark:bg-[#060B2B] px-[4%] py-[5%]'>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className=''>
          <div className='' ref={observe}>
            <h3 className='subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ' >
              {"// REASON FOR CHOOSE US"}
            </h3>

            <motion.h1
              className='title whitespace-nowrap relative text-headingClg dark:text-white text-[30px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[50px] z-[1] flex gap-3 flex-wrap'

            >
              {"We're the Best Digital"}{' '}
              <span className='flex gap-3 relative'>
                {' '}
                <br className=' block md:hidden' /> <UnderlineHeading text={'Solution'} top={'48px'} />
              </span>
              <span className='text-white text-[35px] leading-[35px]'>Provider Company</span>
            </motion.h1>
          </div>

          <div className='' 
          variants={{
            visible: { transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 } },
          }}
          >
            {data.map((item, index) => (
              <motion.div key={item.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }}>
              <WhyChooseItem key={index} item={item} />
            </motion.div>
            
            ))}
          </div>

          <div className='mt-[40px]'
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }}
          >
            <ComButton heading={'All Services'} link={'/services'} />
          </div>
        </div>
        <motion.div
             variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }}
         
        >
          <Image src={require("../../../../public/Images/choose-us5.png")} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseSec;
