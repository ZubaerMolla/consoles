//function getfunction (x, y, z='') //empty string is default parameter
const hubby = 'Akbar the great';
let priyoPerson = 'Koolsoom Begam';
priyoPerson = 'Moomtaz Begum';

function getName(first, last = 'Chowdhury'){
    return first + ' ' + last;
}
//tamplate string
const myPeople = `My lovely people is are ${hubby} and his fullmane is ${getName('Akbar')} my name is ${priyoPerson}`
console.log(myPeople);

const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPArt = x / z;
    const result = (firstPart + secondPart) * thirdPArt;
    return result
}
const firstOperation = bigArrowFunc(2, 3, 2);
console.log(firstOperation)


function getSome(a, b= 9){
    return a + b;
}
console.log(getSome(2, 7))

const y = x => x*x;
const z = y(5); 
console.log(z)