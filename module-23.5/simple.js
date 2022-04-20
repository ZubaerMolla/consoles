function consoleNumber(i){
    if(i > 5){
        return;
    }
    console.log(i);
    consoleNumber(++i);
}
consoleNumber(1)