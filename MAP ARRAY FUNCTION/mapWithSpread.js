// ARRAY OF OBJECTS

// FIRST EXAMPLE
/* let users = [
    {firstName : "Susan", lastName: "Steward",salary:20000},
    {firstName : "Daniel", lastName: "Longbottom",salary:30000},
    {firstName : "Jacob", lastName: "Black",salary:40000}
  ];

  let user1 = users.map((items)=>{
    return {
        ...items,salary :items.salary+1000
    }
  });
  console.log(user1);  */

  
  //SECOND EXAMPLE

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