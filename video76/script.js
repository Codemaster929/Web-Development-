console.log('Hello world')
// //stimulating getting data from a server
//  async function getdata() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }
// settled means  resolved or rejected 
// resolve means promise has settled successfully 
// reject means promise has not settled sucessfully 
 async function getdata() {
// let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
let data =await x.json()
return data  
}
async function main(){
  console.log("loading data")
  let data= await getdata()

console.log(data);
  console.log('data processing ');
  console.log('task 2 ongoing');
}

main()






//   data.then(()=>{
// console.log(data);
  
//   console.log('data processing ');
//   console.log('task 2 ongoing');
  

//   })
  
  


