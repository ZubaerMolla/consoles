function inchesToFeet(inches) {
    var feet = inches / 12
    return feet;
}

var MyInches = 132;
var feet = inchesToFeet(MyInches);
console.log('myInches in feet', feet);
var babaInches = 137;
var feet = inchesToFeet(babaInches);
console.log('babaInches in feet', feet);
var dadaInches = 172;
var feet = inchesToFeet(dadaInches);
console.log('dadaInches in feet', feet);
var khalaInches = 138;
var feet = inchesToFeet(khalaInches);
console.log('khalaInches in feet', feet);

// mile to km
function mileToKm(miles){
    var km = miles * 1.60934
    return km;
}
var marathon = mileToKm(26.2);
console.log('marathon in km', marathon);