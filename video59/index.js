console.log("Faulty Calculator");

let random = Math.random() < 0.1;
if (random == true) {

    function sum(a, b) {
        return a - b;
    }
    function subtract(a, b) {
        return a / b;
    }
    function multiply(a, b) {
        return a + b;
    }
    function divide(a, b) {
        return a ** b;
    }
}

else {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
}
    
let a =prompt("Enter first no :");
let b=prompt("Enter second no:");
 let symbol=prompt("Enter the operation:");
 if(symbol=="+"){
    alert("The answer is:"+sum(a,b));

 } 
 else if(symbol=="-"){
    alert("The answer is:"+subtract(a,b));
 }
 else if(symbol=="*"){
    alert("The answer is:"+multiply(a,b));
 }
else if(symbol=="/"){
    alert("The answer is:"+divide(a,b));
}
else{
    alert("wrong input!!")
}