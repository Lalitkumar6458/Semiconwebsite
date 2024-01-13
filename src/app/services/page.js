import React from 'react'
import BannerPage from '../Components/Base/BannerPage'
import { IoHomeOutline } from 'react-icons/io5'
import UnderlineHeading from '../Components/SmallCom/UnderlineHeading'
import ServiceCard from '../Components/SmallCom/ServiceCard'
import { ServicesData } from '../../../public/Constant/Data'
const Services = () => {
    const bredcrum=[
        {
            name:'Home',
            link:"/",
            icon:<IoHomeOutline />
        },
        {
            name:'Services',
            link:"/services"
        }
    ]
  return (
    <div>
    <BannerPage heading={"Services"} bredcrum={bredcrum}/>
   <div className='px-[4%] py-[3%]'>
   <div className=''>
   <h3 class="subtitle text-[11px] md:text-[14px]  font-semibold text-lighBlue uppercase ">{"// SERVICES"}</h3>
   
   <h1 class="title whitespace-nowrap relative text-headingClg dark:text-white text-[30px] leading-[35px] md:text-[38px] font-bold md:leading-[56px] mb-[20px] z-[1] flex gap-3 flex-wrap">
   Services We <UnderlineHeading text={"Offer"} top={"48px"}/> 
   
   </h1>
   </div>

   <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-[50px]'>
{
    ServicesData.map((item)=>{
    return <ServiceCard key={item.id} data={item}/>
  })
}

</div>
   </div>

    </div>
  )
}

export default Services