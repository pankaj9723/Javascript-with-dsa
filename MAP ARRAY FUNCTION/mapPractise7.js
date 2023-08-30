/* const numbers = [1,4,9];
const roots = numbers.map((num)=>Math.sqrt(num));

console.log(numbers);
console.log(roots); */

// using map to refromat objects in an array

const players = [
    {name:"Andy",score:10},
    { name:'Jane', score : 25 },
    {name:"charlie",score:30},
];

const reformatEveryThing = players.map((player)=>({
    [player.name]:player.score}));

    // USING ES6 DESTRUCTURING

    const reformating2 = players.map(({name,score})=>({[name]:score}));

    console.log(reformatEveryThing);
    console.log(reformating2);