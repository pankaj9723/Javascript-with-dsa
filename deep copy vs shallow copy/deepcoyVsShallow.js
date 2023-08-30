// simple object copied to another object

/* let obj ={
    name:'peter',
    subject:"computer science"
};
let str = obj
str.name="sonu";
console.log('obj here :',obj);
console.log('st here : ' ,str) */


// first way  example with of shallow copy
/* let obj1 ={
    name : "rohit"
}
let user1 = Object.assign({},obj1);
user1.name ="hitesh";
console.log('object is :',obj1);
console.log('user1 is',user1); */


// SHALLOW EXAMPLE WITH SPREAD OPERATOR

/* let obj2 ={
    name: "ramya",
    age:25
}

let user2={...obj2} // using SPREAD parameter or destructuring
user2.name ="ben10"
// delete(user2['age']); // delete the key from new object
console.log(obj2);
console.log(user2); */

// this is the problem so deep copy example in next program 
/* let obj3 ={
    name: "rupali",
    age:28,
    address:{
        city :"gurdaspur",
        state:"punjab"
    }
}

let user3={...obj3} // using rest parameter or destructuring
user3.address.city ="dinanagar"
// delete(user2['age']); // delete the key from new object
console.log(obj3);
console.log(user3);  */

// HERE IS THE EXAMPLE OF DEEP COPY
/* function cloneObject (obj){
    // return JSON.parse(JSON.stringify(obj))
    return JSON.parse(JSON.stringify(obj));    
    }
    var obj4= {
        name:'<NAME>',
        emailId:'<EMAIL>'
        };
        var clonedObj =cloneObject(obj4);// cloning the object
        clonedObj.emailId='<EMAIL>';     // changing value of property
        console.log("cloned Obj:",clonedObj) ; */
        

/****************************************** */


        // HERE IS THE EXAMPLE OF DEEP COPY

       /*  let deep ={
            name:'peter',
            age: '26',
            address:{
                city:"noida",
                state:"up"
            }
        };

        let user4 = JSON.parse(JSON.stringify(deep));
        user4.address.city="gurgaon"
        console.log("deep : ",deep);
        console.log("user4",user4); */



        // here  is the problem with JSON
        /* let deep ={
            name:'peter',
            age: '26',
            address:{
                city:"noida",
                state:"up"
            },
            getData:function(){
            return "all data is here"
            }
        };

        let user4 = JSON.parse(JSON.stringify(deep));
        user4.address.city="gurgaon"
        console.log("deep : ",deep);
        console.log("user4",user4); */