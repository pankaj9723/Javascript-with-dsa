// impure funciton 

/* let sum =2;
function add(n){
    sum+=n;
    return sum;
}
let res = add(2)
let res1= add(2)
console.log(res);
console.log(res1); */


// PURE FUNCTION 

function addsum(x){
    let sum=2;
    sum+=x;
    return sum;
}
let res = addsum(2)
console.log(res);
let res1 = addsum(2)
console.log(res1);