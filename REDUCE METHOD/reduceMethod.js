/* const marks= [10,20,30,40];
//reduce;
let result = marks.reduce((a,b)=>{
    return a+b ;  
    //sum of all the elements in array
})
console.log(result); */


// MAP ==> item+5000=> return new array// ONE PARAMETER
// FILTER ==> item > return new array // ONE PARAMETER

// REDUCE ==> RETURN ONLY SINGLE VALUE // TWO PARAMETER

/* const marks = [5,10,15,20]

const output = marks.reduce((a,item)=>
    a+item)

console.log(output); */


const marks1 =[10,20,30,40,50];

//one way
const output1 = marks1.reduce((a,b)=>a+b,0)  // zero is a initial value it takes 0+10 two parameter a ==0 b =10


// a =0, b =10 => 10;
// a=10 ,i =20 => 30,
// a=30, i =30 =>60,
// a= 60,, i =40 =>100,
// a=100, i=50=>150
//a=150 answer 
console.log(output1);
const output2 = marks1.reduce((a,item)=>{
    return a+item;
});

// another way

//initial value a=10 , b =20 =>30
// a=30, i =30 =>60,
// a= 60,, i =40 =>100,
// a=100, i=50=>150
//a=150 answer 

console.log(output2);
