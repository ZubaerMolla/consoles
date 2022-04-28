//generate new pins
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else{
        return getPin()
    }
}


 function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
} 

//calculate numbers
 document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
       if(number == 'C'){
        calcInput.value = '';
       }
    }
    else{
    const previousCalc = calcInput.value;
    const newCalc = previousCalc + number;
    calcInput.value = newCalc;
    }
 }); 

 function verifyPin() {
     const pin = document.getElementById('display-pin').value
     const typedNumbers = document.getElementById('typed-numbers').value;
     const successMessage = document.getElementById('notify-success');
     const failError = document.getElementById('notify-fail');

     if(pin == typedNumbers){
        //  console.log('matched')
        
        successMessage.style.display = 'block'
        failError.style.display = 'none'
     }
     else{
        //  console.log('didnt match')
         
        failError.style.display = 'block'
        successMessage.style.display = 'none'
     }
 }