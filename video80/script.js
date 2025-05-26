console.log("hello , from here OOPs starts!")
// let animal={
//     eats:true
// }
// let rabbit={
//     jumps:true
// }
// rabbit.__proto__= animal;
//
class animal{
    constructor(name){
        this.name= name
        console.log('object is created...');
        
    }
    eats(){
        console.log('khaa raha hu');
    }
    jumps(){
        console.log('khud raha hu');
        
    }
}
class lion extends animal{
 constructor(name){
      super(name)
        console.log('object is created...and he is a lion');
    }
     eats(){
        console.log('khaa raha hu tere ko ');
    }
}
let a= new animal("jeff dada ");
console.log(a);
let l= new lion("sheera");
console.log(l);