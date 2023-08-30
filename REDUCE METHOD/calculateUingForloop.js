// let marks =[1,2,3,4,5];
// let sum =0;
/* for (let i = 0; i < marks.length; i++) {
   sum+=marks[i];
} */
// console.log(sum);

let marks = [1, 6, 3, 4, 5,10,4];

function findMax(arr) {
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >maxValue) {
      maxValue = arr[i];
    }
    
  }
  return maxValue;
}
const result =findMax(marks);
console.log(result);

/* function findmarks(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findmarks(marks)); */
