
//fibonacci series program
/* let n=10;
let a =0;
let b=1;

for (let i = 0; i < n; i++) {
   let store =a+b;
   console.log(a);
   a=b;
   b=store;
    
}
 */
let x= 321
let n = String(x);
let str ="";
for (let i = n.length-1; i >=0; i--) {
    str+= n[i]
}
if(str==n){
    console.log("palindrome");
}else{
    console.log("not a palindrome");
}