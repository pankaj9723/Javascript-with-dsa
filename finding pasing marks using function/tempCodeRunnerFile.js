const marks = [22,56,30,45,23,99]

function myFind(arr){
    let temp;
    for (let i=0;i<arr.length;i++){
        if (marks[i]<35){
            temp =arr[i]
            break;
        }
}
return temp;
    }
    console.log(myFind(marks));