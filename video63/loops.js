console.log("Array tutorial here!!");
 let a=[1,3,5,7,9,11];
//  classic for loop here
//  for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
//  }
// a.forEach((value,index)=>{
//  console.log(value," its index is:",index) ;  
// })
//  for-in looop here...
// obj={
//     a:2, b:4, c:6
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
//     }
// }
for (const element of a) {
    console.log(element);
}