/* let stud = {
    firstName:"vijay",
    lastName : "devarkonda",
    age :28,
    marks :[50,60,70],
    address:{pincode:14351,street:"yalgal"},
}
 */
/* function getFullName(fName,lName){
    return fName+" "+lName;
}

let fullName = getFullName(stud.firstName,stud.lastName);
console.log(fullName); */

/* const getFullName = function(fName,lName){
    return fName+ " "+lName;
}

let fullName = getFullName(stud.firstName,stud.lastName);
console.log(fullName); */

/* let stud = {
    firstName:"vijay",
    lastName : "devarkonda",
    age :28,
    marks :[50,60,70],
    address:{pinCode:14351,street:"yalgal"},
    getFullName:function(fName,lName){
        return fName+" "+lName;
    }
} */

/* let fullName =stud.getFullName(stud.firstName,stud.lastName);
console.log(fullName); */

// console.log(stud.firstName+" "+stud.lastName);


// this function like this
/* let emp ={
    firstName:"pankaj",
    lastName:"kumar",
    qualiFication:"Btech",
    empId:35,
    printDetails:function(){
        return this.firstName+" "+this.lastName;
    }
    
}

console.log(emp.printDetails()); */


// returning with parameter 

let emp ={
    firstName:"pankaj",
    lastName:"kumar",
    qualiFication:"Btech",
    empId:35,
    printDetails:function(fName,lName){
        return fName+" "+lName;
    }
    
}

let fullname = emp.printDetails(emp.firstName,emp.lastName);
console.log(fullname);