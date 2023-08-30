let value =121;
const revValue =() =>{
    let valueConvert = value.toString().split("").reverse().join("");
    let SecondValue =value.toString();
    if(valueConvert===SecondValue){
        console.log("its a palindrome");
    }else
    {
        console.log("not a palindrome");
    }
};
revValue();