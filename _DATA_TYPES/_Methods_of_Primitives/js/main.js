// JS provides methods to call on primitives

/*
Distinction between primitives ans objects


A primitive
- Is a value of a primitive type
- There are 6 primitive types: string, number, boolean, symbol, null, undefined


An object
- Is capable of storing multiple values as properties
- Can be created with {} for instance {name: "John", age: 30}


One of the best things about objects is that we can store a function as one of its properties
*/


let john = {
    name: "John",
    sayHi: function() {
        alert("Hi buddy")
    }
};
john.sayHi; //Hi buddy


/*
JS allows access to methods and properties of strings, numbers, booleans ans symbols
When this happens, a special "object wrapper" is created that provides the extra functionality, and then is destroyed

The "object wrappers" are different for each primitive type and are called: String, Number, Boolean, Symbol
Thus they provide different sets of methods
*/


let str = "Hello";

alert( str.toUpperCase() ); // HELLO

/*
Here is what actually happens:

The string str is a primitive. So in the moment of accessing its property, a special object is created that
knows the value of the string, and has useful methods like toUpperCase()

The method runs and returns a new string shown by alert
The special object is destroyed, leaving the primitive str alone
*/


let n = 1.23456

alert( n.toFixed() ); // 1.23



/*
Null and undefined are the most primitive. They have no corresponding wrapper objects
and have no methods

An attempt to access a property of such value would give the error
*/

alert(null.test); // error

