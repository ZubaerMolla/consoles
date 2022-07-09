//for in loop (this loop for object)
const student = {
    id: 101,
    balance: 5000,
    name: 'kibria',
    major: 'mathematics',
    subject: ['english', 'economics', 'calculus']
};

for(const prop in student){
    console.log(prop)  // to get property
    console.log(student[prop]) // for getting value of the property
    console.log(prop, student[prop])
}

//for of loop
const bottle = {color: 'yellow', hold: 'water', price: 50, isClean: true};
const keys = Object.keys(bottle)  // here keys turn obj to array
console.log(keys)
for(const prop of keys){
    console.log(prop, bottle[prop])
}

//for entries loop
const entries = Object.entries(bottle)
for (const [key, value] of Object.entries(bottle)){
    console.log(key, value)
}
