const hubby = 'Jobaer Molla';
let phone = 'samsung';
phone = 'iphone'
console.log(phone)

const myNotes = `I am majnu i dont have ${phone}`
console.log(myNotes)

function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber()
console.log(biggest)

const square = x => x * x;
console.log(square(8));