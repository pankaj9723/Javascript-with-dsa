let cars = [
    { name: "Mclaren", hp: 360 },
    { name: "Ferrari", hp: 360 },
    { name: "Lamborghini", hp: 450 },
    { name: "Supra", hp: 200 },
    { name: "Lexus", hp: 200 },
    { name: "Bugatti", hp: 450 },
  ];
  
  // Group function
  function group(cars, hp) {
  
    // Applying reduce function
    return cars.reduce(function (accumulator, current) {
      let key = current[hp];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(current);
      return accumulator;
    }, {});
  }
  
  // Final Variable
  let carsObject = group(cars, "hp");
  console.log(carsObject);
  