var i = 0;
while(i < 15) {
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}
for(var i = 0; i < 20; i++){
    console.log(i);
    if(i==8){
        break;
    }
}
var numbers = [43, 33, 32, 23, 63, 36, 100, 300, 2322, 223];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number)
    if (number > 100){
        break;
    }
}