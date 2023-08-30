/* let a =0, b =1;
console.log(a);
console.log(b);
for (let i = 0; i < 10; i++) {
    let temp = a+b;
    console.log(temp);
    a=b;
    b=temp;
} */

const num =100;
let x =0;
let y =1;
let fn =x+y;
console.log(x);
while (fn<num) {
console.log(fn);
fn = x+y;
x=y;
y=fn;    
}