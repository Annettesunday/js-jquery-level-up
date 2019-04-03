/*
By specification, object property keys may be either of string type, or of symbol type.
Not numbers, not booleans.
Only strings and symbols


Let's see the advantages that symbols can give us
 */


//  Symbol value represent a unique identifier

// A value of this type can be created using Symbol()

// id is a new symbol

let id = Symbol();


// We can also give symbol a description(a.ka. symbol name), mostly useful for debugging purposes

let id = Symbol("id");

/*
Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different
values.
The description is just a label that doesn't affect anything
 */

 let id1 = Symbol("id");
 let id2 = Symbol("id");



// Symbols dont do auto-convert

let id = Symbol("id");

alert( id ); //TypeError: Cannot convert a symbol value to a string


/*
That's a "language guard" against messing up, because strings and symbols are fundamentally different
and should not occasionally convert one into another
 */

 let id = Symbol("id");

 alert(id.toString()); //Symbol(id), now works


//  Or get symbol.description property to get the description only

let id = Symbol("id");
alert(id.description); //id





/*
Hidden Properties
Symbols allow us to create hidden properties of an object, that no other part of code can occassionally
access or overwrite

For instance, if we want to store an identifier for the object user, we can use a symbol as a key for it
 */

 let user = { name: "John" };
 let id = Symbol("id");

 user[id] = "ID Value";
 alert( user[id] ); //we can access the data using symbol as the key


 /*
 If we want to use a symbol in an object literal, we use square brackets
 That's because we need the value from the variable id as the key, no the string "id"
  */


//   Symbolic properties do not participate in for...loop


let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 123,
};

for (let key in user ) alert(key); //name, age(no symbols)


// the direct access by th symbol works

alert("Direct: " + user[id] );


// Object.assign copies both strings and symbol properties