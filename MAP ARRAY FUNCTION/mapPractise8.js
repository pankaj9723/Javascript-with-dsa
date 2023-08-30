/* const emp = [
    {name:"Andy",salary:40000},
    { name:'Jane', salary : 50000 },
    {name:"charlie",salary:30000},
];

const reformatEveryThing = emp.map((emp)=>({
    [emp.name]:emp.salary}));

    // USING ES6 DESTRUCTURING

    const reformating2 = emp.map(({name,salary})=>({[name]:salary+2000}));

    console.log(reformatEveryThing);
    console.log(reformating2); */

const emp = [
  { name: "Andy", salary: 40000, study: "btech" },
  { name: "Jane", salary: 50000, study: "msc" },
  { name: "charlie", salary: 30000, study: "mca" },
];

let hikeSal = emp.map((item)=>{
     return {
        ...item,salary: item.salary+5000
     }
    })
console.log(hikeSal);

// const reformating2 = emp.map(({ name, salary, study }) => ({ name,salary }));

// console.log(reformatEveryThing);
// console.log(reformating2);
