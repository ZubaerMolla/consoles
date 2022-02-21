// let factorial = 1;
// for(let i = 1; i <=5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);


// factorial for

function getFactorial(number){
      let factorial = 1;
      for (let i = 1; i <= number; i++){
          factorial = factorial * i;
      }
      return factorial;
}

var firstFacotorial = getFactorial(7);
console.log('factorial of 7 is', firstFacotorial);

var secondFacotorial = getFactorial(6);
console.log('factorial of 6 is', secondFacotorial);


// factorial while

function gettFactorial(number) {
    let factorial = 1;
    let i = 1;
    while(m <=number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log('my factorial is', myFactorial);