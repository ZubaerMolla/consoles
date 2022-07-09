class Support {
    name;
    designation = 'support web dev';
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}
const aamir = new Support('Amir Khan', 'BD')
const salman = new Support('Salman Khan', 'Dubai')
console.log(aamir)
console.log(salman)

aamir.startSession();
salman.startSession()
