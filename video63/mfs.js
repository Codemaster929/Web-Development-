let arr=[2,3,4,5,6,11,10,,9];
// let newarr=[];
// for (const element of arr) {
//     newarr.push(element**2);
// }
// console.log(newarr);
// complex way above and easy way below
// let newarr= arr.map((e,index,arr)=>{
//   return e**2;
// })
// console.log(newarr);
const greaterthanaeven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterthanaeven));

let arr2=[1,2,3,4,5,6]

const red=(a,b)=>{
    return a*b;
}
console.log(arr2.reduce(red));

console.log(Array.from("sahaj"));
console.log(Array.from("246789"));

