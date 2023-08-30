let arr = [10,20,50,2,150,50];
// console.log(arr);
function secondLast(){
    let maxValue = arr[0];
    let minValue =arr[0];
    let secondLast=arr[0];
    for (let i= 0;i<arr.length ;i++){
        
        if(maxValue > arr[i]){
            maxValue = arr[i]
    }
    else if (minValue<arr[i]){
        minValue = arr[i]
    }
    else if(secondLast<maxValue){
        secondLast = maxValue
    }
    }

    console.log(`MAX VALUE :${maxValue}` );
    console.log(`MIN VALUE :${minValue}`);
    console.log(`second last : ${secondLast}`);
}
secondLast();