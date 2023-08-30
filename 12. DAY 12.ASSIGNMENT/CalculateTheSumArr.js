let marks = [56,78,89,77,49,99];
let sum =0;
for (let i = 0; i < marks.length; i++) {
     sum += marks[i];
    
}
let findPercentage = parseInt((sum*100)/600)
console.log(findPercentage);
if(findPercentage>80){
    console.log("you got first position");
}
else if(findPercentage>60 && findPercentage<80){
    console.log("you got second position");
}
else{
    console.log("you got third position");
}
console.log(`your total marks is ${sum}`);
console.log(`your percentage is ${findPercentage}`);
