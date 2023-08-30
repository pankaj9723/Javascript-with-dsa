/* const message = 'Hi there! ';
function myMessage(value) {
    return `${message} ${value}`
}
console.log(myMessage('Mudit'));
 */

/* const impureAssoc = (key, value, object) => {
    object[key] = value;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const result = impureAssoc('shoeSize', 400, person);
  
  console.log({
    person,
    result
  }); */


//   Purifying It Up
/* const pureAssoc = (key, value, object) => ({
  ...object,
  [key]: value
});

const person = {
  name: 'Bobo'
};

const result = pureAssoc('shoeSize', 400, person);

console.log({
  person,
  result
}); */

/* */

/* let tax = 20;
function calculateGST(productPrice) {
	return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15)) */


// impure function which has side effect


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
   x.p+=y.p;
   return x.p;
}

// IT WILL GIVE THE SAME OUTPUT (ZERO SIDE EFFECT)
console.log(sumOfResult(result,result1));
console.log(sumOfResult(result,result1));
console.log(sumOfResult(result,result1));
console.log(result,result1);



