/* let n =17;
let numberIsPrime =true;
for (let i = 2; i < n; i++) {
    if(n %i == 0){
      numberIsPrime=false
    }
    
}
if(numberIsPrime==true){
    console.log("its a prime number");
}else{
    console.log("not a prime number");
} */


///Prime Number

// 7 , n  => 2 , 3 , 4 , 5, 6 (n-1)
// 17 => 2 , 3 , 4, 5 , 6.....16 (n-1)
// 189 => 2 , 3 .................. 188 (n-1)


let n=8;
let count =0;
 for(let i=2 ; i < 7 ; i++){ // 2 , 3 , 4, 5 , 6 
    if(n%i==0){
        count = count+1
    }
 }


if(count == 0 ){
    console.log(n + " is a Prime Number");
}else{
    console.log(n + " is not a Prime Number");
}