/* let users = [
    {firstName : "Susan", lastName: "Steward",salary:20000},
    {firstName : "Daniel", lastName: "Longbottom",salary:30000},
    {firstName : "Jacob", lastName: "Black",salary:40000}
  ];
   */
/*   let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  console.log(userFullnames); */

 /*  let user1 = users.map((items)=>{
    return {
        ...items,salary :items.salary+1000,location:"india"
    }
  });
  console.log(user1); */


//   The this argument will be used inside the callback function. By default, its value is undefined . For example, here's how to change the this value to the number 80:

  /* let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
	console.log(this) // 80
}, 80); */



// You can also test the other arguments using console.log() if you're interested:

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
  /*   console.log(element);
    console.log(index); */
    // console.log(array);
    // return element;
}, 80);

