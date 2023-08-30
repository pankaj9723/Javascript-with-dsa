// check if triangle is equilateral,scalene, or isosceles
let sideValue1 = 45;
let sideValue2 = 45;
let sideValue3 = 45;
if (sideValue1 == sideValue2 && sideValue2 == sideValue3){
    console.log("its a equilateral triangle");
}else if(sideValue1==sideValue2 || sideValue3==sideValue2 || sideValue1 == sideValue2){
    console.log("its  isosceles triangle");
}else if(sideValue1 !==sideValue2 && sideValue2!==sideValue3 ){
    console.log("its scalene triangle");
}