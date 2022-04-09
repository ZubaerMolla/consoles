var minister = 409;
var businessman = 200;
var army = 299;
if(army > businessman && army > minister) {
    console.log("army is bigger");
}
else if(businessman > army && businessman > minister){
    console.log("businessman is bigger")
}
else{
    console.log("minister is bigger")
}

//or

var max = Math.max(businessman, minister, army);
console.log('largest is', max); // here output will show number