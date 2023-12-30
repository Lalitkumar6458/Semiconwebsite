import Image from 'next/image'
import React from 'react'

const UnderlineHeading = ({text}) => {
  return (
    <div className='textBox'>
    <span className='text-lighBlue'>{text}</span>
    <Image className='uderlineImg' src={require("../../../../public/Images/hero3-underline.png")}/>
    </div>
  )
}

export default UnderlineHeading