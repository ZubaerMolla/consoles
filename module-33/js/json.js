//Javascript object notation (JSON)
const user = { id: 12, name: 'Jobaer', job: 'student'}
let stringify = JSON.stringify(user)
//console.log(stringify)

const shop = {
    name: 'alia store',
    address: 'ranbir road',
    product: ['laptop', 'mobile']
}
shopStringify = JSON.stringify(shop)
console.log(shopStringify)
//console.log(shop)
let converted = JSON.parse(shopStringify)
console.log(converted)
