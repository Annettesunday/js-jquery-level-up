// Object methods, this


// We write our code using objects that represent entities, that's called OOP


// Method shorthand

let user = {
    sayHi: function() {
        alert('Hello')
    }
};


// method shorthand looks better

let user = {
    sayHi() { //same as sayHi: function()
        alert('Hello')
    }
};


// this in methods

/*
It's common that an object needs to access the information stored in the object to do its job
For instance, the code inside user.sayHi() may need the name of the user

To access the object, a method can use the this keyword
The value of this is the object(the one used to call the method)
 */


 let user = {
     name: "John",
     age: 30,

     sayHi() {
         alert(this.name);
     }
 };

 user.sayHi(); //John


//  Here during the execution of user.sayHi(), the value of this will be user


/*
"this" is not bound

this is undefined in strict mode. If we try to access this.name, there will be an error

In non strict mode the value of this in such case will be the global object(window in a browser)
This is a historical behaviour that "use strict fixes"


Please not that usually a call of a function that uses this without an object is not normal, but rather
a programming mistake. If a function has this, then it is usually meant to be called in the context of an object
*/


 function sayHi() {
     alert(this);
 }

 sayHi(); //undefined


/*
Arrow functions have no "this"
If we reference this from such a function, it's taken from the outer "normal" function

For instance, here arrow() uses this from the outer.sayHi() method:
*/

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi(); //Ilya




/*
Note:
The value of this is defined at run-time
- When a function is declared, it may use this, but that this has no value until the function is called
- The function can be copied between objects
- When a function is called in the "method" syntax: object.method(), the value of this during the call is object

- When this is accessed inside the arrow function, it is taken from outside
*/







// Object to primitive conversion

/*
For objects, there's no to-boolean conversion, because all objects are true in a boolean context
So there is only string and numeric conversion
*/



/*
 To primitive

 When an object is used in the context where primitive is required, for instance, in an alert or
 mathematical operations, it's converted to a primitive value using ToPrimitive algorithm

 That algorithm allows us to customize the conversion using a special object method
 Depending on the context, the conversion has a so-called "hint"

 There are three variants:

 */



//   "string" - When an operation expects a string, for object-to-string conversions, like alert:


// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;




// "number" - When an operation expects a number, for object-number conversion like maths

// explicit  conversion
let num = Number(obj);

// math(except the binary plus)
let n = +obj; //unary plus
let delta = date1 - date2;


// less/greater comparisons

let greater = user1 > user2;



// "default"- occurs in rare cases when the operator is not sure what type to expect

/*
For instance, binary plus + can work both with strings(concatenates them) and numbers(Adds them), so both
strings and numbers would do. Or when an object is compared using == with a string, number or a symbol
*/


// binary plus 
let total = "car1" + "car2";

// obj == string/number/symbol
if (user == 1) {};


// In practice, all built-in objects except for one case(Date) implement "default" conversion the same way as Number



/*
To do the conversion, JS tries to find and call three object methods:

1. Call obj[Symbol.toPrimitive](hint) if the method exists
2. Otherwise if hint is "string"
    - try obj.toString() and obj.valueOf() , whatever exists
3. Otherwise if hint is "number" or "default"
    - try obj.valueOf() and obj.toString(), whatever exists
 */

//  Symbol.toPrimitive


let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert( `hint: ${hint}` );
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};


// conversions demo

alert(user); //hint: string -> {name: "John"}
alert(+user); //hint: number -> 1000
alert(user + 500); //hint: default -> 1500

/* As we can see from the code, user becomes a self-descriptive string or a money amount depending on the conversion. 
The single method user[Symbol.toPrimitive] handles all conversion cases.
*/


// toString/valueOf

/*
If there's no Symbol.toPrimitve then Javascript tries to find them and try in the order:
toString -> valueOf for string hint
valueOf -> toString otherwise
*/



/*
ToPrimitive and ToString/ToNumber



*/