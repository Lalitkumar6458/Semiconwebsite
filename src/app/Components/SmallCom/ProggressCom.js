"use client"
import React,{useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';

const ProggressCom = ({text,percentage}) => {
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
    ref={observe}
    initial='hidden'
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0,transition:{duration:0.7} },
      hidden: { opacity: 0, y: 30 },
    }}
    >
    
    <div className='flex items-center text-[16px] font-Roboto  justify-between mt-6 text-headingClg dark:text-white mb-3 transition-all ease-in-out duration-700' style={{width:percentage+"%"}}>
<div className=''>{text}</div>
<div className='transition-all ease-in-out duration-700'>{percentage} %</div>

    </div>
    <div className='w-full h-[5px] bg-slate-800 rounded-md'>
    <motion.div  animate={controls}
    initial={{width:"0%"}}
    variants={{
      visible: { opacity: 1, y: 0,transition:{duration:1} ,width:percentage+"%"},
    }} className={`h-full bg-blue-700 rounded-md transition-all ease-in-out duration-700`}></motion.div>
    </div>
    
    </motion.div>
  )
}

export default ProggressCom