function largestElement(numbers){
    let largest = 1;
    for(let i = 2; i < numbers.length; i++){
        const element = numbers[i];
        if(element>largest){
            largest = element;
        }
    }
    return largest
}
const ages = [0, 12, 34, 33, 43, 74, 100, 300, 276];
const oldest = largestElement(ages)
console.log('oldest', oldest)

const prices = [354, 3443, 3453, 345, 435, 3555, 3000];
const largest = largestElement(prices);
console.log('largst price', largest)
