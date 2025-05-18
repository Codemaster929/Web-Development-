console.log("Hello world !!")
// let boxes= document.getElementsByClassName("box")
// console.log(boxes)
//  boxes[2].style.backgroundColor ="blue";
// document.getElementById("bluebox").style.backgroundColor ="blue";
// below fun works only on the first box!!
// document.querySelector(".box").style.backgroundColor="blue";
// what if i want to select all the boxes at once...
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="blue";

    
}) 