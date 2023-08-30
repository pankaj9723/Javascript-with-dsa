// JavaScript map() Function Syntax
// The syntax for the map() function is as follows:

// array.map(function(currentValue, index, arr), thisValue)


/* const oldarr =['vinod','bahadur','thapa'];
console.log(oldarr[0]);
console.log(oldarr[1]);

const newArr = oldarr.map(function(calue){
    return calue + ' is a good boy';
});
console.log(newArr);
console.log(oldarr); */

/* const studentData = [
    {id:1, name:"vinod",degree:"MCS"},
    {id:2, name:"thapa",degree:"MBA"},
    {id:3, name:"pankaj",degree:"BTECH"},
    {id:4, name:"vipan",degree:"MSC"},
    {id:5, name:"kumar",degree:"MTECH"},
    
];

let result = studentData.map((cValue)=>{
    return `MY name is : ${cValue.name} & My qualification : ${cValue.degree}`;
});

console.log(result);
document.getElementById(show_data).innerHTML=result; */


const studentData = [
    {id:1, name:"vinod", degree:"MCS"},
    {id:2, name:"thapa", degree:"MBA"},
    {id:3, name:"pankaj", degree:"BTECH"},
    {id:4, name:"vipan", degree:"MSC"},
    {id:5, name:"kumar", degree:"MTECH"},
    
];

let valueHere = studentData.map((cValue)=>{
    return `MY name is : ${cValue.name} & My qualification : ${cValue.degree} <br/>`;
});

console.log(valueHere);
// document.getElementById('show_data').innerHTML = valueHere;