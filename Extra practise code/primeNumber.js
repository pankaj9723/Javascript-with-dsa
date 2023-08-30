/* let n =15;
let find =0;
for (let i = 2; i < n-1; i++) {
    if(n%i==0){
        find++
    }
    
}

if(find==0){
    console.log("its  prime number");
}else{
    console.log("its not a prime number");
} */

/* let marks = [56,78,89,77,49,99,10];
let sum =0;
for (let i = 0; i < marks.length; i++) {
    sum=sum+marks[i];
    
}
let total_marks=(marks.length*100)
// console.log(total_marks);
let result =(sum*100)/total_marks;
console.log(result); */

/* 
let marks = [56,78,89,77];

let [math,eng,punj,gk] =marks;
console.log(math);

let addition = math+eng+punj+gk;
console.log(addition);
 */

// fibnaocii series

/* let findfib =10;
let a =0;
let b =1;
console.log(a);
console.log(b);
for (let i = 0; i < findfib; i++) {
    let store =a+b;
    console.log(store);
    a=b;
    b =store
    
} */

//palindrome
/* let p ="151";
let str ="";
for (let i = p.length-1; i >=0; i--) {
    str+=p[i];
    
}


if(str==p){
    console.log("palindrome");
}else
{
    console.log("not a palindrome");
}
 */


// display the total number of even number

/* let store=[];
let data =[10,15,25,20,60,50];
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if(element%2==0){
        store.push(element)
        console.log(element);
    }
}

console.log(`there are ${store.length}`); */

//find max value

/* function findMax(){

   
let arr = [50, 60, 20, 10, 40,110];
let maxValue =arr[0];
let minValue =arr[0];

for (let i = 0; i < arr.length; i++) {
  if(arr[i]>maxValue){
    maxValue=arr[i];
  }
  else if(arr[i]<minValue){
    minValue=arr[i];
  }
}
console.log(`max value : ${maxValue}`);
console.log(`min value : ${minValue}`);

}
findMax(); */

/* let z =1.5;
if(z%1!==0){
    console.log(`${z} is a decimal`);
}else{
    console.log("not a decimal");
} */


/* function closure(){
    let a =47;
   return function addition(){
        let b =33;
       console.log(a);
       console.log(b);
    }


}
let store = closure();
console.log(store()); */


/* let lyr =2020;
if((lyr%4==0)&&(lyr%100!==0) ||(lyr%400==0) ){
    console.log("its a leap year");

}else{
    console.log(("not a leap year"));
} */


/* function cls(){
    let x =15;
    function repl(){
        let z =14;
        console.log(x);
    }
    repl()
}
cls() */


/* let n =10;
let a = 0;
let b =1;
console.log(a);
console.log(b);
for (let i = 0; i < n; i++) {
    let store =a+b;
    console.log(store);
    a=b;
    b=store;
    
} */


let n ="123";
let str ="";
for (let i = n.length-1; i >=0; i--) {
    str+=n[i];
    
}

if(n==str){
    console.log("palindrome");
}else{
    console.log("not a palindrome");
}