/* const marks = [1,3,5,6,7,8];
function myCallBack(sum,item){
    return sum+item
}

const output = marks.reduce(myCallBack,0);
console.log(output); */

/* const marks1 = [2,3,4,5,7];

const result = marks1.reduce((a,b)=>{return a+b,0)} */


/* const euros = [29.76, 41.85, 46.5];

const sum = euros.reduce((total, amount) => total + amount); 

console.log(sum); */


const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
