let deep ={
            name:'peter',
            age: '26',
            address:{
                city:"noida",
                state:"up"
            }
        };

        let user4 = JSON.parse(JSON.stringify(deep));
        user4.address.city="gurgaon"
        console.log("deep : ",deep);
        console.log("user4",user4);