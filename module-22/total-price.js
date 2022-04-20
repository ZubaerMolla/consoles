const product = [
{name: "laptop", price: 40000, quantity: 1},
{name: "mobile", price: 15000, quantity: 3},
{name: "shirt", price: 1000, quantity: 4},
{name: "watch", price: 1200, quantity: 12}
]
let cartTotal = 0;
for(const product of cart){
    console.log(product)
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal)
 