const friends = ['Jobaer', 'Ashik', 'Asma', 'Rabia'];
const fLength = friends.map(friend => friend.length)
console.log(fLength);

const products = [
    {name: 'mobile', price: 5000, color: 'black'},
    {name: 'water bottle', price: 50, color: 'black'},
    {name: 'smart watch', price: 5000, color: 'black'},
    {name: 'water glass', price: 50, color: 'black'},
    {name: 'note', price: 50, color: 'black'}
]
const productNames = products.map(product => product.name);
console.log(productNames)

const productPrices = products.map(product => product.price);
console.log(productPrices)



products.map(product => console.log(product));

//another way
products.forEach(product => console.log(product));

//lesson forEach and(vs) map