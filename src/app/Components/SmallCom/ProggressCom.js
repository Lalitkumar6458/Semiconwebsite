import React from 'react'

const ProggressCom = ({text,percentage}) => {
  return (
    <div>
    
    <div className='flex items-center text-[16px] font-Roboto  justify-between mt-6 text-headingClg dark:text-white mb-3 transition-all ease-in-out duration-700' style={{width:percentage+"%"}}>
<div className=''>{text}</div>
<div className='transition-all ease-in-out duration-700'>{percentage} %</div>

    </div>
    <div className='w-full h-[5px] bg-slate-800 rounded-md'>
    <div className={`h-full bg-blue-700 rounded-md transition-all ease-in-out duration-700`} style={{width:percentage+"%"}}></div>
    </div>
    
    </div>
  )
}

export default ProggressCom