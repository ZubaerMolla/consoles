const kibria = {
    id: 101,
    money: 5000,
    name: 'kibria',

    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this)
        return this.money
    }
}
const heroAlom = {
    id: 102,
    money: 6000,
    name: 'Hero Alam'
}
kibria.treatDey(100)

const heroTreatDey = kibria.treatDey.bind(heroAlom);
heroTreatDey(500)