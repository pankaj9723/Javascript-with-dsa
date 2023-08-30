
// find the largest number in array

/* for (let i = 0; i < data.length; i++) {
    const element = math.max(...data);
    console.log(element);
} */
// console.log(findMax);

function findMaxValue(){
    let data = [10,50,70,50,90,20,45];
    let found= Math.max(...data) // returns maximum value of an array using spread operator...
    console.log(found);
    
}
findMaxValue()