let emp = {
    firstName :"pankaj",
    lastName : "kumar",
    qualification: "btech",
    employeeNo:35,
    getFullName:function(){
        return this.firstName+ " "+ this.lastName;
    }
}
let getFullName = emp.getFullName(emp.firstName);
console.log(getFullName);