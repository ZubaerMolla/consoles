const numbers = [4, 6, 8, 10];
/* function doubleIt(number){
    return number * 2
} 
const double = doubleIt(numbers)
console.log(double)  */

//or
let output = [];
const doubleThis = number => number * 2;

for(const number of numbers){
    const result = doubleThis(number)
    output.push(result)
}
console.log(output) 

//or
let outputM = numbers.map(doubleThis);
console.log(outputM)
 
//or
const outputN = numbers.map(number => number * 2);
console.log(outputN)
//or
const outputO = numbers.map(x => x * 2);
console.log(outputO)