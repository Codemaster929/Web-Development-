console.log("hello world")

async function sleep(){
    return new Promise((resolve,reject)=>{
setTimeout(() => {
     resolve (55)
}, 1000);
       })
    }
    // IIFE Expression below

    (async function main(){
// let a =await sleep();
// console.log(a)
// let b=await sleep();
// console.log(b);

//destructing

// let [x,y,...rest]=[2,4,5,6,7,89,9]
// console.log(x,y,rest );

// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// let {a,b}=obj
// console.log(a,b);

//spread operator
function sum(a,b,c) {
    return a+b+c
}
let arr=[1,4,7]
console.log(sum(arr[0],arr[1],arr[2]));
// or use the spread optr
console.log(sum(...arr));




}) ()
