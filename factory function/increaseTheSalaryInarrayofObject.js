const emp = [ {firstName : "vijay",Salary : 50000},
                {firstName : "ram",Salary : 60000},
                {firstName : "Krishna",Salary : 75000},
]

let output = emp.map(item => {
    return {
        ...item,Salary:item.Salary+5000
    }
    
})


console.log(output);