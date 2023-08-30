// example 1

// Input array
// let arr = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
/* let newArr = arr.map(function (val, index) {
	return { key: index, value: val * val };
}) */

// Display output
// console.log(newArr)

// Example 2: This example uses the array map() method to concatenate the character ‘A’ with every character of the name. 

/* let data = "pankaj";

let result = data.split('').map(item=>{
    ` ${item}${item}`;
})
console.log(result); */

/* const myName ="sonny";
const nameArray = myName.split('');
const newName = myName.split('').map(i =>`${i}${i}`);
console.log(newName); */

let store =[6, 7, 4, 5];
let increase = store.map((item)=>{
    return item + '++';
})
console.log(increase);