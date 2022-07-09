const bottle = {color: 'yellow', hold: 'water', price: 50, isClean: true};
const keys = Object.keys(bottle)  //'create for object
console.log(keys)

const values = Object.values(bottle)  //'create' for object
console.log(values)

const entries = Object.entries(bottle)  //'create' for object
console.log(entries)

Object.seal(bottle) //value cant be deleted if sealed
Object.freeze(bottle) //value cant be deleted too if freezed
delete bottle.isClean
console.log(bottle)