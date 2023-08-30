/* let n =10;
let primeOrNot =true;
for (let i = 2; i < n; i++) {
    if(n%i==0){
        
        primeOrNot =false;
    }
}

if(primeOrNot==true){
    console.log("prime number");
}else{
    console.log("not a prime number");
} */

/* let n =17;
let primeOrNot =0;
for (let i = 2; i < n; i++) {
    if(n%i==0){
        
       primeOrNot++;
    }
}

if(primeOrNot){
    console.log("not a prime number");
}else{
    console.log(" a prime number");
} */

let data = [13,15,16,19,11];
let storePrime = []
let primeNumber =false;
for (let i = 0; i < data.length; i++) {
    let element = data[i];
    for (const item of element) {
        if(item%i==0){
            primeNumber= true;
        }
    }
}
if(primeNumber){
    console.log("here is primenumber");
}