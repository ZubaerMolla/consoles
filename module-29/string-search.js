const products = [
    'lenovo laptop 256 GB ssd',
    'xiaomi redmi note 5',
    'hp laptop 256 GB ssd',
    'oppo phone 12 gb ram',
    'dell Laptop',
    'oneplius phone 12 gb ram',
    'macbook laptop',
    'dell laptop with ubuntu',
    'dell laptop core i9'
];
const searching = 'dell'
const output = [];
for  (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        //output.push(product)
    }
}

//or
for  (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product)
    }
}
//console.log(output)

//starts with
for  (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product)
    }
}
console.log(output)

//ends with