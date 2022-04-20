// 1. anaToVori conversation
function anaToVori(ana) {
if (typeof ana !== "number" || ana <= 0)
return "Input should be positive number.";
const vori = ana / 16;
return vori;
}
// 2. pandaCost snacks bill
function pandaCost(singaraNum, samuchaNum, zilapiNum) {
// input type checking
if (
typeof singaraNum !== "number" ||
typeof samuchaNum !== "number" ||
typeof zilapiNum !== "number"
)
return "Input must be number.";
// Order at one per item
if (singaraNum <= 0 || samuchaNum <= 0 || zilapiNum <= 0)
return "Input must be positive";
// Unit cost
const perSingaraCost = 7;
const perSamuchaCost = 10;
const perZilapiCost = 15;
// Per Item total
const totalSingaraCost = perSingaraCost * singaraNum;
const totalSamuchaCost = perSamuchaCost * samuchaNum;
const totalZilapiCost = perZilapiCost * zilapiNum;
// Total bill to pay
const totalCost = totalSingaraCost + totalSamuchaCost + totalZilapiCost;
return totalCost;
}
// 3. picnicBudget
function picnicBudget(persons) {
// input checking - should be number
if (typeof persons !== "number") return "Only number is accepted.";
// should be positive number
if (persons <= 0) return "Value must be positive.";
// initial budget
let budget;
if (persons <= 100) {
// per head cost 5000
const perHeadCostFor100 = 5000;
budget = persons * perHeadCostFor100;
} else if (persons > 100 && persons <= 200) {
// per head cost 4000
const perHeadCostFor200 = 4000;
const headCountFor200 = persons - 100;
budget = 100 * 5000 + perHeadCostFor200 * headCountFor200;
} else {
// per head cost 3000
const perHeadCostFor200Up = 3000;
const headCountFor200Up = persons - 200;
budget = 100 * 5000 + 100 * 4000 + perHeadCostFor200Up * headCountFor200Up;
}
return budget;
}
// 4. oddFriend
function oddFriend(friends) {
// only array is accepted
if (friends.constructor.toString().indexOf("Array") === -1)
return "Input must be array of string";
// loop through and check each item
for (let friend of friends) {
// Item other than string
if (typeof friend !== "string") return "Array Item must be string";
if (Number(friend.length) % 2 !== 0) {
return friend;
}
}
// No odd-friend
return "There is no name containing odd-number characters.";
}