// Input array
let arr = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
let newArr = arr.map(function (val, index) {
	return { key: index, value: val * val };
})

// Display output
console.log(newArr)

// EXAMPLE 2

//Input string
let name = "Geeks";

// New array of character and names
// concatenated with 'A'
let newName = Array.prototype.map.call(name, function (item) {
	return item + 'A';
})

// Display output
console.log(newName)


// Example 3: This example uses the array map() method to return the square of array

// Map is being called directly on an array
// Arrow function is used
console.log([6, 7, 4, 5].map((val) => {
	return val * val;
}))
