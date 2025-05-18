console.log("JS Running....")

function color() {
  const randomR = Math.floor(Math.random() * 256);
const randomG = Math.floor(Math.random() * 256);
const randomB = Math.floor(Math.random() * 256);  
return `rgb(${randomR}, ${randomG}, ${randomB})`;


}
let boxes=document.querySelector(".container").children
Array.from(boxes).forEach(e => {
    e.style.backgroundColor=color();
    e.style.color=color();
})
