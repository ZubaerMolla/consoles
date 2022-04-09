function bringShingara(taka) {
    console.log('mama shingara er jonno dise',taka);
    console.log('mama shingara den');
    var shingaraPrice = 10;
    var shingaraQuantity = taka / shingaraPrice;
    return shingaraQuantity;
}


var money = 250;
var shingara = bringShingara(money);
console.log('ei nen shingara', shingara);