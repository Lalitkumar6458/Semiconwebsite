"use client"
import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { TiInfoLarge } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { ThemeSwitcher } from './ThemeSwitcher';
import { usePathname } from 'next/navigation'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const[isMobileTabShow,setIsMobileTabShow]=useState(false)
const pathname=usePathname()
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // You can adjust the scroll threshold as needed
    setIsScrolled(scrollPosition > 0);
  };
  console.log("location",pathname)
  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const Manu=[
    {name:'Home',
    link:'/'
  },
  {name:'About',
  link:'/about'
},
{name:'Services',
link:'/services',
submenu:[
{
  name:"Website Devlopment",
  link:""
},
{
  name:"App Developmwnt",
  link:""
},

{
  name:"Website Care",
  link:""
},

{
  name:"Domain & Hosting",
  link:""
},

{
  name:"Digital Marketing",
  link:""
},

{
  name:"Email Solution",
  link:""
},

]
},
{name:'Products',
link:'/',
submenu:[
  {
    name:"Pmi Report System",
    link:""
  },
  {
    name:"GST Bill System",
    link:""
  },
]
},
{name:'Blog',
link:'/'
},
{name:'Contact',
link:'/contact'
},
  ]
  return (
    <div className={`fixed top-0 w-full px-[6%]  py-4 z-50 ${isScrolled ?  ' bg-blueDark text-white' : pathname==='/'?'text-[#060922] dark:text-white':'text-white'}`}>
<div className={`flex items-center relative justify-between ${isScrolled ? ' bg-blueDark' : ''} `}>
<Image className='w-[200px] h-[50px]' src={require("../../../../public/Images/logo.png")} alt='semicon' />

<div className=''>
<ul className='md:flex items-center gap-5 hidden'>
{
  Manu.map((item,index)=>{
    return <li key={index} className='mainLink  hover:text-orangeClr'>
   <Link href={item.link} className='flex items-center gap-1 relative font-semibold '>{item.name} {item.submenu&&item.submenu.length>0&&<FaAngleDown className=' text-xs' />}</Link> 
   {
    item.submenu&&item.submenu.length>0 &&  <div className=' absolute top-[90%] border-t-[4px] border-orangeClr subLink bg-white rounded-md text-blueDark px-2 py-2 shadow-lg border'>
    <ul>
    {
      item.submenu.map((manu,index)=>{
        return  <li key={index} className='border-b border-[#333] py-2 last:border-b-0'>
        <Link href={manu.link} className='w-full text-[16px] font-Roboto font-medium hover:text-lighBlue'>{manu.name}</Link>
        </li>
      })
    }
    </ul>
    </div>
   }
 
    </li>
  })
}
</ul>
</div>
<div className='flex items-center gap-3'>
<div className=' hover:scale-125 transition-all duration-700 cursor-pointer bg-iconBg rounded-full flex items-center justify-center p-2 text-[18px]'>
<BiSearch />
</div>
<div className='hover:scale-125 hidden transition-all duration-700  cursor-pointer bg-iconBg rounded-full  items-center justify-center p-2 text-[18px]'>
<TiInfoLarge />
</div>
<div className='hover:scale-125 flex  md:hidden transition-all duration-700  cursor-pointer bg-iconBg rounded-full  items-center justify-center p-2 text-[18px]' onClick={()=>setIsMobileTabShow(!isMobileTabShow)}>
{isMobileTabShow?<IoClose />:<GiHamburgerMenu  />}
</div>
<ThemeSwitcher isScrolled={isScrolled}  />
</div>
<div className={` absolute transition-all duration-700 ease-in-out bg-white rounded-2xl overflow-y-auto flex items-center justify-center w-full  ${isMobileTabShow?' h-[60vh]':'h-[0px]'} top-[115%]`}>
<ul className='flex flex-col gap-2 p-2 w-full'>
{
  Manu.map((item,index)=>{
    return <li key={index} className='mainLink border-b text-black text-[18px]  hover:text-orangeClr px-4 leading-[40px]'>
   <Link href={item.link} className='flex items-center justify-between gap-1 relative font-semibold '>{item.name} {item.submenu&&item.submenu.length>0&&<FaAngleDown className=' ' />}</Link> 
   {
    item.submenu&&item.submenu.length>0 &&  <div className=' mobileView bg-white rounded-md text-blueDark px-2 py-2 shadow-lg border'>
    <ul>
    {
      item.submenu.map((manu,index)=>{
        return  <li key={index} className='border-b border-[#333] py-2 last:border-b-0'>
        <Link href={manu.link} className='w-full text-[16px] font-Roboto font-medium hover:text-lighBlue'>{manu.name}</Link>
        </li>
      })
    }
    </ul>
    </div>
   }
    </li>
  })
}
</ul>
</div>
</div>
    </div>
  )
}

export default Header