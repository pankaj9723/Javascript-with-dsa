/* function findMinMax() {
	let Arr = [50, 60, 20, 10, 40];
	let minValue = Infinity;
	let maxValue = -Infinity;

	for (let item of Arr) {

		// Find minimum value
		if (item < minValue)
			minValue = item;

		// Find maximum value
		if (item > maxValue)
			maxValue = item;
	}

	console.log("Minimum element is:" + minValue);
	console.log("Minimum element is:" + maxValue);
}

findMinMax(); */


function findMinMax() {
	let Arr = [50, 60, 20, 10, 40,110];

	let minValue = Arr[0];
	let maxValue = Arr[0];

	for (let i = 0; i < Arr.length; i++) {
  
        if(Arr[i]>maxValue){
            maxValue=Arr[i];
        }
        else if(Arr[i]<minValue){
            minValue=Arr[i];
        }
    }
    console.log(`Maximum Value: ${maxValue}`);
    console.log(`minmum value : ${minValue}`);
}

findMinMax();
