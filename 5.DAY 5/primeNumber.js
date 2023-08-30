var FindPrime = 17;
for (let i = 2; i < FindPrime; i++) {
  if (FindPrime % i == 0) {
    var store = `${FindPrime} is not a prime number`;

    break;
  } else {
    var store = `${FindPrime} is prime number`;
  }
}

console.log(store);


/* if((FindPrime%2==0) || (FindPrime%3==0)){
    console.log("its not a prime number");
}else{
    console.log("its a prime number");
} */

/* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} */
