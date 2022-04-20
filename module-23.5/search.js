const products = [
    {name: 'iphone 14', price: 70000},
    {name: 'samsung 14', price: 56000},
    {name: 'xiaomi 14', price: 45000},
    {name: 'xiami watch 14', price: 20000},
    {name: 'i watch 14', price: 20000},
    {name: 'samsung watch 14', price: 20000},
    {name: 'iphone x', price: 50000}
    
];
function searchProduct(products, searchText){
    for(const product of products){
        if(product.name.includes('watch')){
            console.log(product.name)        }
        
    }
        
    
}
searchProduct(products)