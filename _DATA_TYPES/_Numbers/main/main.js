//  In JS, we shorten a number by appending letter "e" to the number and specifying the zeros count

let billion = 1e9; // i billion, literally: 1 and 9 zeroes

alert(7.3e9);  // 7300 000 000



// To avoid writing zeros explicitly

let ms = 1e-6; // six zeroes from the left from one 0.000006;




// Hex, binary and octal numbers


/*
Hexadecimal numbers are widely used in JS to represent colors, encode characters
There exists a shorter way to write them
0x and then the number
*/


alert(0xff); // 255

alert(0xFF); // Same, case does not matter



// Binary and octal numeral systems are rarely used. But also supported using 0b and 0o prefixes



let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides


toString(base)


/*
The method num.toString(base) returns a representation of num in the numeral system with the given base
*/

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111


/*

Rounding - one of the most used operations when working with numbers is rounding

Below are several inbuilt functions for rounding off:

Math.floor rounds down
3.1 becomes 3 and -1.1 becomes -2

Math.ceil
Rounds up
3.1 becomes 4 and -1.1 becomes -1

Math.round
Rounds off to the nearest integer
3.1 becomes 3, 3.6 becomes 4 -1.1. becomes -1

Math.trunc(not supported by internet explorer)

Removes anything after the decimal point without rounding

3.1 becomes 3, -1.1 becomes -1

/*

For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23.

Multiply-and-divide.

For example, to round the number to the 2nd digit after the decimal,
we can multiply the number by 100, call the rounding function and then divide it back.
*/

let num = 1.23456;

alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

/*
The method toFixed(n) 
rounds the number to n digits after the point and returns a string representation of the result.
*/


let num = 12.34;

alert( num.toFixed(1) ); // "12.34"

// Please note that the result of toFixed is a string. If the decimal part is shorter than the required, zeroes are appended to the end



// We can convert it to a number using the unary plus or a Number() call: +num.toFixed(5)


/*
- Infinity is a special numeric value that is greater or less than anything
- NaN represents an error
They belong to the type Numbers but are not "normal" numbers, so there are special functions to check for them


isNaN(value) converts its argument to a number and then tests it for being NaN

NOTE: The value NaN is unique in that it does not equal anything, including itself


isInfinite(value) converts its argument to a number and returns true if it is a regular number,
not NaN/Infinity/-Infinity
*/

alert(isNaN(NaN)); //true
alert(isNaN("str")); //true



alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity



// Sometimes isFinite is used to validate whether a string value is a regular number

let num = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
alert(isFinite(num));




// parseInt and parseFloat
/*

Numeric conversions using a + or Number() is strict. If a value is not exactly a number, it fails

alert(+"100px"); //NaN

The sole exception is spaces at the beginning or at the end of the string, as they are ignore


parseInt and parseFloat read a number from a string until they cant. In case of an error, the gathered number is returned.
The function parseInt returns an integer, whilst parseFloat will return a floating-point number
*/



alert( parseInt('100px') ); // 100;
alert( parseFloat('12.5em') ); // 12.5

alert(parseInt('12.3')); //12, only the integer part is returned
alert(parseFloat('12.3.4') ); //12.3, the second point stops the reading

/*
There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read
*/

alert( parseInt('a123') ); //NaN, the first symbol stops the process



/*
The parseInt() function has an optional parameter. It specifies the base of the numeral system, so parseInt
can also parse strings of hex numbers, binary numbers and so on


alert( parseInt('0xff', 16) ); // 255
alert( parseInt('2n9c', 36) ); // 123456
*/

/*
JS has an bilt-in Math object which contains a small library of mathematical functions and constants
*/

// Math.random() - returns a random number 0 to 1(not including 1)

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

// Math.max(a, b, c...) / Math.min(a, b, c..) - returns  the greatest/smallest from the arbitrary no of args

alert( Math.max(3, 5, -10, 0, 1) ); //5
alert( Math.min(1, 2) ); // 1


// Math.pow(n, power) - returns n raised the given power

alert( Math.pow(2, 10) ); // 1024