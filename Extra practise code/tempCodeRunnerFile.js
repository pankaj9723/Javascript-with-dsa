let n ="121";
let str ="";
for (let i = n.length-1; i >=0; i--) {
    str+= n[i]
}
if(str==n){
    console.log("palindrome");
}else{
    console.log("not a palindrome");
}