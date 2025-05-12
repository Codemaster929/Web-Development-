console.log("Hi, there this is a program for factorial..");
let num=prompt("HI , Enter a number whose factorial u want:")
let arr=[];
for(let i=1;i<=num;i++){
    arr.push(i);
}
alert(arr);
let factorial = arr.reduce((acc, curr) => acc * curr, 1);
alert("The Factorial is :"+factorial);