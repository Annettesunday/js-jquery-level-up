// A variable is a named storgar for data

let message = 'Hello!'

alert(message);


// We  can also use multiple variant

let user ='John';
let age = 25;
let message = 'Hello';

// or

let user ='John';
    age = 25;
    message = 'Hello';

//  We can change a variable as many times as we want, the old data is removed from variable

/* 
Variable naming Limitations
1. The name must contain only letters, digits, symbols $ and _
2. The first character must not be a digit

e.g userName, test123

*/


//  To declare a constant variable, use const instead of let

const myBirthday = '18.04.1982'

// An attempt to change a constant would cause an error

myBirthday = '01.01.1982' // error, can't reassign the constant!


// Uppercase constants

/* This is a widespread practice to use constants as aliases for difficult-to-remember
 values that are known prior to execution
*/

const COLOR_RED = #F00

// .. when we need to pick a color
let color = COLOR_RED
alert(color)