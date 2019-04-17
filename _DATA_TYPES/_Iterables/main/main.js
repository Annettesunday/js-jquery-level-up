/*
Arrays, strings, and other built-in objects are iterable

If an object represents a collection(list, set) of something, then for...of is a great syntax to loop over it
*/


// Symbol.iterator

let range = {
    from: 1,
    to: 5
};

// We want the for...of to work
// for(let num of range) ... num=1,2,3,4,5

/*
To make the range iterable(and thus let for..of work) we need to add a method to the object named Symbol.iterator
(a special built-in symbol just for that)

1. When for..of starts, it calls that method once(or errors if not found). The method must return an iterator -
an object with the method next

2. Onward, for..of works only with that returned object

3.When for..of wants the next value, it calls next() on that object

4. The result of next() must have the form {done: Boolean, value: any}, where done = true means that the 
iteration is finished, otherwise value must be the new value
*/

// Here's the full implementation of range:

let range = {
    from: 1,
    to: 5
};

// 1. call to for...of initially calls this
range[Symbol.iterator] = function() {

    // ... it returns the iterator object
    // 2. Onwards, for...of works only with this iterator, asking it for next values

    return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for...of loop
        next() {
            //4. it should return the value as an object {done:.., value: ..}
            if(this.current <= this.last) {
                return { done: false, value: this.current++};
            } else {
                return { done: true}
            }
        }
    };
};

// noe it works

for ( let num of range ) {
    alert(num); // 1, then 2, 3, 4, 5
}

/*

Please note the core features of iterables: an important separation of concerns:

- The range itself does not have the next() method
- Instead, another object s so-called "iterator" is created by the call to range[Symbol.iterator](), 
and it handles the whole iteration

So, the iterator object is seperate from the object it iterates over

Technically, we may merge them and use range itself as the iterator to amke the code simpler
*/


let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return {done: false, value: this.current++};
        } else {
            return {done: true}
        }
    }

};

for (let num of range) {
    alert(num); // 1, 2, 3, 4, 5
}


/*
Now range[Symbol.iterator]() returns the range object itself: it has the necessary next() method and 
remembers the current iteration progress in this.current

Downside: it's impossible to have two for..of loops running over the object simultaneously: they'll share
the iteration state, bc there's only one iterator - the object itself
*/



// String is iterable

for (let char of "test") {
    //  triggers 4 times for each character
    alert(char); // t, e, s, t
}

// And it work correctly with surrogate pairs


let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, and then 😂
}



// Calling an iterator explicitly


let str = "Hello";

// does the same thing as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();

    if (result.done) break;

    alert(result.value); // outputs characters one by one
}

/*
The above is rarely needed but gives us more control over the process than for..of. For instance, we can split the iteration
process: iterate a bit, then stop, so something else, and then resume later
*/



/*
Iterables and array-likes


Iterables are objects that implement the Symbol.iterator method as described above
Array-likes are objects that have indexes and length, so they look like arrays


But an iterable may be not array-like. And vice versa an array-like may be not iterable.

For example, the range in the example above is iterable, but not array-like, because it does not have indexed properties and length

*/

// Here is the object that is array-like but not iterable


let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

// Error (no Symbol.iterator)

for ( let item of arrayLike) {}


/*
Array.from

There is a universal method Array.from that takes an iterable or array-like value and makes a "real"
Array from it. Then we can call array methods on it
*/

let arrayLike =- {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); 

alert(arr.pop() ); // World (method works)


/*
Array.from on line 198 takes the object, examines it for being iterable or arrayLike,
then makes a new array and copies all the items there

The same happens for an iterable
*/

// range is taken from the above example
let arr = Array.from(range);

alert( arr ); // 1, 2, 3, 4, 5 (array to String conversion works)



// The full syntax of Array.from allows to provide an optional mapping function:

Array.from(obj[, mapFn, thisArg])


/*
The 2nd argument mapFn should be function to apply to each element before adding to the array,
and thisArg allows to set this for it
*/


// assuming that range is taken from the example above

// square each number

let arr = Array.from(range, num => num * num);

alert( arr ); // 1, 4, 9, 16, 25


// How we can use Array.from to turn a string into an array


let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2