// function nice(names) {
//     console.log("hi "+ names+" you are nice!");
//     console.log("hi "+ names+" you are a good b0y!");
//     console.log("hi "+ names+" your laptop is nice ");
//     console.log("hi "+ names+" you are a good code!!");
// }
// nice("sam")
// default parameter c here
function sum(a,b,c=3) {
    console.log(a,b,c);
    return a+b+c;
}
 result=sum(3);
 result2=sum(7,7);
//  optional parameter here taking 2 as c
 result3=sum(3,5,2);
 console.log("the first result is:",result);
 console.log("the second result is:",result2);
 console.log("the THird result is:",result3);

 const fun1=(z)=>{
    console.log("hi i am a arrow function:",z);
 }
 fun1(23);
 fun1(73);
 fun1(978);
