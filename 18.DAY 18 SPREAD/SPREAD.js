let a = [10,20,30,40];
let b =a;

b[3]=50
console.log(a);
console.log(b);
console.log("****************");

let d = [100,200,300,400];
let e =[...d];

e[3]=500;
console.log(d);
console.log(e);