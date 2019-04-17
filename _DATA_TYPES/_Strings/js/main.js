// Strings


/*
Strings can be enclosed within either single quotes, double quotes or backticks
*/

let single = 'single';
let double = "double"

let backticks = `backticks`

/*
Single and double quotes are essentially the same. Backticks allow us to embed any expression into the string, 
including function calls
*/

function sum(a, b) {
    return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`) // 1 + 2 = 3


// Another advantage of using backticks is that they allow a string to span multiple lines


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// If we try to use single or double quotes in the same way, there will be an error


// let guestlist = "Guest:
// * John";

//Error: Unexpected token ILLEGAL



/*
Backticks allows us to specify a "template function" vefore the first backtick.
They syntax is: func`string`
The function func is called automatically, receives the string and embedded expressions and can process them
This is called tagged templates. This feature makes it easier to wrap strings into custom templating 
`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals`

*/


/* Special Characters
\n denotes a line break
*/

let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests



/*
\b - backspace
\f - form feed
\n - New line
\r Carriage return
\t - tab
\uNNNN - 	A unicode symbol with the hex code NNNN, for instance \u00A9 – is a unicode for the copyright symbol ©. It must be exactly 4 hex digits.
\u{NNNNNNNN}	Some rare characters are encoded with two unicode symbols, taking up to 4 bytes. This long unicode requires braces around it.
*/


// Examples with unicode 


alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, a rare chinese hieroglyph (long unicode)
alert( "\u{1F60D}" ); // 😍, a smiling face symbol (another long unicode)


// All special characters start with a backslash character(escape character). Also we use it to insert a quote to a string


alert('I\'m the Walrus'); // I'm the Walrus

// We could switch to double quotes or backticks instead


/*
Note that the backslash \ serves for the correct reading of the string by JS then disappears.
The in-memory string has no \


Use double \\ to show an actual backslash within the string

*/

alert( 'The backslash: \\');


// String length

alert(`My\n`.length); // 3 plus the special character


// Note str.length is a numeric property not a function


/* 
Accessing characters

To get a character at position pos, use square brackets [pos] or call the method str.charAt(pos)
The first character starts from zero

*/

let str = 'Hello';

//The first character

alert( str[0] ); // H
alert( str.charAt(0) ); // H

// the last character
alert( str[str.length - 1] ); // o

/*
The square brackets are a modern way of getting a character, while charAt exists mostly for historical reasons.

The only difference between them is that if no character is found, 
[] returns undefined, and charAt returns an empty string:
*/

let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (an empty string)


// We can also iterate over character using for...of

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
  }


  /*
  Strings are immutable 
  Strings cannot be changed in JS
  */


 let str = 'Hi';

 str[0] = 'h'; // error
 alert( str[0] ); // doesn't work


//  The usual workaround is to create a whole new string and assign it to str instead of the old one.

let str = 'Hi';

str = 'h' + str[1];  // replace the string

alert( str ); // hi


// Changing the case

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface


//  Lowe a single character

alert( 'Interface'[0].toLowerCase() ); // 'i'




/*
Searching for a substring

str.indexOf(substr, pos)

It looks for the substr in str,
starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found

*/

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

/*
The optional second parameter allows us to search starting from the given position
*/


// If we’re interested in all occurrences, we can run indexOf in a loop. Every new call is made with the position after the previous match:


let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

// or

let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}



// includes, startsWith, endsWith

// The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.

alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

// The optional second argument of str.includes is the position to start searching from:

alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, from position 3 there is no "id"



alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") );   // true, "Widget" ends with "get"


/*
Getting a substring
There are 3 methods in JS to get a substring
substring, substr, slice


str.slice(start [, end])
Returns the part of the string from start to (but not including) end.
*/

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at


// If there is no second argument, then slice goes till the end of the string:

let str = "stringify";
alert( str.slice(2) ); // ringify, from the 2nd position till the end


// Negative values for start/end are also possible. They mean the position is counted from the string end:


let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // gif


/*

str.substring(start [, end])

Returns the part of the string between start and end.

This is almost the same as slice, but it allows start to be greater than end.
*/

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)


/*

str.substr(start [, length])

Returns the part of the string from start, with the given length.

In contrast with the previous methods, this one allows us to specify the length instead of the ending position:

*/

let str = "stringify";
alert( str.substr(2, 4) ); // ring, from the 2nd position get 4 characters


// The first argument may be negative, to count from the end

let str = "stringify";
alert( str.substr(-4, 2) ); // gi, from the 4th position get 2 characters



/*
Comparing Strings

Strings are compared character-by-character in alphabetical order although there are some oddities

1. A lower case is always greater than the uppercase

alert('a' > 'Z'); true

2. Letters with diacritical marks are "out of order"

alert( 'Österreich' > 'Zealand' ); // true
*/



// str.codePointAt(pos) returns the code for the character at position pos

alert( "z".codePointAt(0) ); // 122


// String.fromCodePoint(code) creates a character from its numeric code

alert( String.fromCodePoint(90) ); // Z


// We can also add unicode characters by their codes using \u followed by the hex code:

// 90 is 5a in hexadecimal system
alert( '\u005a' ); // Z


// Surrogate  Pairs - rare symbols are encoded with a pair of 2-byte characters called “a surrogate pair”.


alert( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
alert( '😂'.length ); // 2, FACE WITH TEARS OF JOY

