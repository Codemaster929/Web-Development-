console.log("hello world!!")
console.log("happy coding ")
 setTimeout(()=>{
    console.log("I am inside setTimeout ")
 })
 setTimeout(()=>{
    console.log("i am inside setTimeout2")
 })
console.log("the END")
//
//
const fn =() => {
    console.log("ITs, NOthing");
}
const callback = (args) => {
    console.log(args)
    fn()
}
const loadscript = (src, mcallback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Sahaj",fn);
    document.head.append(sc);
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" ,callback())