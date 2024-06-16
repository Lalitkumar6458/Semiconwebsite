import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import BannerPage from '../Components/Base/BannerPage'
import PortfolioCom from '../Components/SmallCom/PortfolioCom'

const page = () => {
    const bredcrum=[
        {
            name:'Home',
            link:"/",
            icon:<IoHomeOutline />
        },
        {
            name:'Our Portfolio',
            link:"/portfolio"
        }
    ]
  return (
    <div>
    <BannerPage heading={"Our Portfolio"} bredcrum={bredcrum}/>
<div className='pb-8 px-[5%]'>
<PortfolioCom DataShow={9}/>
</div>
    </div>
  )
}

export default page