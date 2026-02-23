

const App = () => {
  return (
      <>
      
    <div id='dad'>
      <h1> hello there</h1>              
                                       {/* two thing can not be returned , until we use fragments , its empty tags that do not show up at console */}
      <h2>hello again </h2>
    </div>
    <div id='chacha'>

      </div>
    </>

  )
}
 export const Letter=()=>{
  return (
    <>
    <h2 id='smallHeading'>this is the second component </h2>
    <h3 id='evensmallerHeading'>i am under the third one </h3></>
  )
}

export default App 

