let emp = {
    firstName :"pankaj",
    lastName : "kumar",
    qualification: "btech",
    employeeNo:35,
    getFullName:function(){
        return this.firstName+ " "+ this.lastName;
    }
}
let getFullName = emp.getFullName();
console.log(getFullName);


/* let emp1 = {
    firstName :"Pankaj",
    lastName : "Kumar",
    qualification: "btech",
    employeeNo:35,
    getFullName:function(firstName,lastName){
        return firstName+ " " + lastName;
    }
}
let getFullName1 = emp1.getFullName(emp1.firstName,emp1.lastName);
console.log(getFullName1); */

function right(){
    console.log("hello");
}
right("my dear"); // hello is printed on the screen