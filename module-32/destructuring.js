const fish = {id: 68, name: 'king hilsha', price: 9000, phone: '028387855', dress: 'panjabi'}

const {phone, price, id, dress} = fish;
console.log(phone, price)
console.log(phone, id)
console.log(phone, dress)
console.log(phone, price)

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka'},
    web: {
        work: 'website development', 
        employee: 22, 
        framework: 'react',
        tech:{
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};
const {work, framework} = company.web;
const {food} = company.ceo
console.log(work, framework, food)