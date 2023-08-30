// THIS IS TOTALLY IMPURE FUNCITON AND HAS SIDEFEECT


// function func2(p) {
//   // p:p
//   return{
//       p:p
//   }
  
// };



// let result = func2(15);
// let result1 = func2(45);
// /*  let result2 = func2(15);
// let result3 = func2(65); */
// console.log(result,result1);


// function sumOfResult(x,y){
//    x.p+=y.p;
//    return x.p;
// }

// // IT WILL GIVE THE SAME OUTPUT (ZERO SIDE EFFECT)
// console.log(sumOfResult(result,result1));
// console.log(sumOfResult(result,result1));
// console.log(sumOfResult(result,result1));
// console.log(result,result1);






// HERE ARE THE CHANGES



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
    let first ={...x}
    let second={...y}
     first.p+=second.p;
     return first.p;
  }
  
  // IT WILL GIVE THE SAME OUTPUT (ZERO SIDE EFFECT)
  console.log(sumOfResult(result,result1));
  console.log(sumOfResult(result,result1));
  console.log(sumOfResult(result,result1));
  console.log(result,result1);