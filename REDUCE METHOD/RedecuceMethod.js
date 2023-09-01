// const nums =[15,16,82,10,9,25];

/* const res =nums.reduce((l,item)=>{
    if(item>l ){
        return item
}else{
    return l
}
},0);

console.log(res); */

const people = [ 
    { firstName : 'keerthi' , lastName : 'D' , sal : 150000 },
    { firstName : 'Pankaj' , lastName : 'Kumar' , sal : 60000 },
    { firstName : 'Sai' , lastName : 'Kumar' , sal : 120000 },
    { firstName : 'Swetha' , lastName : 'P' , sal : 160000 },
    { firstName : 'Mayur' , lastName : 'T' , sal : 100000 },
    { firstName : 'Pavan' , lastName : 'Giviti' , sal : 50000 },
 ];



 const res =people.reduce((a,c)=>{
    if(a.sal>=100000 ){
        console.log(`${c.firstName}`);
    
    }
    return c.firstName
},0);

console.log(res);

/*  result = people.reduce((acc,person)=>{
    if(acc===null || person.age >acc)
    return person.age;
return acc;
},null) */

/*  const res =nums.reduce((l,item)=>{
    if(item>l ){
        return item
}else{
    return l
}
},0); */


/* let result = people.reduce((acc,person)=>{

    if(acc) return person.sal;
    return person.age>100000;
},true)


console.log(result); */

/* let result = people.reduce((acc,person)=>{
    if(acc===null || person.sal >100000)
    return person.sal;
return acc;
},null)
console.log(result); */

/* const res =people.reduce((l,item)=>{
    if(item.sal>=100000 ){
        return item.sal
}else{
    return l
}
},0); */




