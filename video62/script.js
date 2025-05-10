var adjective=undefined
var shop_name=undefined
var another_word=undefined
let x = Math.floor(Math.random() * 3) + 1;
console.log(x);
if(x==1){
var adjective="Crazy";
}
else if(x==2){
var adjective="Amazing";
}
else{
var adjective="Fire"; 
}
let y=Math.floor(Math.random() * 3) + 1;
console.log(y)
if(y==1){
    var shop_name="Engine";
}
else if(y==2){
    var shop_name="Foods";
}
else{
    var shop_name="Garments"; 
}
let z=Math.floor(Math.random() * 3) + 1;
console.log(z)
if(z==1){
    var  another_word="Bros";
}
else if(z==2){
    var another_word="Limited";
}
else{
    var  another_word="Hub"; 
}
console.log(`The name comes out to be :${adjective} ${shop_name} ${another_word}`);