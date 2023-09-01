// five sum of all materials required to build a house


/* const materials =[{
    name: 'planks',
    cost:30000
},

{
    name:'wooden frame',
    cost:24000 
},
{
    name :'iron rod',
    cost:50000
}];


const result = materials.reduce((prev,material)=>{
    return prev+material.cost;
},0);

console.log(result); */


// convert a two-dimensional array of key-value into an object(some libraries)
/* const keyValuePairs=[
    ["username", "decode"],
    ["memberSince","2020-04-06"] ,
    ["age",35]
];

const result = keyValuePairs.reduce((prev,keyValuePairs)=>{
    const key =keyValuePairs[0];
    const value = keyValuePairs[1];
    prev[key]=value;
    
    return prev
},{})

console.log(result); */



// find the max or min salary of a list of people object


/* const people =[
    { name:"DOM",occupation:"Software Developer",salary:90000},
    { name:"Max",occupation:"Mechanic",salary:50000},
    { name:"Beth",occupation:"Teacher",salary:150000},
    { name:"Charlie",occupation:"Architecture",salary:80000}
];
const result = people.reduce((prev,person)=>{
    if(person.salary>prev){
        return person.salary;
    }
    return prev;
},0);

console.log(result) */;


// count the occurrences of each string in ana array

const colors = ["green","green","red","blue","red","red"];

const results = colors.reduce((prev,color)=>{
    prev[color]=(prev[color]||0)+1;
    return  prev ;
},{});
console.log("results:",results );