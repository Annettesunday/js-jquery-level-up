// Syntax


function pow(x, n) { //no space between function name and bracket, and bracket and parameter, a space btwn params, figure bracket on same line after a space
    let result = 1; //2 indentation spaces

    for (let i =0; i < n; i++) { //space after for, space around operators
        result *= x; //a semicolon is mandatory
    }
    return result;
}

let x = prompt('x?', ''); // a space between parameters
let n = prompt('n?','');
//an empty line between logical blocks

if (n < 0) {
    alert(`power ${n} is not supported, 
    please enter an integer number, greater than 0`) //lines are not very long
} else { //else without a line break
    alert( pow(x, n) ); //space around a nested call
}


/* Curly braces 
They are written on the same line as the corresponding keyword, not on a new line. 
There should also be a space before the opening bracket
*/


// Avoid long line lengths. Usually 80 or 120 characters




/* Indents
A horizontal indentation is made using either 2 or 4 spaces or the Tab symbol. But space is more popular

One advantage of spaces over tabs is that spaces allow 
more flexible configuration of indents than the Tab symbol


Vertical Indents: empty lines for spliting code into logical blocks

Every single function can be divided into logical blocks. e.g the initialization of variablea, the main loop and the returning result
are split vertically
*/




function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

/* insert  an extran new line where it helps to make the code more readable. There should not be more than
nine lines of code without a vertical indentations
*/


/*
Semicolons
- They should be placed after each statement, even if it could possibly be skipped
- There are cases where a line break is not interpreted as a semicolon, leaving the code vulnerable to errors

*/ 



/* Nesting levels
Try to avoid nesting code too many levels deep.

Sometimes it is a good idea to use the "continue" directive in a loop to avoid extra nesting
 */

 for (let i = 0; i < 10; i++) {
     if (cond) {
        //  ... <- one more nesting level
     }
 }

//  We can write it as shown below

for (let i = 0; i < 10; i++) {
    if (!cond) continue;
    // ...  <- no extra nesting level
}


/**
 * Functions declared above the code that uses them
 * Code first then functions- this is mostly preffered because we already know what the code does
 */


 function pow(x, n) {
     let result  = 1;

     for (let i = 0; i < n; i++); {
         result *= x;
     }

     return result;
 }

 let x = prompt('x?', '');
 let   n = prompt('n?', '');

if (n < 0) {
    alert(`Power ${n} is not supported, 
    please enter an integer number greater than zero`);
} else {
    alert( pow(x, n) );
}