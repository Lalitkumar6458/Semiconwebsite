import Image from 'next/image'
import React from 'react'

const UnderlineHeading = ({text,top}) => {
  return (
    <div className='textBox'>
    <span className='underlineImg text-lighBlue relative' style={{ position: 'relative', display: 'inline-block' }}>
      {text}
      <Image
        className={`underlineImg absolute top-[${top}]`}
        src={require("../../../../public/Images/hero3-underline.png")}
    
      />
    </span>
  </div>
  )
}

export default UnderlineHeading