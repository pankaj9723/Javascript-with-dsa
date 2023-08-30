let printFib = 10;
let a =0;
let b=1;

console.log(a);
console.log(b);
for (let i = 0; i < printFib; i++) {
    
   let store = a+b; //1
   console.log(store); //1
    a =b;//a=1 and b =0 a store 1
    b =store;
    
}