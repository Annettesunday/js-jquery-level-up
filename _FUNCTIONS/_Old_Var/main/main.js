/*

Three ways of variable declaration

let
const
var

let and const behave exactly the same way in terms of lexical environments

var and let declare variables:


function sayHi() {
    var phrase = "Hello"; //local variable, var instead of let

    alert(phase); // Hello
}

sayHi();

alert(phrase); // Error, phrase is not defined

"var" HAS NO BLOCK SCOPE
var variables are either function-wide or global, they are visible through blocks.

For instance: 


*/

if(true) {
    var test = true; // use var instead of let
}

alert(test); // true, the variable lives after if

/*
If we used let test on the 2nd line, then it wouldn't be visible to alert. But var ignores code blocks, so we've got a global test

The same thing for loops: var cannot be block-or loop-local
*/

for (var i = 0; i < 10; i++) {
    // ...
}
alert(i); /// 10, i is visible after loop,  it's global variable

// If a code block is inside a function, then var becomes a function-level variable

function sayHi() {
    if (true) {
        var phrase   = "Hello"
    }
    alert(phrase);
}

sayHi();
alert(phrase); // Error: phrase is not defined


/*
Var ARE PROCESSED AT THE FUNCTION START

Var declarations are processed when the function starts(or scripts start for globals)

Var variables are defined from the beginning of the function, no matter where the definition is(assuming that the definition is not in the nested function)
*/

// so this code

function sayHi() {
    phrase = "Hello";
    alert(phrase);

    var phrase;
}

// is technically the same as this

function sayHi() {
    var phrase;

    phrase = "Hello";

    alert(phrase);
}

// or even as this(remember, code blocks are ignored)

function sayHi() {
    phrase = "Hello";

    if(false) {
        var phrase;
    }

    alert(phrase);
}

/*
People call such behaviour hoisting(raising), because all var are "hoisted"(raised) to the top of the function

So in the example above, if (false) branch never executes, but that doesn't matter.
The var inside it is processed in the beginning of the function, so at the moment line 92 is executed, the variable already exists
*/


function sayHi() {
    alert(phrase);

    var phrase = "Hello";
}

sayHi();


/*
The line var phrase = "Hello" has two actions in it:

variable declaration var
Variable assignment  =

The declaration is processed at the start of the function execution ("hoisted"), but the assignment always works at the place where it appears.
So the code essentially works like this:
*/

function sayHi() {
    var phrase; // declaration works at the start

    alert(phrase); // undefined

    phrase = "Hello"; // ... assignment - when the execution reaches it
}

sayHi();


/*

Because all var declarations are processed at the function start, we can reference them at any place.

Bu thte variables are undefined until the assignments
*/