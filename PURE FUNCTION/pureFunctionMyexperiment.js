


/* const pureAssoc = (key, value, object) => {
    const newObject = { ...object };
  
    newObject[key] = value;
  
    return newObject;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const result = pureAssoc('shoeSize', 400, person);
  
  console.log({
    person,
    result
  }); */


//   IMPURE FUNCTION 

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
  });

  console.log({
    person,
    result
  }); */



/*   let x =2;
  function hero(a){
    
    console.log(a);
    a++
  }
  hero(x);
  hero(x); */


  /* let x = 2;

const add = (y) => {
  return x += y;
};

let store = add(4); // x === 6 (the first time)
console.log(store);
console.log(store); */


// IMPURE FUNCITON 
/* const array =[1,2,3]
function addElementToArray(element){
    array.push(element)
}
addElementToArray(4)
console.log(array); */


// PURE Function
/* const array =[1,2,3]

function addElementToArray(a,element){
    return [...a,element]
    
}
addElementToArray(array,4)
console.log(array);
 */
/* const array =[1,2,3]
function addRandom(a,element){
    return [...a,element,Math.random()]
}
console.log(addRandom(array,1)); */


/* let tax = 20;
function calculateGST(productPrice) {
	return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15))
console.log(calculateGST(15)) */



function operationAdd(a, b){ // A pure function adding two integers passed in it.
    return a+b;
}

function operationDivide(a, b){  // Pure function to divide two integers passed in it.
    return a/b;
}

function operationMulti(a, b){    // Pure function to multiple two integers passed in it.
    return a*b;
}
console.log(        // Calling all the pure functions
  operationAdd(2,5),
  operationMulti(3,2),
  operationDivide(20,5)
);



// IMPURE Function

/* const message = 'Hi there! ';
function myMessage(value) {
    return `${message} ${value}`
}
console.log(myMessage('Mudit')); */



