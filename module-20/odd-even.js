// const number = 7;
// var remainder = number % 2;
// console.log('even', number % 2);

// const number = 145;

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even', myNumber)

const herNumber = 1641;
const isHerNumberEven = isEven(herNumber);
console.log('is her number even', herNumber);

// is odd function
function isOdd(number) {
    if (number % 2 != 0) {
      return true;  
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is my number odd', isMyNumberOdd);
const isHerNumberOdd = isOdd(herNumber);
console.log('is Her number odd', isHerNumberOdd);