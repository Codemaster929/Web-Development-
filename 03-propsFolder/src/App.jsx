import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
const App = () => {
  const user='sahaj'
  const course ='btech'
  return (
    <>
   <div className="parent">
    <Card user='sahaj ' age={22} img='https://images.unsplash.com/photo-1770319127817-a70d6172442d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card user='sarthak' age={20} img='https://images.unsplash.com/photo-1770260071751-0711b6f26ff4?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card user='ritik ' age={21} img='https://images.unsplash.com/photo-1770246875321-16e16c247ff7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    
   </div>
 

    </>
  );
};

export default App;
