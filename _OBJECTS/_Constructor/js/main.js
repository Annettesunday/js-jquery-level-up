/*
Constructor function
They are named with the capital letter first
They should be executed only with "new operator"
*/


function User(name) {
    this.name = name;
    this.isAdmin = isAdmin;
}
let user = new User("Jack");

alert(user.name); //Jack
alert(user.isAdmin); //false



/*
When a function is executed as new User(...), it does the following steps:
1. A new empty object is created and assigned to this
2. The function body executes. Usually it modifies this, adds new properties to it
3. The value of this is returned


In other words, new User(...) does something like this
*/

function User(name) {
    // this = {}; (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this; (implicitly)
}


// So the result of new User("Jack") is the same object as:

let user = {
    name: "Jack",
    isAdmin: false
}

/*
Now if we want to create other users, we can call new User("Anne"), new User("Alice") and so on

Much shorter than using literals every time, and also easy to read

The main purpose of using constructors is to implement reusable object creation code
Any function can be used as a constructor
 */



//  Dual-syntax constructors: new.target

/* Inside a function, we can check whether it was called with new or without it, using a special new.target
property

it is empty for regular calls and equals the function if called with new
*/


function User() {
    alert(new.target);
}

// without new
User(); // undefined


// with new
new User(); //function User {...}



// That can be used to allow both new and regular calls to work the same. That is, create the same object:

function User(name) {
    if (!new.target) { // if you run me without new
        return new User(name); //.. I will add new for you
    }
    this.name = name;
}

let john = User("John"); // redirect call to new User
alert(john.name); // John



// new keyword makes it obvious that a new object is being created


/* 
Return from constructors

Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this,
and it automatically becomes the result

But if there is a return statement, then the rule is simple: 
- If return is called with object, then it is returned instead of this
- If it is called with primitive, then it is ignored


*/

function BigUser() {
    this.name = "John";
    return { name: "Godzilla"}; //<- returns an object
}

alert( new BigUser().name); // Godzilla, got that object




// Here is an example with an empty return


function smallUser() {
    this.name = "John";
    return; //finishes the execution, returns this
    // ...
}

alert( new smallUser().name); //John


// NOTE: Constructors normally dont have a return statement


// We can omit the paranthesis after new, if it has no arguments

let user = new User;



/*
Methods in constructor
Using constructor functions to create objects gives a great deal of flexibility. The constructor function
may have parameters that define how to construct the object, and what to put in it


We can add to this not only properties, but methods as well
e.g new User(name) below creates an object with the given name and the method sayHi

*/

function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert("My name is " + this.name);
    };
}

let john = new User("John");
john.sayHi(); //My name is John


/*
john = {
    name: "John",
    sayHi: function(){ ... }
}
*/


/*
 Constructor functions should only be called using new.
 Such a call implies the creation of empty this at the start and returning the populated one at the end
 */
