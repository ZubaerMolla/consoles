const products = [
    {name: 'mobile', price: 5000, color: 'black'},
    {name: 'water bottle', price: 50, color: 'white'},
    {name: 'smart watch', price: 5000, color: 'black'},
    {name: 'water glass', price: 50, color: 'pink'},
    {name: 'note', price: 50, color: 'black'},
    {name: 'note', price: 50, color: 'pink'}
];
const expensiveProduct = products.filter(product => product.price > 50)
console.log(expensiveProduct);

const blacks = products.filter (product => product.color == 'black')
console.log(blacks)

//lesson: map vs find
const pink = products.find (product => product.color == 'pink')
console.log(pink)