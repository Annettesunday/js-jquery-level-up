/*
An operandis what operators are applied to. e.g in the multiplication of 5 * 2 there are two operands:
 the left operand is 5 and the right operand is 2.
*/

/* An operator is unary if it has single operand.
For example the unary negation - reverses the sign of a number */

let x = 1;
x = -x;
alert(x); //-1 bc unary negation was applied



// An operator is binary if it has two operands

let x = 1, y = 3;
alert(y - x); //2, binary minus substracts values




/* String concatenation, binary +

if the binary + is applied to strings, it concatenates them
if one of the operands is a string, the other one is converted to a string too


Other arithmetic operators work with only numbers and always converts their operands to numbers
*/

alert(2 - '1'); //1
alert('6' / '2') //3



// Numeric Conversion

/*
The unary plus + applied to a single value, doesn't do anything to numbers. But if the operand is not a number,
 the unary plus converts it into a number*/


let x = 1;
alert( +x ); //1

let y = -2;
alert( +y ); //2



// Converts non numbers

alert(+true); //1
alert(+""); //0


// The above is shorter syntax for Number(...);


let apples = "2";
let oranges = "3";

alert(+apples + +oranges); //5

// The longer variant

alert(Number(apples) + Number(oranges)); //5



// Remainder %

// The result od a % b is the remainder of the integer division of a by b

alert(5 % 2) //1


// Exponentiation **

// For a natural number, the result of a ** b is a multiplied by itself b times


alert(2 ** 2); //4
alert( 2 ** 3); //8



// Increment/ decrement


// Increment ++ increases a variable by 1

let counter = 2;
counter++;
alert(counter); //3


// Decrement decreases a variable by 1

let counter = 2;
counter--;
alert(counter); //1


// Increment/decrement can only be applied to variables

5++; //error


// The ++ and -- can be placed either before or after a variable. They basically work the same


let counter = 1;
let a = ++counter;

alert(a) //2


// The postfix form counter++ also increments counter but returns the old value(prior to increment)
let counter = 1;
let a = counter++;

alert(a) //1


// If the result of the result of the increment/decrement is not used, there is no difference in which form to use


let counter = 0;
counter++;
++counter;
alert(counter); // 2, the lines did the same thing



//  if we'd like to increase a value, and immediately use the results of the operator, we need to use the prefix form

let counter = 0;
alert(++counter); //1


// if we'd like to increment a value but use its previous value, we need the postfix form

let counter = 0;
alert(counter++); //0


// ++/-- have higher higher precedence than other operators





// Bitwise Operators

/*
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/




// Modify-in-place

// We often need to apply an operator to a variable and store the new result in that same variable


let n = 2;
n = n + 5;
n = n * 2;


// The above notation can be shortened using the operators += and *=


let n =2;
n += 5; // now n =7 (n = n + 5)
n *= 2; //n =14 (n = n * 2)


// These operators run after most calculation

let n = 2;
n *= 3 + 5;





// Comma- Sometimes used to write shorter code

/*
The comma operator allows us to evaluate several xpressions, dividing them with a comma.
Each of them is evaluated but only the result of the last one is returned
*/

let a = (1 + 2, 3 + 4)

alert(a); //7


// Comma has very low precedence, lower than =, so paranthesis is important in the above example