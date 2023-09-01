/* const cart = [
    {name:'laptop',price:1000,},
    {name:'mouse',price:500,},
    {name:'Keyboard',price:800,}

] */
/* let total =0;
for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total =total+item.price;
}
console.log(total); */


// same thing with function
/* function findSum(n){
    let sum =0;
    for(let i =0;i<n.length;i++)
    {
        sum+=n[i].price;
    }
    return sum;
}
const result = findSum(cart);
console.log(result); */




const shop = [
    {name:'laptop',price:1000,},
    {name:'mouse',price:500,},
    {name:'Keyboard',price:800,}

]

/* function totalPrice(acc,item){
return acc+item.price;
}

const result = shop.reduce(totalPrice)
console.log(result); */

const result = shop.reduce((a,b)=>{
    let v =+ a+b.price;
    return v
},0)
console.log(result);