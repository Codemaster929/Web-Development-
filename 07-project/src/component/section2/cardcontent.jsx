import React from 'react'
import { MoveRight } from 'lucide-react';

const Cardcontent = (props) => {
  return (
<div>
    <div className="rounded-full bg-gray-200 h-12 w-12 flex justify-center items-center font-bold ">{props.id+1}</div>
        <p className='mt-60 text-shadow-2xs text-white ml-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, nostrum. ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequatur ab aliquid mollitia, ducimus vitae.</p>
        <div className='flex justify-around items-center mt-20'>
    <button style={{backgroundColor:props.color}} className=' rounded-full w-35 h-12 text-white'>{props.btn}</button>
          <button style={{backgroundColor:props.color}} className=" rounded-full w-10 h-10 text-white flex justify-center items-center"><MoveRight strokeWidth={2.5} /></button>
        </div>
    
</div>
      
  )
}

export default Cardcontent
