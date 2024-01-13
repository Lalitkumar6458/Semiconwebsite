'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { FiArrowUpRight } from 'react-icons/fi';
const ComButton = ({heading,link,icon}) => {
    const router=useRouter()
  return (
    <div>
    <div class="button-set">
<button onClick={()=>router.push(link)} class="hero-btn1 flex items-center gap-3 text-white">
{heading}  {icon?icon: <FiArrowUpRight /> }                    
</button>
</div>
    </div>
  )
}

export default ComButton