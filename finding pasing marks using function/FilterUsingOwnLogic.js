/* const marks = [47,56,30,45,23,99]

function myFind(arr){
    let temp;
    for (let i=0;i<arr.length;i++){
        if (marks[i]<22){
            temp =arr[i]
            break;
        }
}
return temp;
    }
    console.log(myFind(marks)); */


   /*  const marks = [22,56,30,45,23,99]



    function myFilter(arr){
        let tem =[];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 28) {
                tem.push(arr[i])
            }
            
        }
        return tem;
    }
    console.log(myFilter(marks)); */
    // console.log(myFilter(marks2));

    // experiment
    const marks = [47,56,30,45,31,99]
    const marks1 = [47,56,25,45,31,99]

function myFind(arr){
    let temp =[];
    for (let i=0;i<arr.length;i++){
        if (marks[i]<26){
            temp.push(arr[i])
          
        }
        
}

if(temp<30){
    console.log("you are passed");
}else{
    console.log("you are failed");
}
return temp;
    }
    console.log(myFind(marks));
    let result = myFind(marks1);
    // let result1 = myFind(marks);
    // console.log(`${"you are failed"} ${result}`);