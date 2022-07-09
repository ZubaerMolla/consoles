/* 1. variable value not assigned 
   2. function without return
   3. wrote return but didint return anything
   4. if parameter is not passed
   5. if the property of obj not defined
   6. index is out of array number*/

//1
let first;
console,log(first)

//2
function second(x, y){
    const sum = x + y;
}
const result = second(4, 6)
console.log(result)

//5
const fifth = {name: 'Jobaer', age: 23, job:'student'}
console,log(fifth.phone)

//6
const sixth = [34, 54, 98, 78];
console.log(sixth[5])
