let income = document.getElementById("income-input");
let food = document.getElementById("food-input");
let rent = document.getElementById("rent-input");
let clothes = document.getElementById("clothes-input");
let calculateButton = document.getElementById("calc-button");
let totalExpense = document.getElementById("expense-output");
let balance = document.getElementById("total-balance");
let saveInput = document.getElementById("saving-input");
let saveButton = document.getElementById("saving-button");
let savingAmount = document.getElementById("saving-output");
let remainingBalance = document.getElementById("remaining-output");
let allInput = parseInt(document.querySelectorAll('input'));


// --------------food rent clothes and balance here---------------
calculateButton.addEventListener('click', calculateHandler);

function calculateHandler() {

    let mainIncome = parseInt(income.value);
    let foodInput = parseInt(food.value);
    let rentInput = parseInt(rent.value);
    let colothInput = parseInt(clothes.value);
    let totalCost = foodInput + rentInput + colothInput;
    totalExpense.innerText = totalCost;

    let newBalance = mainIncome - totalCost;
    balance.innerText = newBalance;
    income.value = '';
    foodInput.value = '';
    rentInput.value = '';
    colothInput.value = '';
    return newBalance
    
    
};
/* function totalCost(){
    if (Value < 0 || isNaN(Value)) { alert("error") }
} */


// ---------------------save and % here -----------------------
saveButton.addEventListener("click", saveMoney);
function saveMoney() {
    let mainIncome = parseInt(balance.innerText);
    let numberPercent = parseInt(saveInput.value);
    let parcentance = mainIncome / 100;
    let finulSaveAmmount = parcentance * numberPercent;
    if (finulSaveAmmount <= calculateHandler()) {
        savingAmount.innerText = finulSaveAmmount;
        remainingBalance.innerText = calculateHandler() - finulSaveAmmount;
    }

    else {
        alert("sorry!! you don't have any sufficency balance")
    };
}
