/* 

function deposit() {
    let depositValue = document.getElementById('deposit-value');
    const depositOutput = document.getElementById('deposit-output');
    let balanceOutput = document.getElementById('balance-output')
    depositOutput.innerText = parseFloat(depositOutput.innerText) + parseFloat(depositValue.value);
    balanceOutput.innerText = parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value);

    depositValue.value = '';
}
function withdraw(){
    let withdrawValue = document.getElementById('withdraw-value');
    let withdrawOutput = document.getElementById('withdraw-output')
    let balanceOutput = document.getElementById('balance-output');
    withdrawOutput.innerText = parseFloat(withdrawOutput.innerText) + parseFloat(withdrawValue.value);
    balanceOutput.innerText = parseFloat(balanceOutput.innerText) - parseFloat(withdrawValue.value);
    withdrawValue.value = '';
}
 */

let depositValue = document.getElementById('deposit-value');
const depositOutput = document.getElementById('deposit-output');

let withdrawValue = document.getElementById('withdraw-value');  let withdrawOutput = document.getElementById('withdraw-output')

let balanceOutput = document.getElementById('balance-output');

function addMoney(currentAmount, newAmount) {
    var result = parseFloat(currentAmount) + parseFloat(newAmount);
    return result;
}

function deposit(){
    const depositValueNumber = depositValue.value;
    let depositOutputNumber = depositOutput.innerText;
    const depositTotal = addMoney(depositOutputNumber, depositValueNumber);
    depositOutput.innerText = depositTotal;
    balanceOutput.innerText = parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value)

depositValue.value = '';
}

function withdraw(){
    const withdrawTotal = addMoney(withdrawOutput.innerText, withdrawValue.value);
    withdrawOutput.innerText = withdrawTotal;
    balanceOutput.innerText = parseFloat(balanceOutput.innerText) - parseFloat(withdrawValue.value)
}