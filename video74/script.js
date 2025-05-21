console.log("Hello world!!")
let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    // alert("Dont , click Hentai!!")
    document.querySelector(".box").innerHTML="<b>YOU,DBL Clicked </b> F**K You!!"
})
button.addEventListener("contextmenu",()=>{
    // alert("Dont , click Hentai!!")
  alert("Dont hack us by right clicking!!")
})
document.addEventListener("contextmenu",()=>{
    // alert("Dont , click Hentai!!")
  alert("Dont hack us by right clicking!!")
})
document.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode)
})