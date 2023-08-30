// A pure function adding two integers passed in it.
/* function operationAdd(a, b){ 
    return a+b;
} */
// Pure function to divide two integers passed in it.
/* function operationDivide(a, b){  
    return a/b;
} */
// Pure function to multiple two integers passed in it.
/* function operationMulti(a, b){   
    return a*b;
} */
// Calling all the pure functions
/* console.log(       
  operationAdd(2,5),
  operationMulti(3,2),
  operationDivide(20,5)
);
 */
// console.log(operationMulti(5,7));

// PURE FUNCTION EXAMPLE 2

/* function calculateGST(productPrice) {
	return productPrice * 0.05;
}
console.log(calculateGST(15)) */

/* function trialCopy(key,value,object){
    const newObj= {  ...object};
     newObj[key]=value;
     return newObj;
  };
  
  const person1 ={
  name:"mojo"
  };
  const result1 = trialCopy('sizeable',400,person1)
  console.log({person1,result1});
 */

//   PURE FUNCTION EXAMPLE

/* const openBankAccount = (amount) => ({ amount });
const hdfcAcc = openBankAccount(10);
const sbiAcc = openBankAccount(20);
console.log(hdfcAcc, sbiAcc);

function sumAccountBalance(acc1, acc2) {
  return acc1.amount + acc2.amount;
}
console.log(sumAccountBalance(hdfcAcc, sbiAcc)); */



/* const func2 = (x, y) => {
    return x + y;
  };
 let result = func2(15,25);
 let result1 = func2(15,15);
 let result2 = func2(15,75);
 let result3 = func2(65,55);
 
console.log(result,result1,result2,result3); */


// experiment with two parameter incuding object
/* const func2 = (a, b) =>( {
    a,b
  });
 let result = func2(15,25);
 let result1 = func2(45,5);
 let result2 = func2(15,75);
 let result3 = func2(65,55);

 function sumOfResult(x,y){
    return x.a+x.b;
 }
 
 console.log(sumOfResult(result));
 console.log(sumOfResult(result)); */
/* console.log(result,result1,result2,result3);
console.log(result+result1+result2+result3); */


// https://www.youtube.com/watch?v=SQxEb4c8R7Q&ab_channel=CodingScenes

// IMPure function same in the video coding scene

/* const func2 = (p) =>( {
    p
  });
 */

//   we can also write in below way above code

  function func2(p) {
    // p:p
    return{
        p:p
    }
    
  };



 let result = func2(15);
 let result1 = func2(45);
/*  let result2 = func2(15);
 let result3 = func2(65); */
console.log(result,result1);


 function sumOfResult(x,y){
    return x.p+y.p;
    
 }
 
// IT WILL GIVE THE SAME OUTPUT (ZERO SIDE EFFECT)
 console.log(sumOfResult(result,result1));
 console.log(sumOfResult(result,result1));
 console.log(sumOfResult(result,result1));
 console.log(result,result1);

//  console.log(sumOfResult(result1)); 