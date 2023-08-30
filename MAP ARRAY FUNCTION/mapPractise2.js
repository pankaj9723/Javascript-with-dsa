let obj ={
    name:"anil",
    10:"this is number key"
}

let data = new Map([
    ["name","Anil"],  //key and value pair
    [Number,"this is a number key in map"]
])

// ADD NEW VALUE IN MAP
data.set('city',"noida")

// ADD ARROW FUNCTION AND OBJECT IN MAP

data.set({},'this is a object type')
data.set(()=>{},'this is arrow type')


// console.warn(obj.10);
/* console.log(data.keys());
console.log(data.values());
console.log(data.size);
console.log(data.has("name"));
console.log(data.has("name1")); */

// for each loop in map

/* data.forEach((v,k)=>{
    console.log(k,v);
}) */




// FOR LOOP IN MAP
/* for(x of data){
    console.log(x[0]);
}
 */


/* for(x of data){
    console.log(x[1]);
}
 */


/* for([k,v] of data){
    console.log(k);
    console.log(v);
}
 */




// this below loop automatically predict by vs code
/* for (const iterator of data) {
    if(!iterator[1]){
        continue;
        }else{
            console.log(`${iterator[0]} : ${iterator[1]}`);
            }} */
           
           
            

                   
