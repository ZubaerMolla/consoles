const myFavDate = new Date('1971-12-16');
console.log(myFavDate)
const anotherDate = new Date(1971, 12 , 13 , 11, 12, 12, 23);
if(myFavDate.getTime() < anotherDate.getTime()) {
    console.log('fav is earlier')
}