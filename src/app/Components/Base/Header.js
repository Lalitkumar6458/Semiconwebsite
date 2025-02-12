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
import { usePathname, useRouter } from 'next/navigation'
import { Drawer } from 'antd';
import { FaSearch,FaBars, FaMinus } from 'react-icons/fa'
import {FiPlus} from "react-icons/fi"
import {LiaAngleDownSolid, LiaAngleRightSolid, LiaAngleUpSolid} from "react-icons/lia"

const Header = ({MobileTab}) => {
  const [isScrolled, setIsScrolled] = useState(false);
const[isMobileTabShow,setIsMobileTabShow]=useState(false)
const[mobileheaderChildShow,setMobileHeaderChildShow]=useState({
  Product:false,
  Services:false,
  Alloys:false
})
const pathName=usePathname()

const [open, setOpen] = useState(false);
const showDrawer = () => {
  setOpen(true);
};
const onClose = () => {
  setOpen(false);
};
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
   
    setIsMobileTabShow(false)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(()=>{
    setOpen(false)
  },[
    pathName
  ])
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
// {name:'Products',
// link:'/',
// submenu:[
//   {
//     name:"Pmi Report System",
//     link:""
//   },
//   {
//     name:"GST Bill System",
//     link:""
//   },
// ]
// },
// {name:'Blog',
// link:'/'
// },
{name:'Portfolio',
  link:'/portfolio'
},
{name:'Contact',
link:'/contact'
},
  ]
  const showSubmenuMobile=(name)=>{

    setMobileHeaderChildShow(
      {
        ...mobileheaderChildShow,
        [name]:!mobileheaderChildShow[name]
      }
    )
  }
  return (
    <div className={`fixed top-0 w-full h-[60px] px-[6%] z-50 ${isScrolled ? 'bg-blueDark text-white' : pathname==='/'?'text-[#060922] dark:text-white':'text-white'}`}>
      <div className={`flex items-center relative justify-between w-full max-w-[1440px] mx-auto ${isScrolled ? 'bg-blueDark' : ''}`}>
        <Image className='w-[150px] md:w-[200px] h-[60px]' src={"/Images/shemiconlogo.png"} width={445} height={178} alt='Shemicon' />

        <div className='relative'>
          <ul className='md:flex items-center gap-5 hidden'>
            {Manu.map((item,index)=>{
              return (
                <li key={index} className='group relative mainLink hover:text-orangeClr'>
                  <Link href={item.link} className='flex items-center gap-1 relative font-semibold py-5'>
                    {item.name} 
                    {item.submenu && item.submenu.length > 0 && 
                      <FaAngleDown className='text-xs transition-transform group-hover:rotate-180' />
                    }
                  </Link> 
                  {item.submenu && item.submenu.length > 0 && (
                    <div className='invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 min-w-[200px] bg-white rounded-md text-blueDark shadow-lg border border-orangeClr transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                      <ul className='py-2'>
                        {item.submenu.map((manu,index)=>{
                          return (
                            <li key={index} className='hover:bg-gray-50'>
                              <Link href={manu.link} className='block px-4 py-2 text-[15px] font-medium hover:text-orangeClr transition-colors'>
                                {manu.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className='flex items-center gap-3'>
          <div className=' hover:scale-125 transition-all duration-700 cursor-pointer bg-iconBg rounded-full flex items-center justify-center p-2 text-[18px]'>
            <BiSearch />
          </div>
          <div className='hover:scale-125 hidden transition-all duration-700  cursor-pointer bg-iconBg rounded-full  items-center justify-center p-2 text-[18px]'>
            <TiInfoLarge />
          </div>
          <div className='hover:scale-125 flex  md:hidden transition-all duration-700  cursor-pointer bg-iconBg rounded-full  items-center justify-center p-2 text-[18px]' onClick={()=>showDrawer()}>
            {<GiHamburgerMenu  />}
          </div>
          <ThemeSwitcher isScrolled={isScrolled}  />
        </div>
        <div className={` absolute transition-all duration-700 ease-in-out bg-white rounded-2xl overflow-y-auto flex items-center justify-center w-[88%] ${isMobileTabShow?' h-[60vh]':'h-[0px]'} top-[115%]`}>
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
      <Drawer
        title="Shemicon Info Tech"
        width={300}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
          <ul className='space-y-3'>
            {Manu.map((item, index) => (
              <li key={index} className="text-[1.1rem] font-medium border-b border-gray-100 last:border-none">
                <div className="flex items-center justify-between py-2">
                  <Link href={item.link} className="hover:text-orangeClr transition-colors">
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button 
                      onClick={() => showSubmenuMobile(item.name)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      {mobileheaderChildShow[item.name] ? 
                        <LiaAngleUpSolid className="text-xl" /> : 
                        <LiaAngleDownSolid className="text-xl" />
                      }
                    </button>
                  )}
                </div>
                {item.submenu && (
                  <ul className={`ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                    mobileheaderChildShow[item.name] ? 'max-h-[500px] py-2' : 'max-h-0'
                  }`}>
                    {item.submenu.map((submenu, idx) => (
                      <li key={idx} className="text-[0.95rem]">
                        <Link href={submenu.link} className="block py-1 hover:text-orangeClr transition-colors">
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  )
}

export default Header