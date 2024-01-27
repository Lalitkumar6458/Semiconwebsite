"use client"
import Image from 'next/image';
import React,{useEffect} from 'react';
import { FaStar } from 'react-icons/fa6';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';

const TestimonialSec = () => {
  const Data = [
    {
      id: 1,
      name: 'Bharat Modi',
      img: require("../../../../public/Images/icons/testi5-img3.png"),
      dsgn: "CEO & Founder",
      text: "I recently collaborated with Semicon, and I'm genuinely impressed by the perfect blend of affordability and top-notch quality in their Website Designing services",
      logo: require("../../../../public/Images/icons/logo.png")
    },
    {
      id: 2,
      name: 'Dasrat Modi',
      img: require("../../../../public/Images/icons/dasrathImg.jpg"),
      dsgn: "Founder",
      text: "I am exceptionally satisfied with the work undertaken by Semicon. Their dedicated effort to bring my vision to life for our company's website exceeded my expectations",
      logo: require("../../../../public/Images/icons/logo2.png")
    },
    {
      id: 3,
      name: 'Rajesh Deora',
      img: require("../../../../public/Images/icons/rajeshImg.jpg"),
      dsgn: "CEO & Founder",
      text: "Semicon's expert team provided diverse design options with exceptionally competitive pricing, delivering high-quality services within my budget - a pleasant surprise",
      logo: require("../../../../public/Images/icons/trlogo.png")
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

  const fadeInVariants = {
    initial:'hidden',
    animate:{controls},
    hidden: { opacity: 0,y:40 },
    visible: { opacity: 1,y:0, transition: { duration: 0.8 } },
  };



  return (
    <motion.div 
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
    className='w-full bg-white  dark:bg-[#060B2B] px-[4%] py-[5%]'>
      <div className=''>
        <div className='flex items-center flex-col'>
          <h3 className="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// CLIENT TESTIMONIAL"}</h3>
          <h1 className="title text-center whitespace-nowrap relative text-black dark:text-white text-[20 px] leading-[35px] md:text-[30px] font-bold md:leading-[40px] mb-[20px] z-[1] flex gap-3 flex-wrap">
            Clients Rely on Our Expertise in <br />Website Design and SEO.
          </h1>
        </div>
      </div>

      <motion.div  variants={{
        visible: { transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 } },
      }} className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        {Data.map((item) => {
          return (
            <motion.div
              key={item.id}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }}
              className='transition-all duration-700 ease-in-out rounded-[10px] shadow-cardShadow border border-cardBorder hover:border-[#4f7efa] hover:bg-hoverClr'
            >
              <div className='px-[40px] pt-[40px] pb-[38px]'>
                <div className='flex items-center gap-[30px]'>
                  <div className=''>
                    <Image src={item.img} width={70} height={70} className='w-[70px] h-[70px] rounded-full' />
                  </div>
                  <div className='dark:text-white text-black'>
                    <h2 className=' text-[22px] font-bold'>{item.name}</h2>
                    <h5 className=' dark:text-textClr text-black'>{item.dsgn}</h5>
                  </div>
                </div>
                <div className='mt-6 dark:text-textClr text-black'>
                  <p className='leading-[32px]'>
                    {item.text}
                  </p>
                </div>
              </div>
              <div className='py-[24px] px-[40px] bg-hoverClr flex items-center justify-between'>
                <div className='w-[130px] h-[40px] bg-white rounded-lg p-1'>
                  <Image className='w-full h-full object-fill' src={item.logo} />
                </div>

                <div className='flex items-center text-[#ffa439] text-[15px] gap-1'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSec;
