// variable
var time = '10:15pm';
var bookPrice = 150;
var isColorWhite = false;

// array
var partners = ['sajid', 'mojit', 'sajjat']
var elementCount = partners.length;
var mojitIndex = partners.indexOf('mojit');
partners.push('kajit');
partners.pop

// conditional
if (bookPrice < 120) {
    console.log('I will buy this book')
}
else {
    console.log('Mama, kichu discount den');
}

// loop
var i = 0;
while (i <=17) {
    //do some work
    i++;
}

// function
function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true
    }
    return false;
}
var moonstatus = isMoonUp(21);

// let and const

// value of variable could change
let price = 27;
price = 29;
price = 31;

// value of the variable will not change
const name = 'lal e lal mr Helel';
console.log(name)