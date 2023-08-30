// find how many even number is there 

let countEven =[];
let data =[10,15,25,20,60,50];
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if(element%2==0){
    countEven.push(element)  
      
    }
    
}
console.log(`There are total even number is : ${countEven.length}`);

