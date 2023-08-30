// find a palindrome first method

let findPalindrome = "717"
let str =""
for (let i = findPalindrome.length-1; i >=0; i--) {
    
    str+= findPalindrome[i]
    
}
if(str == findPalindrome){
    console.log("palindrome number",str);
}else
{
    console.log("not a palindrome number",str);
}


// second method of finding palindrome series

/* let findPalindrome ="141";
let str ="";
function palindrome(data){
    str =data.reverse().join('')
    return str
}
let res =palindrome(findPalindrome.split(''))
if(res === findPalindrome){
    console.log("palindrome number");
}else{
    console.log("not a palindrome number");
} */

// third way to check for the palindromic numbers using recursion
/* let palindrome = 111;
function findPalindrome(num){
    let revNum =0
    while(num >0){
        revNum =(revNum*0) + num%10;
        // console.log(revNum);
        num =Math.floor(num/10)
    }
    return revNum;
}
let res = findPalindrome(palindrome)
if(res === palindrome){
    console.log(`The given ${palindrome} is Palindrome Number`);  // output
    } else {console.log("non palindrome",palindrome);
} */

/* let num = "121";
let orginalNum =num;
let reverse =0;
while(num !=0){
    reverse =(reverse*10)+(num%10);
    num = parseInt(num/10);
}
if(orginalNum==reverse){
    console.log(`the given number is palindrome ${reverse}`);
}else{
    console.log(`the given number is non palindrome ${reverse}`);
} */