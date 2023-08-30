// converting string to array

/* const myName ="sonny";
const nameArray = myName.split('');
const newName = myName.split('').map(i =>`${i}${i}`);
console.log(newName);

const joinedNewName = newName.join('')
console.log(`my name is ${joinedNewName}`) */


// Reforming Array objects

const names = [
    {name:'sonny',likes:'Coding'},
    {name:'jay',likes:'Gaming'},
    {name:'Elon',likes:'Musk'},
   
]
/* const namesBylikes = names.map(item=>{
    const container ={ };
    container[item.name] = item.likes;
    container.noOfLetters =item.name.length;

    return container
})
console.log(namesBylikes); */


const namesBylikes = names.map((item)=>({
    
    [item.name] : item.likes,
    noOfLetters :item.name.length,

   
}))
console.log(namesBylikes);