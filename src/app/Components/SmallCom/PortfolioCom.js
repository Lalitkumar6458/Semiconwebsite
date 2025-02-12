'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link';
const PortfolioCom = ({DataShow=6}) => {
    const data=[
        {
            id:11,
            heading:'RSV Worldwide LLP',
            img:"/Images/clientImg/rsvworldwide.png",
            link:'https://www.rsvworldwidellp.com/'
        },
        {
            id:12,
            heading:'Rotex Metal Inc',
            img:"/Images/clientImg/rotexmetalinc.png",
            link:'https://www.rotexmetalinc.com/'
        },
        {
            id:7,
            heading:'Fusion tech alloys',
            img:"/Images/clientImg/fusiontech.PNG",
            link:'https://www.fusiontechalloys.com/'
        },
        {
            id:8,
            heading:'K.C. Impex',
            img:"/Images/clientImg/kcimpexnew.png",
            link:'https://www.kcimpex.com/'
        },
        {
            id:9,
            heading:'Shree Mohan Steel',
            img:"/Images/clientImg/shreemohan.PNG",
            link:'https://www.shreemohansteel.com/'
        },
        {
            id:1,
            heading:'Modi Metals',
            img:"/Images/clientImg/modimetal.PNG",
            link:'https://modimetals.in/'
        },
        {
            id:2,
            heading:'Maruti Steel Alloys',
            img:"/Images/clientImg/marutisteel.PNG",
            link:'https://www.marutisteelalloys.com/'
        },
        {
            id:3,
            heading:'Rajesh Alloys',
            img:"/Images/clientImg/rajeshalloys.PNG",
            link:'https://www.rajeshalloys.com/'
        }, {
            id:4,
            heading:'Shree Ram alloys Metal',
            img:"/Images/clientImg/shreeram.PNG",
            link:'https://www.shreeramalloysmetal.com/'
        },
        {
            id:5,
            heading:'Khushi Metal & Alloys',
            img:"/Images/clientImg/khushimetal.PNG",
            link:'https://khushimetal.vercel.app/'
        },
        {
            id:6,
            heading:'MatoShree Metal & Alloys',
            img:"/Images/clientImg/matoshreemetal.PNG",
            link:'https://www.matoshreemetal.com/'
        },

    ]
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
    <div>
    <motion.div  variants={{
        visible: { transition: { staggerChildren: 0.5, delayChildren: 0.3,duration:0.7 } },
      }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[40px]'>
     {data.slice(0,DataShow).map((item)=>{
        return (<motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0,transition:{duration:0.7} } }}
            className="h-[250px] relative overflow-hidden group shadow-cardShadow border-cardBorder" key={item.id}>
         <Image className='w-full h-full object-fill  rounded-[10px]' width={1351} height={611} src={item.img}/>
        <div className=' absolute top-[251px] group-hover:top-0  transition-all duration-700 ease-in-out w-full h-full   left-0 right-0 rounded-[10px] overflow-hidden'>
        <div className='h-[80%] w-full bg-bgClr opacity-[0.7] '>
        
        </div>
        <div className='h-[20%] w-full bg-white flex items-center justify-between'>
        <h3 className='w-[80%] pl-5 font-semibold font-Roboto text-black'>{item.heading}</h3>
        <Link href={item.link} className='h-full bg-bgClr w-[20%] flex items-center justify-center text-white text-[18px]' target='_blank'>
        <button ><FiArrowUpRight /></button>
        </Link>
        </div>
        </div>          
        </motion.div>)
     })}
     </motion.div>
    </div>
  )
}

export default PortfolioCom