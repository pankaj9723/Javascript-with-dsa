let findLeapYr = 1600;
if((findLeapYr%4==0  && findLeapYr %100 !==0) || (  findLeapYr%400 ==0)){
    console.log("leap year");

}else{
    console.log("not a leap year");
}