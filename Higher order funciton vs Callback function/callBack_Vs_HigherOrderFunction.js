// Higher order Function 
/* Function which takes another function as an arguments is called HOF.Function

Callback Function 
Function which get passed as an arguments to another function is called call back Function */
debugger;
const adds =(a,b)=>{
    return a+b;
}

const multiply =(a,b)=>{
    return a*b;
}



// HOF FUNCITON BELOW 

const Calculator = (x,y,operation)=>{
    return operation(x , y); // Here we are passing the add function as argument and calling it with x & y values
}

console.log(Calculator(5,2,adds));
console.log(Calculator(5,2,multiply));