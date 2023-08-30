/* const empSals = [50000,60000,70000,80000];
const bonus = empSals.map((item)=>{
return item+10000;})
console.log(bonus);

const marks = [70,30,40,50,90,66];
const addMarks = marks.map((item)=>{
    return item+10
})

console.log(addMarks);
 */

const emp = [ {firstName : "vijay",Salary : 50000},
                {firstName : "ram",Salary : 60000},
                {firstName : "Krishna",Salary : 75000},
]




const newArray = emp.map(employee=>({
    firstName:employee.firstName,
    sal:employee.Salary+5000
}))


console.log(newArray);
/* const newSalary = emp.map((item)=>({
    
    firstName : item.firstName,
    Salary :item.Salary+5000,

   
}))

console.log(newSalary); */

/* const addBonus = emp.map((item)=>({
    [item.name] : item.firstName,
    [item.Salary] :item.Salary,;
})) */
// console.log(addBonus);
// console.log(addBonus());


/* const addBonus = emp.map((keys,value)=>{
    return`${emp[keys].firstName} ${emp[value].Salary}`;
}) */