console.log("hello world ");
//The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
//soln-
// let students=['ajay', 'riveshvaraj','yashverdhan','sahaj','bhupendar','hempratabh','tonystark','vijaykaram','sonty']
// let houses=[]
// for (const student of students) {
//     if(student.length<6){
//         houses.push('Gryffindor')

//     }
//     else if(student.length<8){
//         houses.push('Huflepuff')
//     }
//     else if(student.length<12){
//         houses.push('Ravenclaw')
//     }
//     else{
//         houses.push('Slytherin')
//     }
// }
// console.log(houses);

// The Double Trouble:
// You are tasked with writing a function that doubles each element in an array.However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
// let arr=[2,3,4,4,5,6,7,7]
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     if(i<arr.length-1 && arr[i]===arr[i+1]){
//       arr[i]=arr[i]*2;
//  i+=1;
//     }
//     else{
//         arr[i]=arr[i]*2;
//     }
// }
// console.log(arr)

//
//3. The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
// soln-
// let str="sahaj"
// let newstr=[]
// for (let i =0; i < str.length ; i++) {
// //  console.log(str[i]);
// newstr.push(str[i]);

// }
// // console.log(newstr.reverse());
// let  vat=newstr.join('');
// console.log("the result is :",str+vat)
//
//5. The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
//soln-
// let arr=[2,3,4,-2,-3];
//   let sum=0;
// for (const num of arr) {
//     if(num<0){
//         console.log(num);
//         break;
//     }
//     else{

//        sum = sum +num

//     }
// }
//  console.log("the result is ",sum);
// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string.Consider both uppercase and lowercase vowels.
// let str = prompt("Enter a string :");
// console.log(str);
// let arr = ["a", "e", "i", "o", "u"];
// let arr2 = ["A", "E", "I", "O", "U"];
// let count = 0;
// function vowel(str) {
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);

//     for (let j = 0; j < arr.length; j++) {
//       // console.log(arr[j]);

//       if (str[i] == arr[j] || str[i] == arr2[j]) {
//         count++;
//       }
//     }
//   }
//   console.log(count);

//   if (count > 1) {
//     console.log("There are  " + count + " vowels in the string ");
//   }
// }

// vowel(str);
//
//4. The Password Validator:
//soln-
// let str = prompt("Enter your password:");

// let hasupprcase = /[A-Z]/.test(str);
// console.log(hasupprcase);
// let haslowercase = /[a-z]/.test(str);
// console.log(haslowercase);
// let hasnumber = /\d/.test(str);
// console.log(hasnumber);

// if (haslowercase && hasupprcase && hasnumber == true) {
//   alert("Password Accepted");
// } else {
//   alert(
//     "Make sure your password contains at least 1 Upprcase, 1 Lowercase & 1 Number!! "
//   );
// }
