const phone = [
{name: "samsung s3", price: 45000, camera: 8
},
{name: "xiaomi m3", price: 15000, camera: 8
},
{name: "Nokia N95", price: 8000, camera: 8
},
{name: "Nokia-1200", price: 4000, camera: 8
},
{name: 'xiaomi redmi5', price: 3000, camera: 8
}

]
let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);