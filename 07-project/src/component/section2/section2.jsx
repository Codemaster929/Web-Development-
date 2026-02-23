import React from 'react'
import Cardcontent from './cardcontent'
import Card from './card'


const Section2 = (props) => {
 
  return (
    <div id='right' className=' w-2/3 h-[80vh] p-10 flex gap-5 select-none overflow overflow-x-scroll'>
     {props.user.map(function(element,key){
       return (
        <Card img={element.img} btn={element.button} id={key} color={element.color}/>
       )
     })}

    </div>
  )
}

export default Section2
