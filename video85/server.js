console.log("its the backend server");
console.log("hello world");
var slugify = require("slugify");

let a = slugify("some string"); // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b = slugify("some (@$#%98ystring", "_"); // some_string
console.log(b);
