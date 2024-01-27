"use client"
import Image from 'next/image';
import React,{useEffect} from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';

const ContactSec = () => {
  const router = useRouter();
  const controls = useAnimation();
  const { observe, inView } = useInView({
    threshold: [0.2],
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    initial:'hidden',
    animate:{controls},
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div ref={observe}
    initial='hidden'
    animate={controls}
    variants={{
      visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 },
      },
      hidden: { opacity: 0, y: 30 },
    }} className="px-[3%] my-5 w-fit h-auto">
      <motion.div
      
        variants={fadeInVariants}
        className="relative h-full"
      >
        <Image
          className="h-full absolute w-full rounded-[20px]"
          src={require("../../../../public/Images/call-to-action5.png")}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 px-[50px] py-[22px] gap-[30px]">
          <div className="flex justify-center flex-col">
            <h2 className="text-[30px] md:text-[38px] font-semibold text-white font-Roboto">
              Let’s Create an Amazing <br className="hidden md:block" /> Project Together
            </h2>
            <p className="text-white">
              {"Embark on a journey of creativity as we collaborate to bring your project to life. Let's create something amazing together"}
            </p>
            <div className="button-set mt-[40px]">
              <button
                onClick={() => router.push("/contact")}
                className="relative flex rounded-[30px] items-center w-fit gap-3 text-[17px] py-[18px] px-[25px] !bg-[#fff] text-lighBlue"
                style={{ background: '#fff' }}
              >
                Contact Us <FiArrowUpRight />
              </button>
            </div>
          </div>
          <div className="">
            {inView && (
              <Image className="z-[50] relative" src={require("../../../../public/Images/call-to-action5-img.png")} />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSec;
