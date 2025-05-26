console.log('Hello world!!');
let a=prompt("enter the value of a ")
let b=prompt("enter the value of b")
if(isNaN(a)|| isNaN(b)){
 throw SyntaxError("Only Numbers can be added ")
}
function main() {
    
    try {
        let sum=parseInt(a)+parseInt(b);
        console.log("the result is ",sum)
        return true        
} 
    catch (error) {
        console.log('Error a gaya bhai');
        return false 
    }
    finally{
        console.log('The code has executed successfuly');
        
    }
}
main()