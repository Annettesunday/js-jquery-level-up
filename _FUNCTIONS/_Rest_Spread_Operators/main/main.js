/*
Rest parameters and spread operator

Many JS built-in functions support an arbitrary number of arguments

e.g
Math.max(arg1, arg2, ..., argN) - returns the greatest number of arguments
Object.assign(dest, src1, ..., srcN)- copies properties from src1...N into dest


Rest parameters ...

A function can be called with any number of arguments, no matter how it is defined

e.g

function sum(a, b) {
    return a + b;
}

alert( sum(1, 2, 3, 4, 5) );

There will be no error because of excessive arguments. but of course in the result only the first two will
be counted

The rest parameters can be mentioned in a function with three dots ... They literally mean
"gather the remaining parameters into an array"

For instance, to gather all arguments into an array args:
*/


function sumAll(...args) { //args is the name of the array
    let sum = 0;

    for(let arg of args) sum += arg;

    return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6


/*

We can choose to get the first parameters as variables, and gather only the rest

Here, the first two arguments go into variables and the rest go into titles array
*/

function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName); // Julius Caesar

    // the rest go into titles array
    // e.e titles = ["Consul", "Imperator"]

    alert(titles[0]); //Consul
    alert(titles[1]); //Imperator
    alert(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");



// NOTE: The rest parameters must be at the end(must always be last)



/*
The arguments variable

There is also a special array-like object named arguments that contains all arguments by their index

e.g

*/

function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );

    // it's iterable
    // for(let arg of arguments) alert(g);

    // show: 2, Julius, Caesar
    showName("Julius", "Caesar");

    // shows: 1, Illya, undefined (no second arguments)
    showName("Ilya");
}

/*
Although arguments is both array-like and iterable, it's not an array
It does not support any array methods, so we cant call arguments.map(...)


Also, it always contains all arguments. We cant capture them partially, like we did with rest params

So, when we need these features, then rest parameters are preffered
*/




/*

NOTE:

Arrow functions do not have "arguments"

If we access the arguments object from an arrow function, it takes them from the outer "normal" function

e.g
*/

function f() {
    let showArg = () => alert( arguments[0]);
    showArg();
}
f(1); // 1

/*
As we know, arrow functions dont have their own this.
Now we know they dont have special arguments objects either
*/

/*
Spread Operator

For instance, there's a built-in function Math.max that returns the greatest number from a list:

alert( Math.max(3, 5, 1) ); // 5


Now let's say we have an array [3, 5, 1]. How do we call Math.max with it

Passing it as is wont work because Math.max expects a list of numeric arguments, not a single array


And surely we cant manually list items in the code Math.max(arr[0], arr[1], arr[2]), because
we may be unsure how many there are

When ...arr is used in the function call, it "expands" an iterable object arr into the list of args
*/

let arr = [3, 5, 1];

alert(Math.max(...arr) ); // 5 (spread turns array into a list of arguments)


// We can also pass multiple iterables this way:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25



// Also, the spread operator can be used to merge arrays

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert( merged ); // 0, 3, 5, 1, 2, 8, 9, 15


/*

In the examples above we used an array to demonstrate the spread operator, but any iterable will do

For instance, here we use the spread operator to turn the string into array of characters:
*/


let str =  "Hello";

// Array.from converts an iterable into an array

alert( Array. from(str) ); // H, e, l, l, o


/*
The result is the same as [...str]

But there's a subtle difference Array.from(obj) and [...obj]:

- Array.from operates on both array-likes and iterables(more universal)
- The spread operator operates only on iterables
*/
