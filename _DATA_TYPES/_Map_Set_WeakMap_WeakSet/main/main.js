/*
Objects for storing keyed collections
Arrays for storing ordered collections
*/


/*
Map


Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type

The main methods are:
new Map() - creates the map

map.set(key, value) - stores the value by key

map.get(key, value) - returns the value by key, undefined if key doesn't exist in Map

map.has(key) - returns true if key exists, false otherwise

map.delete(key) - removes the value by the key

map.clear() - clears the map

map.size - returns the current element count
*/


let map = new Map()

map.set('1', 'str1'); // a string key

map.set(1, 'num1'); // a numeric key

map.set(true, 'bool1'); // a boolean key


// remember the regular Object? It would convert keys to string
// Map keeps the type, so these two are different

alert( map.get(1) ); // num1

alert( map.get('1') ); // str1

alert(map.size); //3


// Map can also use objects as keys


let john = {name: "john"};

// for every use, let's store their visits count

let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123

/*
How map compares keys

To test values for equivalence, Map uses the algorithm sameValueZero. It is roughly the same as strict
equality === , but the difference is that Nan is considered equal to NaN.

NaN can be used as the key as well

This algorithm cant be changed or customized
*/


/*

Every map.set call returns the map itself, so we can chain the calls
*/

map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1')



/*


Map from Object


When a Map is created, we can pass an array(or another iterable) with key value pairs like this


*/

// array of [key, value] pairs

let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);


/*
There is an built-in method Object.entries(obj) that returns an array of key, value pairs for an object
exactly in that format

So we can initialize a mao from an object like this
*/

let map = new Map(Object.entries({
    name: "John",
    age: 30
}));

/*
Here, Object.entries returns the array of key/value pairs: 

[ ["name", "John"], ["age", 30]]
*/





/*


Iteration over Map



For looping over a map, there are 3 methods:

map.keys - returns an iterable for keys

map.values - returns an iterable for values

map.entries - returns an iterable for entries [key, value], it's used in default in for..of

e.g
*/

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)

for ( let vegetable of recipeMap.keys()) {
    alert( vegetable ); //cucumber, tomatoes, onion
}


// iterate over values (amounts)

for (let amount in recipeMap.values()) {
    alert( amount ); // 500, 350, 50
}

// iterate over [key, value] entries

for ( let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber, 500 (and so on)

}


/*
Note:

The iteration goes in the same order as values were inserted. Map preserves this order,
unlike a regular Object
*/


/*

Set

A Set is a collection of values, where each value may occur only once
Its main methods are:

new Set(iterable) - creates the set, optionally from an array of values(any iterable will do)

set.add(value) - adds a value, returns the set itself

set.delete(value) - removes the value, returns true if the value existed at the moment of the call, otherwise false

set.has(value) - returns true if value exists in the set, otherwise false

se.clear() - removes everything from the set

set.size - is the elements count


For example, we have visitors coming, and we'd like to remember everyone. But repeated visits should npt lead to duplicates.

A Visitor must be counted only one

Set is just the right thing for that

*/


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
    alert(user.name); //John, Pete, Mary
}

/*
The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. 
But the performance would be much worse, because this method walks through the whole array checking every element. 
Set is much better optimized internally for uniqueness checks.

*/

/*

Iteration over Set

We can loop over Set either with for..of or using forEach

*/

let set = new Set(["oranges", "apples", "bananas"]);

for ( let value of set ) alert( value );

// the same with forEach

set.forEach((value, valueAgain, set) => {
    alert( value );
});

/*
Note the funny thing. The forEach function in the Set has 3 arguments: a value, then again a value, and then the target object. 
Indeed, the same value appears in the arguments twice.

That’s for compatibility with Map where forEach has three arguments. Looks a bit strange, for sure. But may help to replace Map with Set in certain cases with ease, and vice versa.

The same methods Map has for iterators are also supported:

set.keys() – returns an iterable object for values,
set.values() – same as set.keys, for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

*/



/*

WeakMap and WeakSet

WeakSet is a special kind of Set that does not prevent JS from removing its items from memory

WeakMap is the sam thing for Map

From topic Garbage, collection, JS engine stores a value in memory while it is reachable(and can be potentially used)

*/

let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory


/*
Usually, properties of an object or elements of an array or another data structure are considered
reachable and are kept in memory while that data structure is in memory

For instance, if we put an object into an array, then while the array is live, the object will be live as well, even if
there are no other references to it

Like this:
*/

let john = { name: "john" };

let array = [john];

john = null; // overwrite the reference

//john is stored inside the array, so it wont be garbage collected
// we can get it as array[0]


/*
Or, if we use object as the key in a regular Map, then while the Map exists, that object exists as well.
It occupies memory and may not be garbage collection
*/

let john = { name: "John"};

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john in stored inside the map
// we can get it using map.keys()


/*
WeakMap and WeakSet do not prevent garbage collection of key objects

The first difference from Map is that WeakMap keys must be objects, not primitive values
*/

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine, object keys

// cant use a string as a key
weakMap.set("test", "whoops"); // Error, because "test" is not an object


/*
If we use an object as the key in it, and there are no references to that object - it will be
removed from memory(and from the map) automatically
*/

let john = { name: "john"} ;

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory


/*
Compare it with the regular Map example above. Now if john only exists as the key of WeakMap - it is to be
automatically deleted

WeakMap does not support iteration and methods keys(), values(), entries(), so there is no way to get all keys or
values from it

WeakMap has only the following methods:

- weakMap.get(key)

- weakMap.set(key, value)

- weakMap.delete(key)

- weakMap.has(key)

The idea of WeakMap is that we can store something for an object that should exist only while the object exists. 
But we do not force the object to live by the mere fact that we store something for it.
*/

weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically



// That’s useful for situations when we have a main storage for the objects somewhere and need to keep additional information, that is only relevant while the object lives



/*

WeakSet:

- It is analogous to Set, but we may only add objects to WeakSet (not primitives).
- An object exists in the set while it is reachable from somewhere else.
- Like Set, it supports add, has and delete, but not size, keys() and no iterations.

For instance, we can use it to keep track of whether a message is read:
*/

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// fill it with array elements( 3 items)
let unreadSet = new WeakSet(messages);

// use unreadSet to see whether a message is unread
alert(unreadSet.has(messages[1])); // true

// remove it from the set after reading
unreadSet.delete(messages[1]); // true

// and when we shift out messages history, the set is cleaned up automatically

messages.shift();



/*
The most notable limitation of WeakMap and WeakSet is the absence of iterations,
and inability to get all current content. That may appear inconvenient, but does not prevent WeakMap/WeakSet from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.
*/
