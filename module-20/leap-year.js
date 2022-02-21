function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}
const myYear = 2024;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyYearLeapYear);


function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}
const yourYear = 2087;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);