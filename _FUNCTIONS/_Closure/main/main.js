/*
Closure

JS is a very function-oriented language. It gives us a lot of freedom.

A function can be created at one moment, then copied to another variable or passed as an argument
to another function and called from a totally different place later

We know that a function can access variables out of it; this feature is used quite often

But what happens when an outer variable changes? Does a function get the most recent value or the one that existed
when the function was created?

Also, what happens when a function travels to another place in the code and is called from there - does
it get access to the outer variables of the new place?


*/

/*
A couple of questions

Let's consider two situations to begin with, an then study the internal mechanics piece-by-piece, so that
you'll be able to answer the following questions and more complex ones in the future

*/


// The function sayHi uses an external variable name. When the function runs, which value is it going to use


let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "pete";

sayHi(); // what will it show?



/*
Such situations are common both in browser and server-side development.
A function may be scheduled to execute later than it is created, for instance after a user action or a
network request

Question: does it pick the latest changes
*/


/*

The functions makeWorker makes another functions and returns it.
That new function can be called from somewhere else. Will it have access to the outer variables from its
creation place, or the invocation place, or both?

*/

function makeWorker() {

    let name = "Pete";

    return function() {
        alert(name);
    };
}

let name = "John";

// create a function

let work = makeWorker();

// call
work(); // what will it show? "Pete" (name where created) or "John" (name where called)



/*

Lexical Environment

In JS, every running function, code block, and the script as a whole have an associated object known
as the Lexical Environment

The lexical environment object consists of two parts:

1. Environment Record - an object that has all local variables as its properties
(and some other information like the value of this)

2. A reference to the outer lexical environment, usually the one associated with the code lexically right
outside of it(outside of the current curly brackets)



A variable is just a property of the special internal object, environment record.
To get or change a variable means to get or change a property of that object


In this example, there is only one lexical environment
*/

let phrase = "Hello";

alert( phrase );

// phrase: Hello is the environment record

// No outer reference


/*
A variable is a property of a special internal object, associated with the currently executing
block/function/script

Working with variables is actually working with properties of that object
*/


/*

Function Declaration

Unlike let variables, they are fully initialized not when the execution reaches them, but earlier,
when a lexical environment is created

For top-level functions, it means the moment when the script is started

That is why we can call a function declaration before it is defined

The code below demonstrates that the Lexical Environment is non-empty from the beginning.
It has say, because that’s a Function Declaration. And later it gets phrase, declared with let:
*/

let phrase = "Hello";

function say(name) {
    alert( `${phrase}, $name` );
}


/*

Inner and Outer Lexical Environment

Let's see what happens when a function accesses an outer variable

During the call say() uses the outer variable phrase:

First, when a function runs a new function lexical environment is created automatically.
That's the general rule for all functions
That lexical environment is used to store local variables and parameters of the call


So, during the function call, we have two lexical environments:
the inner one(for the function call) and the outer one (global)

- The inner lexical environment corresponds to the current execution of say
It has a single variable: name, the function argument. We could say("John"), so the value of name is "John"

- The outer lexical environment is the global lexical environment
It has phrase and the function itself


The inner lexical environment has a reference to the outer one


When the code wants to access a variable - the inner lexical environment is searched first,
then the outer one, then the more outer one, and so on until the end of the chain

If a variable is not found anywhere, that's an error in strict mode. Without  "use strict",
an assignment to an undefined variable creates a new global variable, for backwards compatibility


Let's see how the search proceeds in our example:

- When the alert inside say wants to access name, it finds it in the function lexical environment

- When it wants to access phrase, then there is no phrase locally, so it follows the reference
to the enclosing lexical environment and finds it there








Explaining the first question:

A function gets outer variables as they are now; it uses the most recent values

That's because of the described mechanism. Old variables are not saved anywhere.
When a function wants them, it takes the current values from its own or an outer lexical environment

So the answer is "Pete"



NOTE:

One call - one lexical environment

Please note that a new function lexical environment is created each time a function runs

And if a function is called multiple times, them each invocation will have its own lexical environment,
with local variables and parameters specific for that very run


Lexical Environment is a specification object. We cant get this object in our code, and
manipulate it directly

JS engines may optimize it, discard variables that are unused to save memory and perform other
internal tricks
*/



/*

Nested functions
 A function is called nested when it is created inside another function
*/

function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
        return firstName + ' ' + lastName;
    }

    alert("Hello" + getFullName());
    alert("Bye" + getFullName());

}


/*
Here the nested function is made for convenience

It can access the outer variables and so can return the full name

A nested function can be returned: either as a property of a new object(if the outer function creates an object
    with methods) or as a result by itself
It can then be used somewhere else. No matter where, it still has access to the same outer variables


For instance, here the nested function is assigned to the new object by the constructor function:

*/

// constructor function returns a new object

function User(name) {

    // the object method is created as a nested function
    this.sayHi = function() {
        alert( name );
    };
}

let user = new User("John");
user.sayHi(); // the method "sayHi"code has access to the outer "name"



// And here we just create and return a "counting" function

function makeCounter(){

    let counter = 0;

    return function() {
        return count++; // has access to the outer counter
    };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2


/*

How the counter works internally

The locals of the nested function…
The variables of the outer function…
And so on until it reaches global variables.


In this example count is found on step 2. When an outer variable is modified, it’s changed where it’s found.
So count++ finds the outer variable and increases it in the Lexical Environment where it belongs.
Like if we had let count = 1.
*/


/*

Code blocks and loops, IIFE

Lexical environment also exists in code blocks {...}

A Lexical Environment is created when a code block runs and contains block-local variables. e.g


if

The user variable exists only in the if block
*/

let phrase = "Hello";

if (true) {
    let user = "John"

    alert(`${phrase} ${user}`);
}

alert(user); // error; cant see such variable

/*

When the execution gets into the if block, the new “if-only” Lexical Environment is created for it.

It has the reference to the outer one, so phrase can be found.
But all variables and Function Expressions, declared inside if, reside in that Lexical Environment and can’t be seen from the outside.

For instance, after if finishes, the alert below won’t see the user, hence the error.

*/


/*
For, while

For a loop every iteration has a separate lexical environment

If a variable is declared in for, then it’s also local to that Lexical Environment:

*/


for (let i = 0; i < 10; i++) {
    // Each loop has its own Lexical Environment
    // {i: value}
  }

  alert(i); // Error, no such variable

