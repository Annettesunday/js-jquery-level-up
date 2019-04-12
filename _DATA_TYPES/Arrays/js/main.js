/*
Arrays stores ordered collections 
*/

// Syntaxes for creating an empty array

let arr = new Array();

let arr = [];



// This is commonly used

let fruits = ['Apple', 'Orange', 'Plum'];


// Array elements are numbered starting from zero
// We can get an element by its number in square brackets

let fruits = ['Apple', 'Orange', 'Plum'];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum


// We can replace an element

fruits[2] = 'Pear'; // now ['Apple', 'Orange', 'Pear']


// Or add a new one to the array

fruits[3] = 'Lemon'; // now ['Apple', 'Orange', 'Pear', 'Lemon']\


// The total count of the elements in the array is its length

let fruits = ['Apple', 'Orange', 'Plum'];

alert( fruits.length ); // 3


// We can also use alert to show the whole array

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum


// NOTE: An array can store elements of any type


//  mix of values

let arr = [ 'apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name

alert( arr[1].name ); // John

// Get the function at index 3 and run it

arr[3](); // hello


// An array just like an object may end in a comma:

let fruits = [
    'Apple',
    'Orange',
    'Plum',
]

// The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.



// METHODS POP/PUSH SHIFT/UNSHIFT - methods that work with the end of the array


// Pop -  Extracts the last element of the array and returns it

let fruits = ['Apple', 'Orange', 'Pear'];

alert( fruits.pop() ); // remove pear and alert it

alert( fruits ); //Apple, Orange


// Push - appends an element to the end of the array

let fruits = ['Apple', 'Orange', 'Pear'];

alert( fruits.push('Pear') ); 

alert( fruits ); // Apple, Orange, Pear



// The call fruits.push(...) is equal to fruits[fruits.length] = ....



// Methods that work with the beginning of the array

// Shift- Extracts the first element of the array and returns it


let fruits = ['Apple', 'Orange', 'Pear']; 

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear


// Unshift - adds element to the beginning of the array

let fruits = ['Orange', 'Pear'];

fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear


// Methods push and unshift can add multiple elements at once

let fruits = ['Apple'];

fruits.push('Orange', 'Peach');
fruits.unshift('Pineapple', 'Lemon');


// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits ); 



/* Performance

Methods push/pop run fast, while shift/unshift are slow

It’s not enough to take and remove the element with the number 0. Other elements need to be renumbered as well.


The shift operation must do 3 things:

Remove the element with the index 0.
Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
Update the length property.

*/


// Loops


let arr = ['Apple', 'Orange', 'Pear'];

for (let i = 0; i < arr.length; i++ ) {
    alert( arr[i]);
}


// For arrays there is this form of loop

let fruits = ['Apple', 'Orange', 'Pear'];

// iterates over array elements

for( let fruit of fruits ) {
    alert( fruit );
}


/*
The for...of does not give access to the number of the current element, just its value. 
That's enough and shorter


It's also possible to use for...in. but there are potential problems with it

1. The loop for...in iterates over all properties, not only rhe numeric ones

2. The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. It is just a little 
slower

Generally, we should NOT use for...in for arrays
*/


/* Array length

The length property automatically updates when we modify the array. To be precise, it is actually not the count
of values in the array, but the greatest numeric index plus one
*/

let fruits = [];

fruits[123] = 'Apple';

alert( fruits.length ); // 124


/* The length property is writable.

If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated.
The process is irreversible
*/

let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncates to 2 elements

alert( arr ); [1, 2];

arr.length = 5; // return length back
alert( arr[3] ); // undefined, the values do not return



// The simple way to clear the array is

Array.length = 0;



// There is one more syntax to create an array

let arr = new Array('Apple', 'Orange', 'Pear');

// If a new Array is called with a single argument which is a number, then it creates an array without items, but with the given length

let arr = new Array(2); // will create an array of [2]

alert( arr[0] ); // undefined no elements

alert(arr.length); //length 2


/*
In the above example, new Array(number), has all elements undefined
Advised to use [] unless you know what you are doing
*/



// Multidimensional Arrays Arrays can have items that are also arrays. We can use it for multidimensional array ti store matrices


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
alert( matrix[1][1] ); // 5

/* toString

Arrays have their own implementation of toString method that returns a comma-separated list of elements
*/

let arr = [1, 2, 3];

alert( arr ); // 1, 2, 3
alert( String(arr) == '1,2,3'); // true


alert( [] + 1); // "1"

alert( [1] + 1); // "11"

alert( [1, 2] + 1 ); // "1, 21"

//  [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2"
