console.log("This is promise!!")

let prom1=new Promise((resolve,reject)=>{
  let num=Math.random();  
    if(num<0.5){
        reject("Random no is not supportive")
    }
    else{
setTimeout(()=>{
    console.log("Yes , i am done")
    resolve("Sahaj")
},3000);
}
})


let prom2=new Promise((resolve,reject)=>{
  let num=Math.random();  
    if(num<0.5){
        reject("Random no is not supportive 2")
    }
    else{
setTimeout(()=>{
    console.log("Yes , i am done 2")
    resolve("Sahaj 2")
},1000);
}
})
//  let prom3=Promise.allSettled([prom1,prom2]);
//  prom3.then((a)=>{
//     console.log(a)
//  }).catch((e)=>{
//     console.log(e)
//  })
let prom3=Promise.race([prom1,prom2]);
 prom3.then((a)=>{
    console.log(a)
 }).catch((e)=>{
    console.log(e)
 })
