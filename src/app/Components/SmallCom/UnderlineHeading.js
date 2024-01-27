import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const UnderlineHeading = ({text,top}) => {
  return (
    <div className='textBox'>
    <span className='underlineImg text-lighBlue relative' style={{ position: 'relative', display: 'inline-block' }}>
     
{
  text==='Business'? <TypeAnimation
  sequence={['Business', 1000, 'Innovation', 1000, 'Success', 1000]}
  repeat={Infinity}
/>:text
}
     
      <Image
        className={`underlineImg absolute top-[${top}]`}
        src={require("../../../../public/Images/hero3-underline.png")}
    
      />
    </span>
  </div>
  )
}

export default UnderlineHeading