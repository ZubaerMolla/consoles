const [best, worst] = [12, 21]
console.log(best, worst)
const [p, q] = [32, 34, 43, 44]
console.log(p, q)

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
console.log(company?.web?.tech?.third) // '?' is an optional chaining
console.log(company.backend?.p)
