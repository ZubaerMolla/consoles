function inchesToCm(inches){
    var cm = inches * 2.54;
    return cm
}
var scaleSizeInches = 12;
var cm = inchesToCm(scaleSizeInches);
console.log("a normal scale size is", cm,'centimetres ')


function gramToKg(gram){
 var kg = gram / 1000;
 return kg
 
}
var onionWeight = 1500;
var kg = gramToKg(onionWeight)
console.log("the bougt onion weight is", kg)

function dollarToTk(dollar){
    var tk = dollar / 85;
    return tk;
}
var dollarAmount = 200;
var tk = dollarToTk(dollarAmount);
console.log("200 dollars is", tk ,"in tk")

function tkToEuro(tk){
    euro = tk / 110;
    return euro
}
var phonePrice = 18000;
var euro = tkToEuro(phonePrice);
console.log("18000 TK in Euro is £", euro)

function riyalToTk(riyal){
    var tk = riyal * 22;
    return tk
}
var tenRiyal = 10;
var tk = riyalToTk(tenRiyal);
console.log("10 riyal in TK is ৳"+tk)
