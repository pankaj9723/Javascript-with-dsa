/* let n = 15;
let primeOrNot =true;
//variable to check if the number is a prime or not.
for (let i = 2; i < n; i++) {
    if(n%i==0){
        primeOrNot = false;
    }
    
}

if(primeOrNot ==true){
    console.log(" prime number");
}else{
    console.log("not a prime number");
} */





let n=13;
let findNumber = false;
for (let i = 2; i < n; i++) {
   if(n%i==0){
    findNumber = true;

   }
    
}
if(findNumber == true){
    console.log(' not a Prime Number');
}else{
    console.log(" prime number");
}