let marks = [40,10,20,25,30];

let result =marks.reduce((acc,curr,index)=>{
    debugger;
    let total= acc += curr;
    if(index===marks.length-1){
        return total/marks.length;
    }
    return total
})
console.log(result);