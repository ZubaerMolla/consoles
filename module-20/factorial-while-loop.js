
// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while(i <=number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(6);
// console.log('my factorial is', myFactorial);


function getFactorial(number){
     let factorial = 1;
     let i = number;
     while(i >= 1){
         factorial = factorial * i;
         i--;
     }
     return factorial   // we wont get output without return
 }
 const myFactorial = getFactorial(10);
 console.log('my fact is', myFactorial);