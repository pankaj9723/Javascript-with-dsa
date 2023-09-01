const people =[
    {id:"1",name:"Leigh",age:35},
    {id:"2",name:"jenny",age:30},
    {id:"3",name:"Heather",age:48},
    {id:"4",name:"vipan",age:20},
];

let result;

// count 

result = people.reduce((acc,person)=>acc+1,0)

// sum of ages
result=people.reduce( (acc , person)=>acc+person.age,0)


// array of names (map)
 
result = people.reduce((acc,person)=>[...acc,person.name,person.age],[]);

// console.log(result);


// convert to id => person lookup(dict)
result = people.reduce((acc,person)=>{
    return{...acc,[person.id]:person};
},{})

// console.log(result["3"]);




//max age

result = people.reduce((acc,person)=>{
    if(acc===null || person.age >acc)
    return person.age;
return acc;
},null)
// console.log(result);


// min age 

result = people.reduce((acc,person)=>{
    if(acc===null || person.age <acc)
    return person.age;
return acc;
},null)


// find by name

result = people.reduce((acc,person)=>{
    if(acc!==null) 
    return acc;
if(person.name === "jenny")  // this is the condition that we are looking for
return person;
return null;
},null);


// all over 18

result = people.reduce((acc,person)=>{

    if(acc) return false;
    return person.age>40;
},true)



//count occurrences
const orders = [
    {id :"1", status:"pending"},
    {id :"2", status:"pending"},
    {id :"3", status:"canceled"},
    {id :"4", status:"shipped"},
    
];

result =orders.reduce((acc,order)=>{
return{...acc,[order.status]:(acc[order.status]||0)+1};
},{})
console.log(result);

//flatten an array
const folders =[
    "index.js",
    ["flatten.js","map.js"],
    ["ajay.js",["all.js","count.js"]],
    
    ];

    function flatten(acc,item){
        if(Array.isArray(item)){
            return[...acc,...item.reduce(flatten,[])];
        }
        return [...acc,item];
    }
    result =folders.reduce(flatten,[]);



    // all result here

// console.log(result);