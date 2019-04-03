// Objects

// There are 6 primitive data types in JS(because they contain only a single thing(br it string or number))

/*
Objects are used to store keyed collections of various data and more complex entities.

An object can be created with figure brackets {...} with an optional list of properties.
A property is a "key: value" pair, where key is a string(a.k.a property name) and value can be anything

*/

// An empty object can be created using one of two syntaxes:

let user = new Object(); //object constructor syntax

let user = {}; //object literal syntax




// Literals and properties

let user = { //an object
    name: "John", //by key "name" store value "John"
    age: 30 //by key "age" store value 30
};

// A property has a key(also known as name or identifier) before the :


// We can add, remove or read files from it any time


// Property values are accesible using the dot notation:


// get fields of the object
alert(user.name); //John
alert(user.age); //30


// The value can be of any type(adding a new property to the object)
user.isAdmin = true;


// To remove a property, we can use delete operator:

delete user.age;


// We can also use multiword property names, but then they must be quoted:

let user = {
    name: "John",
    age: 30,
    "likes birds": true //multiword property must be quoted
}

// The last property in the list may end with a comma:

let user = {
    name: "John",
    age: 30,
}

// That is called a trailling or hanging comma. Makes it easier to add/remove/move around properties, bc all lines are alike

// There's an alternative "square bracket notation" that works with any string;

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); //true

// delete
delete user["likes birds"];


// Square brackets also provide a way to obtain the property name as the result of any expression

let key = "likes birds";

user[key] = true;


/* Here, the variable keybmay be calculated at run-time or depend on the user input
And then we use it to calculate the property. That gives us a great deal of flexibility */


/* Computed properties
We can use square brackets in an object literal. That's called computed properties
*/

let fruit = prompt("Which fruit to buy", "apple");

let bag = {
    [fruit]: 5, //the name of the property is taken from the variable fruit
};

alert(bag.apple); //5 if fruit="apple"


// The meaning of a computed property is simple. [fruit] means that the property name should be taken from fruit


// same as

let fruit = prompt("which fruit ti buy?", "apple");

let bag = {};

bag[fruit] = 5; //take property name from the fruit variable


// We can use more complex expressions inside square brackets

let fruit = "apple";
let bag = {
    [fruit + "Computers"]: 5, //bag.appleComputers = 5
};


// Square brackets are much more powerful than the dot notation. They allow any property names and variables


/* Reserved words are allowed as property names
A variable cannot have a name equal to one of language-reserved words like for, let, return etc
But for an object property, there's no such restriction. Any name is fine
*/

let obj = {
    for: 1,
    let: 2,
    return: 3,
};

alert(obj.for + obj.let + obj.return); //6


/*
Basically, any name is allowed, but there's a special one: "__proto__" that gets special treatment
 for historical reasons.
 For instance we cant set it to a non object value
 */

 let obj = {};

 obj.__proto__ = 5;
 alert(obj.__proto__); // [object Object], didnt work as intended

 /*
 The assignment to a primitive 5 is ignore

 That can become a source of bugs and even vulnerabilities if we intend to store arbitrary key-value
 pairs in an object, and allow a visitor to specify the keys


 In that case the visitor may choose "proto" as the key, and the assignment logic will be ruined

 There is a way to make objects treat __proto__ as a regular property
  */



//   Property value shorthand. In real code we often use existing variables as values for property names


function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ... other properties
    };
}

let user = makeUser("John", 30);
alert(user.name); //John


// special property value shorthand


function makeUser(name, age) {
    return {
        name, //same as name: name
        age, //same as age: age
    }
}

// We can use both normal properties and shorthand in the same object 

let user = {
    name,
    age: 30,
}


// Existence check
/*
A notable objects feature is it's possible to access any property
There will be no error if the property does not exist.
Accessing a non-existing property just returns undefined
*/

let user = {};
alert( user.noSuchProperty === undefined ); //true means no such property


// There is also a special operator in to check for the existence of a property

// The syntax is 

"key" in object

let user = {
    name: "John",
    age: 30,
}

alert("age "in user); //true user.age exists
alert("blabla" in user); //false user.blabla does not exist



/* Please not that on the left side of in there must be a property name. That is usually a quoted string

If we omit quotes, that would mean a variable containing the actual name will be tested
*/


let user = {age: 30};
let key = "age";

alert(key in user); //true, takes the name from key and checks for property





/* Using "in" for properties that store undefined

Usually the strict comparison "=== undefined" check works fine. But there's a special case when it fails. but "in"
works correctly

it's when an object property exists, but stores undefined:
*/


let obj = {
    test: undefined
};

alert(obj.test); //its undefined, so no such property
alert("test" in obj); //true, the property does exist




// The "for..in" loop


/*
To walk over all keys of an object, there exists a special form of the loop: for..in.
 Completely different to the for loop
The syntax is
*/

for (key in object) {
    // executes the body for each key among object properties
}


// Pulling out all properties of a user


let user = {
    name: "Annette",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    alert(key); //name, age, isAdmin
    // values for key
    alert(user[key]); //Annette, 30, isAdmin
}

/*
Note  that for all "for" constructs allow us to declare the looping variable inside the loop, like let key here
Also, we could use another variable here instead of "key". For instance "for (let prop in obj" is also commonly
used
 */



//  Ordered like an object

/*
If we loop over an object, do we get all prperties in the sam eorder they were added?
The short answer is: "ordered in a special fashion":
integer property are sorted, others appear in creation order
 */



 let codes = {
     "49": "Germany",
     "41": "Switzerland",
     "44": "Great Britain",
     // ..,
     "1": "USA"
 };

 for( let code in codes) {
     alert(code); //1, 41, 44, 49
 }


//  The phone codes go in the ascending sorted order, because they are intefers. So we see 1, 41, 44, 49


/*
 Integer properties

 This means a string can be converted to and from an integer without a change
 So, "49" is an integer property name, because when it's transformed to an integer number and back, it;s still the same
 But "+49" and "1.2" are not:
 */


//  Math.trunc is a built-in function that removes the decimal part

alert( String(Math.trunc(Number("49"))) ); //"49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); //49, not same "+49", not an integer property
alert( String(Math.trunc(Number("1.2"))) ); //1, not same as 1.2, not an integer property



// If keys are non-integer, they are listed in the creation order


let user = {
    name: "John",
    surname: "Smith",
};

user.age = 25;

for (let prop in user) {
    alert( prop ); //name, surname, age
}



/*
So to fix the issue with the phone codes, we can cheat by making the codes non-integer. 
Adding a plus sign "+" before each code is enough */



let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }




  /*
  Copying the Reference

One of the fundamental differences of objects vs primitives is that they are stored and copied by "reference"
Primitive values: strings, numbers, booleans - are assigned/copied "as a whole value" e.g
   */


   let message = "Hello";
   let phrase = message;


//    As a result we have two independent variables, each one is storing the string "Hello"



/* NOTE: OBJECTS ARE NOT LIKE THAT
A variable stores not the object itself, but its "address memory", in other words "a reference " to it
Hence, the object is stored somewhere in memory . And the variable user has a reference to it
When an object variable is copied- the reference is copied, the object is not copied

*/



let user = {
    name: "John"
};

let admin = user; //copy the reference


// Now we have two variables with the reference to the same object


// We can use any variable to access the cabinet and modify its content

let user = {
    name: "John"
};

let admin = user;
admin.name = 'Pete'; //changed by the admin reference

alert(user.name); //Pete, changes are seen from the user reference


/*The example above demonstrates that there is only one object. As if we had a cabinet with two key
s and used one of them(admin) to get into it. Then if we later use the other key(user) we would see changes*/




// Comparison by reference

/*
The equality == and strict equality === operators for objects work exactly the same
Two objects are equal if they are the same object

For instance, two variables reference the same object, they are equal
*/


let a = {};
let b = a;

alert( a == b); //true, both variables reference the same object
alert( a === b); // true


// And here two independent objects are not equal, even though both are empty


let a = {};
let b = {};

alert( a == b); //false





// Const object

// An object declared as const can be changed


const user = {
    name: "John"
};

user.age = 25; // (*)

alert( user.age ); //25

/*
It seems like line (*) would cause an error but there's totally no problem. That's because
const fixes the value of user itself. And here user stores the reference to the same object all the time

The line (*) goes inside the object, it does not reassign user
*/


// The const would give an error if we try set user to something else e.g


const user = {
    name: "John"
};

//Error (cant reassign user)

user = {
    name: "Peter"
};




// Cloning and merging, Object.assign

/*
So, copying an object variable creates one more reference to the same object

But what if we need to duplicate an object

We need to create a new object and replicate the structure of the existing one by iterating over its property
copying them on the primitive level 
e,g
*/

let user = {
    name: "John",
    age: 30,
};

let clone = {}; //the new empty object


// let's copy all user properties into it

for (let key in user) {
    clone[key] = user[key];
}


// now clone is a fully independent clone
clone.name = "Peter"; //changed the data in it


alert( user.name); // still John in the original object




// Also, we can use the method Object.assign for that


// The syntax is

Object.assign(dest[src1, src2, src3])


/*
Arguments dest and src1, ...srcN are objects
It copies the properties of all objects src1..., srcN into dest
In other words, properties of all arguments starting from the 2nd are copied into the first.
Then it returns dest


For instance, we can use it to merge several objects into one:
 */


 let user = {
     name: "John"
 }

 let permissions1 = { canView: true };
 let permissions2 = { canEdit: true };


//  copies all properties from permissions1 and permissions2 into user

Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, can Edit: true }; 



// If the receiving object(user) already has the same named property, it will be overwritten:


let user = {
    name: "John"
}
// overwrite name and add isAdmin

Object.assign(user,{name: "Annette", isAdmin: true});

// now user = { name: "Annette", isAdmin: true }



// We can also use Object.assign to replace the loop for simple cloning


let user = {
    name: "John",
    age: 30
}


Object.assign({}, user);

// It copies all the properties of user into an empty object and returns it




// Deep Cloning

// We can use a working implementation of it from JS library lodash, the method is called _.cloneDeep(obj)






