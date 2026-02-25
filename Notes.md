# React , why react?
~~~
well react is a library 
, a library is used to work on a specific component 
.It was used to able to make component based websites,
 for a like count ,etc , no need to load the entire page/Dom . 
React introduced us with the concept of virtual dom ... 


~~~
# using one value or variable of a js page into other js page 
~~~

-it can be done using import , export 
- we export the value and use the import in the other js page to receive and work on that value 
- there are two types of export - 
    1. default export and 2. named export 
- in the default export , while importing an element any name can be used as there is only one element being exported 
~~~
# component building in react --
~~~
- in react everything is a componet  
, in a website every element can be made as an individual components 
, made in a component folder in src and then imported and used in the app.jsx file 
, we can make multiple component and use them as we see fit 
~~~
# props --
~~~
In react we can use use props to take or give values to a component or element -
lets say we use a parameter [element] in the function ,
 and we define its value in the element in the app.jsx file or other file like -

<Card user='sahaj ' age={22} img='https://images.unsplash.com/photo-1770319127817-a70d6172442d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

then in card.jsx= 
 <img src={props.img} alt="profilePic" />
      <h1>{props.user},{props.age}</h1>
      , here we can see clearly how we set and use props ....
~~~
# props drilling --
~~~
Well as we show we can use props to set values and use receive data in element 
, props drilling is all about how the received data and pass it down the line,
In props drilling the data is passed from the root jsx file or app.jsx file 
to different component file to its component file 
like for eg- 
  <Section2 user={users}/>
  then in Section2.jsx -
    {props.user.map(function(element,key){
       return (
        <Card img={element.img} btn={element.button} id={key} color={element.color}/>
       )
     })}
     then again in card-
      <Cardcontent id={props.id} btn={props.btn} color={props.color}/>
, see how the data is flowing from the received user data to different component 
this  is props drilling .

