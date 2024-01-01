import React from 'react'
import UnderlineHeading from '../SmallCom/UnderlineHeading'
import { FiArrowUpRight } from "react-icons/fi";
import ServiceCard from '../SmallCom/ServiceCard';
const ServicesSec = () => {
  const Data=[
    {
      id:1,
      heading:"Web Development",
      desc:'Elevate your brand with captivating visual design, embodying our core philosophy. Our approach blends elegance and impact, creating a distinct and memorable brand identity.',
      link:'',
      img:'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=626&ext=jpg&ga=GA1.1.712448265.1703914140&semt=ais',
      list:[
        {
          name:"UI/UX Design"
        },
        {
          name:'HTML Website Design'
        },
        {
          name:'E-Commerce Website'
        },
        {
          name:"Web Application"
        },
        {
          name:'Mobile-First Development'
        },
       
      ]
    },
    {
      id:2,
      heading:"Apps Development",
      desc:'Innovative mobile app development tailored to your needs. Enhance your digital presence and achieve business goals with user-centric solutions crafted for success.',
      link:'',
      img:'https://img.freepik.com/free-vector/source-code-concept-illustration_114360-5487.jpg?size=626&ext=jpg&ga=GA1.1.712448265.1703914140&semt=ais',
      list:[
        {
          name:"Mobile App Design"
        },
        {
          name:'Cross-Platform App Development'
        },
        {
          name:'Native App Development'
        },
        {
          name:"Mobile App Testing"
        },
        {
          name:'App Maintenance and Support'
        },
       
      ]
    },
    {
      id:3,
      heading:"Website Care",
      desc:"Elevate your website's performance with our meticulous care services. We prioritize optimal functionality, security, and a seamless user experience, ensuring your online presence thrives effortlessly.",
      link:'',
      img:'https://img.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_74855-10172.jpg?size=626&ext=jpg&ga=GA1.1.712448265.1703914140&semt=ais',
      list:[
        {
          name:"Security Audits and Enhancements"
        },
        {
          name:'Software Updates and Maintenance'
        },
        {
          name:'Backup Solutions'
        },
        {
          name:"Performance Optimization"
        },
        {
          name:'Content Updates and Management'
        },
       
      ]
    },
    {
      id:4,
      heading:"Domain & Hosting",
      desc:"Reliable domain and hosting solutions, providing a secure foundation for your online presence. Elevate your website's performance with our robust and scalable hosting services.",
      link:'',
      img:'https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149250983.jpg?size=626&ext=jpg&ga=GA1.1.712448265.1703914140&semt=ais',
      list:[
        {
          name:"Domain Registration"
        },
        {
          name:'Web Hosting Solutions'
        },
        {
          name:'SSL Certificates'
        },
        {
          name:"Server Configuration and Management"
        },
        {
          name:'24/7 Technical Support'
        },
       
      ]
    },
    {
      id:5,
      heading:"Digital Marketing",
      desc:"Boost your brand's online presence with our strategic digital marketing solutions. From SEO to social media, we drive visibility and engagement for your business success",
      link:'',
      img:'https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9027.jpg?size=626&ext=jpg&ga=GA1.1.712448265.1703914140&semt=ais',
      list:[
        {
          name:"Search Engine Optimization (SEO)"
        },
        {
          name:'Social Media Marketing'
        },
        {
          name:'Content Marketing'
        },
        {
          name:"Pay-Per-Click (PPC) Advertising"
        },
        {
          name:'Analytics and Reporting'
        },
       
      ]
    },
    {
      id:6,
      heading:"Email Solution ",
      desc:'Elevate your communication game with our efficient email solutions. Streamline your messaging and enhance collaboration for seamless business communication.',
      link:'',
      img:'https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?size=626&ext=jpg&ga=GA1.1.712448265.1703914140&semt=ais',
      list:[
        {
          name:"Custom Email Setup"
        },
        {
          name:'Google Workspace'
        },
        {
          name:'Zoho Mail'
        },
        {
          name:"Security and Compliance"
        },
        {
          name:'Email Analytics and Reporting'
        },
       
      ]
    }
  ]
  return (
    <div className='w-full  bg-[#060B2B] px-[4%] py-[5%]'>
<div className='flex items-center justify-between flex-wrap'>
<div className=''>
<h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// SERVICE WE PROVIDE"}</h3>

<h1 class="title whitespace-nowrap relative text-white text-[35px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap">Services What We  <span  className='flex gap-3 relative'> <br className=' block md:hidden'/>  <UnderlineHeading text={"Provides"} top={"48px"}/></span>
</h1>
</div>
<div className=''>
<div class="button-set">
<a class="hero-btn1 flex items-center gap-3 text-white" href="">
All Services  <FiArrowUpRight />                     
</a>
</div>
</div>
</div>

<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-4'>
{
  Data.map((item)=>{
    return <ServiceCard key={item.id} data={item}/>
  })
}

</div>
    </div>
  )
}

export default ServicesSec