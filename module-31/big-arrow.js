const add = (num1, num2) => num1 + num2;
const sum = add(22, 22);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 2, 2)
console.log(result);

const tenTimes = (num) => num * 10;
const output = tenTimes(10);
console.log(output)

const getName = () => 'JObaer Molla';
const name = getName();
console.log(name)

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(6, 5);
console.log(total)