import fs from "fs/promises"
let a= await fs.readFile("video87/sahaj2.txt")
let b= await fs.appendFile("video87/sahaj.txt"," Am i a new file \n\n\n\n or the old one")
console.log(a.toString(),b)
