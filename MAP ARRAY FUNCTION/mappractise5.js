//calling a function on each item in an array by sonny sanga

const numberArray = [2,4,6,8,10];
/* const doubleAraay =numberArray.map(numberItem=>{
    return 2*numberItem; //returns the value of 3 times the original number
})
console.log(doubleAraay); */



// let clean this up with ES6

const makeTriple = numberItem => numberItem*3;


const doTriple = numberArray.map(makeTriple);

//OR

const doTriple2 = numberArray.map((n)=> { return n*2});

// we can also write this thing like below
const doQuadrilateral = numberArray.map(n=> n*4);

console.log(doQuadrilateral);
console.log(doTriple);
console.log(doTriple2);