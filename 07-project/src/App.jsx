import React from 'react'
import Navbar from './component/navbar/navbar';
import Section1 from './component/section1/section1';
import Section2 from './component/section2/section2';

const App = () => {
  const users=[{
        img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color:"blue",
        button:"Satisfied"
      },{
        img:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color:"purple",
        button:"Underserved"
      },{
        img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color:"green",
        button:"Underbanked"
      },{
        img:"https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color:"crimson",
        button:"Underweight"
      }]
  return (
    <div className=' h-screen w-full '>
       <Navbar/>
      <div className='flex justify-center items-center mr-10'>
         <Section1/>
       <Section2 user={users}/>
      </div>
    </div>
  )
}

export default App;