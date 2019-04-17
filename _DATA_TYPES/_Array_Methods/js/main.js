/*  Diving deeper into array methods

This was covered previously:

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.

*/

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3


/*
Splice

The arr.splice(str) method can do everything, add remove and insert elements

*/

let arr = ['I', 'Study', 'Javascript'];

arr.splice(1, 1); // from index 1 remove element 1

alert( arr ); // ['I', 'Javascript'];



//  In the next example we remove 3 elements and replace them with the other two:

let arr = ['i', 'Studying', 'Javascript', 'right', 'now'];

// remove 3 first elements and replace them with another

arr.splice(0, 3, "let's", "dance");

["Let's", "dance", "right", "now"];


// Here we can see that splice returns the array of removed elements

let arr = ["I", "study", "JavaScript", "right", "now"];

// removes 2 first elements
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements


// The splice method is also able to insert the elements without any removals. W need to set deleteCount to 0


let arr = ['I', 'Study', 'Javascript'];

// from index 2
// delete 0
// then insert "complex" and "language"

arr.splice(2, 0, "complex", "language");

alert(arr); // "I", "Study", "complex", "language", "Javascript"





/*
Slice

The syntax is: 

arr.slice(start, end)

It returns a new array containing all items from index start to end(not including end). 
Both start and end can be negative, in that case position from array end is assumed

It makes subarrays instead of substrings
*/


let str = "test";
let arr = ['t','e', 's', 't'];

alert( str.slice(1, 3) ); //es
alert( str.slice(1, 3) ); //e, s

alert( str.slice(-2) ); // st
alert( str.slice(-2) ); // s, t



/*
Concat

the method arr.concat joins the array with other arrays and/or items

The syntax is:

arr.concat(arg1, arg2...)
It accepts any number of arguments- either arrays or values

The result is a new array containing items from arr, then arg1, arg2 etc

If the argument is an array or has Symbol.isConcatSpreadable property, then all its elements are copied
Otherwise the argument itself is copied
*/

let arr = [1, 2];

// merge with [3, 4]
alert( arr.concat([3, 4])); // 1, 2, 3, 4

// merge arr with [3, 4] and [5, 6]

alert( arr.concat([3, 4], [5, 6] )); // 1, 2, 3, 4, 5, 6

// merge with [3, 4], then add values 5 and 6

alert( arr.concat([3, 4], 5, 6) ); // 1, 2, 3, 4, 5, 6


// Normally, it only copies elements from arrays(spreads them). Other objects even if they look like arrays are added as a whole

let arr = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};

alert( arr.concat(arrayLike) ); // 1, 2 , [object Object]
//  [1, 2, arrayLike]


// But if an array-like object has Symbol.isConcatSpreadable property, then its elements are added instead

let arr = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

alert( array.concat(arrayLike) ); // 1, 2, something, else


/*
Iterate: forEach

The arr.forEach method allows to run a function for every element of the array
The syntax is:

arr.forEach(function(item, index, array) {
    //... do something with item
});

*/


// For instance, this shows each element of the array

// for each element call alert
["Bilbo", "Gndalf", "Nazgul"].forEach(alert);


// And this code is more elaborate about their position in the target array

["Bilbo", "Gndalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`)
});

// The result of the function(if it returns any ) is thrown away and ignore




/*
Searching in array

These are methods to search for something in an array

indexOf/lastIndexOf and includes

They have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters

arr.indexOf(item, from) looks for an item starting from index "from", and returns the index where it was found, otherwise -1

arr.lastIndexOf(item, from) - same but look from right to left

arr.includes(item, from) - looks for item starting from index "from", returns true if found
*/

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2

alert( arr.indexOf(null) ); // -1



/*
Methods use === for comparison. So if we look for false, it finds exactly false and not the zero

If we want to check for inclusion, and dont want to know the exact index, then arr.includes is preffered

A very minor difference of includes is that it correctly handles NaN, unlike indexOf/lastIndexOf
*/

const arr = [NaN];

alert( arr.indexOf(NaN) ); // -1(should be 0 but === equality does not work for NaN)

alert(arr.includes(NaN) ); // true (correct)



/*
find and findIndex
Imagine we have an array of objects, how we find an object with the specific condition

The syntax is:
*/

let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenarios returns undefined
})

/*
The function is called repetitively for each element of the array:
 
- item is the element
- index is its index
- array is the array itself

If it returns true, the search is stopped, the item is returned. If nothing is found, undefined is returned
*/

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John


/*
The arr.findIndex method is essentially the same, but it returns the index where the element was found 
instead of the element itself and -1 is returned when nothing is found.

*/


/*
The find method looks for a single(first) element that makes the function return true
If there be many, we can use arr.filter(fn)

The syntax is similar to "find", but filter continues to iterate for all array elements even if true is already returned

*/

let results = arr.filter(function(item, index, array) {
    //if true item is pushed to results and iteration continues
    //returns empty array for complete falsy scenario
});

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);

  alert(someUsers.length); // 2



/*
Transform an array

This section is about the methods transforming or reordering the array
*/


/*
Map

The arr.map method is one of the most useful and often used

The syntax is 

let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
});

It calls the function for each element of the array and returns the array of the results
*/

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

alert( lengths ); // 5, 7, 6



/*
Sort(fn)

This method arr.sort sorts the array in place

The items are sorted as strings by default. Lexicographic ordering is applied
*/

let arr = [1, 2, 15];

//the method reorders the content of arr and returns it

arr.sort();

alert( arr ); // 1, 15, 2

// To use our own sorting order, we need to supply a function of two arguments as the argument of arr.sort().




/*
Reverse

The method arr.reverse reverses the order of elements in an arr
It also returns the array arr after the reversal
*/

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5, 4, 3, 2, 1


/*
Split and join

str.split(delim) method splits the string into an array by the given delimiter delim

*/

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(',');

for (let name of arr) {
    alert( `A message to  ${name}.`); // A message to Bilbo and other names
}

/*
The split method has an optional second numeric argument- a limit on the array length.
If it is provided, then the extra elements are ignored
 */

let arr = 'Bilbo, Gandalf, Nazgul'.split(',', 2);

alert( arr ); // Bilbo, Gandalf




// The call to split(s) with an empty s would split thr string into an array of letters


let str = "test";

alert( str.split() ); // t, e, s, t

/*
The call arr.join(separator) does the reverse to split. It creates a string of arr items glued by separator
between them
*/

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';');

alert( str ); // Bilbo;Gandalf;Nazgul


/*
reduce/ reduceRight
They are used to calculate a single value based on the array
The syntax is:

let value = arr.reduce(function(previousValue, item, index, array) {
    //
}, initial);


So far, like forEach/map. But there's one more argument:

- previousValue - is the result of the previous function call, initial for thr first call

*/

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert( result ); // 15


/*
On the first run, "sum" is the initial value(the last argument of reduce), equals 0, and "current" is the
first array element, equals 1. So the result is 1

On the second run, sum=1, we add the second array element(2) to it and return
On the third run, sum = 3 and we add one more element to it, and so on


We can also omit the initial value. Reduce takes the first element of the array as the initial value
and starts the iteration from the second element


If an array is empty, then reduce call without initial value gives an error


It's advised to always specify the initial value

The method arr.reduceRight does the same thing, but goes from right to left

*/

let arr = [];

// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);


/*
Array.isArray

So typeof does not help to distinguish a plain object from an array:
*/

alert(typeof {}); // object
alert(typeof []); // same



// It returns true if the value is an array, and false otherwise
alert(Array.isArray({})); // false

alert(Array.isArray([])); // true



