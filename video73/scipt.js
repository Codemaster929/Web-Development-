console.log("Hello world!!")
let title=prompt("Enter the title of your video!!")
let cname=prompt("enter your channel name!!")
let view=prompt("enter your views on the video!!")
let time=prompt("enter how long time u uploaded the video!!")
let duration=prompt("Enter how long your video is: (like this- '20:30')")
let thumbnail=prompt("Enter the link to your thumbnail:")
console.log(title);
console.log(cname);
console.log(view);
console.log(time);
console.log(duration);
console.log(thumbnail);
function card(cname, view,time,title,duration, thumbnail) {
document.querySelector(".title").innerHTML = title;
 document.querySelector(".cname").innerHTML = cname;
document.querySelector(".views").innerHTML = view;
document.querySelector(".monthsago").innerHTML = time;
document.querySelector(".overlay").innerHTML = duration;
document.querySelector(".thumbnail img").src = thumbnail;



}

  card(cname, view, time, title, duration, thumbnail);

