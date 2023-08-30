// display all decimal numbers in array
let numbers = [10,5.6,17.8,67,3.4,88,68.9]
for (let i = 0; i < numbers.length; i++) {
    const element = numbers [i];
    if(element%1!==0){
        console.log(element);
    }
}