import React from 'react'
import Cardcontent from './cardcontent'

const Card = (props) => {
    
  return (
   <div className='h-full w-70 bg-image rounded-4xl relative shrink-0 scroll-smooth'>
        <img className='h-full w-full object-cover rounded-4xl ' src={props.img} alt="" 
        />
        <div className="h-full w-full absolute top-0 left-0 p-3 rounded-4xl">
      <Cardcontent id={props.id} btn={props.btn} color={props.color}/>

        </div>
    </div>
  )
}

export default Card

 