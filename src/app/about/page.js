import React from 'react'
import BannerPage from '../Components/Base/BannerPage'
import { IoHomeOutline } from 'react-icons/io5'
import Image from 'next/image'
import UnderlineHeading from '../Components/SmallCom/UnderlineHeading'
import ServiceCard from '../Components/SmallCom/ServiceCard'

const AboutUs = () => {
    const bredcrum=[
        {
            name:'Home',
            link:"/",
            icon:<IoHomeOutline />
        },
        {
            name:'About Us',
            link:"/about"
        }
    ]
    const aboutData=[
        {
            id:1,
            heading:'Web Development Mastery',
            desc:'Semicon excels in crafting superior web solutions. Our Mumbai-based Technology Development and Innovation center ensures cutting-edge development for clients, spanning startups to established companies.'
        },
        {
            id:2,
            heading:'Digital Marketing Expertise',
            desc:'Semicon, our affiliate, specializes in SEO and website design. Our skilled team is dedicated to propelling clients toward online marketing success, enhancing overall business performance'
        },
        {
            id:3,
            heading:'Client-Centric Solution',
            desc:'Our professional team navigates organizational challenges to deliver client-centric solutions. Researchers, strategists, designers, developers, and project managers collaborate to transform research into intelligent brand solutions.'
        } , {
            id:4,
            heading:'Visionary Growth',
            desc:'Semicon aspires to lead in India, delivering measurable business value through technology. Join us on this journey, where we redefine the web development and digital marketing landscape.'
        }
    ]
    const workFlowData=[

        {
            id:1,
            heading:"Understand",
            text:'Understand Clients Requirements'
        },
        {
            id:2,
            heading:"Plan & Sketch",
            text:'Choosing Tailored Afforadable Plans'
        },
        {
            id:3,
            heading:"Execution & Developement ",
            text:'Project Executions and Developing as per clients Requirements.'
        },
        {
            id:4,
            heading:"User Testing",
            text:'We look forward to engage with beyond the conventional'
        },
        {
            id:5,
            heading:"Host",
            text:'We look forward to engage with beyond the conventional'
        },
        {
            id:6,
            heading:"Internet Marketing",
            text:'We look forward to engage with beyond the conventional'
        },
    ]
  return (
    <div>

    <BannerPage heading={"About Us"} bredcrum={bredcrum}/>

    <div className='px-[4%] py-[3%]'>
    <div className='grid grid-cols-1 md:grid-cols-2'>
    <div className=''>
    <div className=''>
    <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// About Us"}</h3>
    
    <h1 class="title whitespace-nowrap relative text-headingClg dark:text-white text-[30px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap">
    Empowering Transformation:<br className='block md:hidden'/> Our Vision at <span  className='flex gap-3 relative'>   <UnderlineHeading text={"Semicon"} top={"48px"}/> for <br className='block md:hidden'/>  Optimal Services
    </span>
    </h1>
    </div>
    <p>
{`Semicon is not just a web development company; it's a visionary force redefining the industry. Our Mumbai-based Technology Development and Innovation center drives cutting-edge web solutions for diverse clients, from startups to established companies. Through our affiliate, we excel in SEO, website design, and digital marketing, propelling clients to online success. Rooted in a client-centric ethos, our professional team transforms research into intelligent solutions, crafting comprehensive brands. With expertise in mobile app development and a vision to lead in India, we invite you to join us on a transformative journey, delivering measurable business value through technology across web development, digital marketing, and mobile apps.`}
    </p>
    </div>
    <div className='flex items-center justify-center'>
    <Image className='h-[90%] w-[80%]' alt='about image' src={require("../../../public/Images/aboutImg.png")} />
    </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4'>

    {
        aboutData.map((item)=>{
            return <ServiceCard  key={item.id} data={item}  />
        })
    }
    
    </div>

    <div className='mt-[40px]'>
    <div className=''>
    <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// Workflow"}</h3>
    
    <h1 class="title whitespace-nowrap relative text-headingClg dark:text-white text-[30px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap">
    How we<span  className='flex gap-3 relative'>   <UnderlineHeading text={"work"} top={"48px"}/>
    </span>
    </h1>
    </div>
<div className='w-full overflow-x-auto'>

<div className=' w-full flex items-center md:flex-row flex-col '>
{
    workFlowData.map((item,index)=>{
        return <div className='w-[500px]   ' key={index}>

        <div className='w-full  '>
        <h5 className='text-center mb-6'>Step 0{item.id}</h5>
        <div className='h-[1px] w-full border-[1px] border-black flex items-center justify-center'>
        <div className='h-[17px] w-[17px] p-[2px] rounded-full bg-white'>
        <div className='rounded-full w-full h-full bg-yellow-500'></div>
        </div>
        </div>
        </div>
        <div className='text-center '>
        <h1 className='text-[4rem]  font-bold text-slate-200'>0{item.id}</h1>
        <h3 className=' font-bold'>
        {item.heading}
        </h3>
        <p className='h-[80px] text-[13px] mt-2 text-gray-600 font-medium'>{item.text}</p>

        </div>
        </div>
    })
}
</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default AboutUs