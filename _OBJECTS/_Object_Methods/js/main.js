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
