

// let b=4;
// b++
// console.log (b)
// // buni javobi 5


// peremetr

function num (a, b, c) {
    return a+b+c
}
console.log (num (20, 13, 9))

// masala

let date = new Date()
let hours = date.getHours()
let minuts = date.getMinutes()
let second = date.getSeconds()
console.log(hours , minuts ,second)
let isOfficeOpen = (hours >= 9 && minuts > 0)
let isOfficeClose = !isOfficeOpen
console.log('Office ochiq ' , isOfficeOpen)
console.log('Office yopiq ', isOfficeClose);
