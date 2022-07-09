const numbers = [3, 34, 67, 45, 7, 46, 43];
const sortedNumbers = numbers.sort(function(a, b){
    return a - b;
});
console.log(sortedNumbers)