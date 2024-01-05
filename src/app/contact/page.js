import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className='h-[500px] bg-slate-950'>
 <div className='flex items-center justify-center w-full h-full'>
 <Image src={require("../../../public/Images/contactImg.png")} />
 </div>
    </div>
    </div>
  )
}

export default Contact