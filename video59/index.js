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
console.log("The result is :",sum(3,5));