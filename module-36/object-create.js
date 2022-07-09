//1. using object literal
const student = {
    name: 'Sakib al Hasan', job: 'Cricketer'
}

//2. constructor
const person = new Object();
console.log(person)

//3
const human = Object.create(student)
console.log(human.job)

//4
class People {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}

const peop = new People('manush', 12);
console.log(peop)

//function
function Manush(name){
    this.name = name;
}
const man = new Manush('kader')
console.log(man)