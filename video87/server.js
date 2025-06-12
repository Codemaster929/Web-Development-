const fs = require("fs");
//const fs= require("fs/promises")
console.log(fs);

console.log('Starting ');
//not good as the other
// fs.writeFileSync("sahaj.txt","sahaj is a awesome programmer")
//other
// fs.writeFile("sahaj2.txt","sahaj is a codemaster that's why his github has that name!",()=>{
//     console.log('Done');
//     fs.readFile("sahaj2.txt",(error,data)=>{
//         console.log(error,data.toString());
        
       
            
//         })
//     })
    
     fs.appendFile("sahaj.txt"," i know i am a genius",(e,d)=>{
            console.log(d);
        })

console.log('Ending');



