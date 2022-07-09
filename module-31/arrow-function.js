function add(num1, num2){
    return num1 + num2
}
const add2 = function add2(num1, num2){
    return num1 + num2
}
const add3 = function (num1, num2){
    return num1 + num2
}
const add4 = (num1, num2) => num1 + num2

const sum1 = add(14, 12)
const sum2 = add2(14, 12)
const sum3 = add3(14, 12)
const sum4 = add4(14, 12)
console.log(sum1, sum2, sum3, sum4)