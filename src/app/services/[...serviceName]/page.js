import BannerPage from '@/app/Components/Base/BannerPage'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { ServicesData } from '../../../../public/Constant/Data'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserGear,FaArrowRightLong  } from "react-icons/fa6";
import ServiceCard from '@/app/Components/SmallCom/ServiceCard'
import { MdEmail } from "react-icons/md";
const Page = ({params}) => {
    console.log(params.serviceName[0],"params")

    const singleData=ServicesData.filter((x)=>x.link==='/'+params.serviceName[0])[0]
    console.log(singleData,'singleData')
    const bredcrum=[
        {
            name:'Home',
            link:"/",
            icon:<IoHomeOutline />
        },
        {
            name:'Services',
            link:"/services"
        },
        {
            name:params.serviceName[0],
            link:"/services/"+params.serviceName[0]
        }
    ]

 const servicesList=   [
        {
          name:"Website Devlopment",
          link:"/services/web_development",
          icon:<FaUserGear />
        },
        {
          name:"App Developmwnt",
          link:"/services/app_development",
          icon:<FaUserGear />
        },
        
        {
          name:"Website Care",
          link:"/services/website_care",
          icon:<FaUserGear />
        },
        
        {
          name:"Domain & Hosting",
          link:"/services/domain_and_hosting",
          icon:<FaUserGear />
        },
        
        {
          name:"Digital Marketing",
          link:"/services/digital_marketing",
          icon:<FaUserGear />
        },
        
        {
          name:"Email Solution",
          link:"/services/email_solution",
          icon:<FaUserGear />
        },
        
        ]
  return (
    <div>
    <BannerPage heading={singleData.heading} bredcrum={bredcrum}/>
    <div className='px-[4%] py-[3%]'>
    <div className=''>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className=' md:col-span-3 pr-[5%]'>
                    <div className=''>
                        <h3 class="subtitle text-[11px] md:text-[14px]   font-semibold text-lighBlue uppercase ">{"// "+singleData.heading}</h3>

                        <h1 class="title md:w-[80%] relative text-headingClg dark:text-white text-[25px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[30px] md:mb-[50px] z-[1] flex gap-3 flex-wrap">{singleData.pageheading}
                        </h1>

                        <p>
                        {singleData.pageDesc}
                        </p>
                    </div>

                    <div className='mt-6'>
                       <h1 className='font-bold text-[1.5rem] md:text-[2rem]'>
                       {singleData.subHeading}
                       </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
            {
                singleData.list.map((item,index)=>{
                    return <ServiceCard key={index} data={item} />
                })
            }
            <div className='bg-bgClr flex items-center justify-center flex-col gap-3 rounded-xl p-3'>
            <MdEmail className='text-[1.7rem]' />
            <h3 className='text-center text-[1.3rem]'>WE ARE ALWAYS HAPPY TO HELP GET IN TOUCH WITH US TODAY!
            </h3>
            <button className='bg-blueDark text-white rounded-md p-2 opacity-[0.65] hover:opacity-[1] transition-all duration-500 ease-in-out'>
            Get a quote
            </button>
            </div>
            </div>

                    </div>

                <div className='mt-6'>
                <h2 className='font-bold text-[1.5rem] md:text-[2rem]'>{singleData.secondSec.heading}</h2>

                <div className='grid grid-cols-1 md:grid-cols-2  gap-3 mt-4'>
                {
                    singleData.secondSec.list.map((item,index)=>{
                        return <ServiceCard key={index} data={item} />
                    })
                }
                </div>

                <div className='mt-6'>
                <p>
                {singleData.secondSec.contactText}
                </p>
                </div>
                </div>

                </div>
                <div className=''>
            {/* <Image className="ServicesImg" src={require("../../../../public/Images/ServiceImg/WEDIMG-removebg-preview.png")} />*/}
            <div className=' bg-lighBlue p-5 rounded-lg'>
            <h2 className=' text-[25px] text-white font-semibold mb-5'>List Of Services</h2>
            <ul >
            
            {
                servicesList.map((item ,index)=>{
                    return <li key={index} className={`transition-all duration-500 ease-in-out group leading-[60px] bg-activeList hover:opacity-[1] ${"/services/"+params.serviceName[0]===item.link?'opacity-[1]':'opacity-[0.65]' } opacity-[0.65] text-white rounded-lg mb-3`}>
                 <Link className='w-full leading-[60px] px-4 flex items-center gap-3' href={item.link}> {item.icon}   {item.name} <FaArrowRightLong className={`transition-all duration-500 ease-in-out opacity-0 group-hover:translate-x-0 group-hover:opacity-[1] ${"/services/"+params.serviceName[0]===item.link?'translate-x-0 opacity-[1]':'translate-x-[-20px] opacity-0' }  `} /></Link> 
                    </li>
                })
            }
            </ul>
            </div>
                </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default Page