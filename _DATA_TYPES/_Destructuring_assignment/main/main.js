/*
The two most used data structure in JS are Object and Array

Destructuring assignment is a special syntax that allows us ti "unpack" arrays or objects into a bunch
of variables, as sometimes they are convenient.


Destructuring also works great with complex functions that have a lot of parameters, default values
*/



// Array destructuring

// we have an array with the name and surname
let arr = ["Ilya", "Kantor"];

// destructing assignment
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname); //Kantor



// Now we work with variables instead of array  members
// it looks great when combined with split or other array-returining methods


let [firstName, surname] = "Ilya Kantor".split( '');


/*
Destructuring does not mean destructive. It's called destructuring because it "destructurizes" by copying items
into variables. But the array itself is not modified

It's just a shorter way to write
*/

let firstName = arr[0];




/*

Ignore elements using commas

Unwanted elements of the array can also be thrown away via an extra comma
*/

// second element is not needed

let [firstName, , title] = ["Juluis", "Caesar", "Consul", "of the Roman Republic"];

alert(title); // Consul


// In the above code, the 2nd element of the array is skipped, 3rd one is assigned to title, and the rest of the array is also skipped



/*

Works with any iterables on the right side
Actually, we can use it with any iterable, not only arrays
 */


let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);


/*
Assign to anything at the left side

e.g an object property
*/

let user = {};
[user.name, user.surname] = "Ilya Kantor".split( );

alert( user.name ); // Ilya

/*
Looping with .entries()

We can use Object.entries(obj) method to loop over keys-and-values of an object
*/

let user = {
    name: "John",
    age: 30
};

// loop over keys and values

for (let key of Object.entries(user)) {
    alert( `${key}: ${value}`); // name: John, age: 30
}


// And the same for a map

let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user.entries()) {
    alert( `${key}: ${value}`); // name: John, age: 30
}


/*

The rest '...'

If we want not just to get first values, but also to gather all that follows - we can add one more parameter that gets
"the rest" using three dots "..."
*/


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar


// Note that type of rest is Array

alert(rest[0]); //Consul
alert(rest[1]); // of the Roman Republic

alert(rest.length); // 2

/*
The value of rest is the array of the remaining array elements. We can use any other variable name in place
of rest, just make sure it has three dots before it and goes last in the destructuring assignment
*/

/*

Default values

If there are fewer values in the array than variables in the assignment, there will be NO error

Absent values are considered undefined
*/

let [firstName, surname] = [];

alert(firstName); //undefined
alert(surname); // undefined


// If we want a "default" value to replace the missing one, we can provide it using =

// default values

let [name = "Guest", surname = "Anonymous"] =  ["Julius"];

alert(name); // Julius (from array)
alert( surname ); //Anonymous (default used)


/*
Default values can be more complex expressions or even function calls. They are evaluates
only if the value is not provided

Here, we use prompt function for two defaults. But it will run only for the missing one
*/

// runs only prompt for surname

let [name = prompt('name?'), surname = prompt('surname')] = ["Julius"];

alert(name); //Julius
alert(surname); //whatever prompt gets


/*

Object destructuring
The basic syntax is

*/

 let {var1, var2} = {var1:..., var2...};

 /*
 We have an existing object at the right side, that we want to split into variables.

 The left side contains a pattern for corresponding properties. In the simple case, that's a list of variable
 names in {...}

 e.g
 */

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;

alert(title); //Menu
alert(width); // 100
alert(height); // 200

/*
Properties options.title, options.width and options.height are assigned to the corresponding variables.
The order does not matter

This works too
*/

// changed the order of properties in let

let {height, width, title} = { title: "Menu", height: 200, width: 100 }


/*

The pattern on the left side may be complex and specify the mapping between properties and variables

If we want to assign a property to a variable with another name, for instance, options.width to go into the varaible 
named w, then we set it using a colon
*/

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// {sourceProperty: targetVariable}
let {width: w, height: h, title}; options

// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(h); 200
alert(w); 100

/*
The colon shows "what: goes where". In the example above the property width goes to w,
property height goes to h, and title is assigned to the same name

For potentially missing properties we can set default values using "=", like this
*/

let options = {
    title: "Menu"
};

let { width = 100, height = 200, title } = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200


/*
Just like with arrays or function parameters, default values can be any expressions or even  function calls

They will be evaluated if the value is not provided

The code below asks for width, but not the title
*/

let options = {
    title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

alert(title);  // Menu
alert(width);  // (whatever you the result of prompt is)



// We can also combine both colon and equality

let options = {
    title: "Menu"
};

let { width: w = 100, height: h = 200, title } = options;

alert(title); // Menu
alert(h); 200
alert(w); 100



// The rest operator

let options = {
    title: "Menu",
    height: 200,
    width: 100
};

let {title, ...rest} = options;

// now title="Menu" rest = {height: 200, width: 100}

alert(rest.height); // 200
alert(rest.width); // 100


/*

Gotcha without let 

In the examples above variables were declared right before the assignment: let {…} = {…}.
Of course, we could use existing variables too. But there’s a catch.

This won’t work:
*/

let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};


// The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:


{
    // a code block
    let message = "Hello";
    // ...
    alert( message );
  }

//   To show JavaScript that it’s not a code block, we can wrap the whole assignment in parentheses (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu


/*
Nested destructuring

If an object  or an array contain other objects and arays, we can use more complex left-side patterns to extract deeper
options

*/

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true // something extra we will not destruct
};

// destructuring assignment on multiple lines for clarity

let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    title = "Menu" // not present in the object (default value is used)
} = options


// Note that size and items itself is not   destructed



/*

Smart function parameters

There are times when a function may have many parameters, most of which are optional

That's especially true for user interfaces. Imagine a function that creates a menu

It may have a width, height, title, item list etc

Here's a bad way to write such a function
*/

function showMenu(tile = "Untitled", width = 200, height = 100, items = []) {
    // ...
}


/*
The problem is how to remember the order of arguments. Usually IDEs try to help us, esp if the code
is well documented, but still...

Another problem is how to call a function when most parameters are ok by default 

e.g

*/

showMenu("My Menu", undefined, undefined, ["item1", "item2"])


/*
That's ugly and becomes unreadable when we deal with more parameters

Destructuring comes to the rescue

We can pass parameters as an object, and then the function immediately destructures them into variables
*/


// we pass object to a function
let options = {
    title: "My menu",
    items: ["item1, item2"]
};

// ... and it immediately expands it to variables

function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items - taken from options
    // width, height - defaults used

    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert(item1); // item1
    alert(item2); // item2
}

showMenu(options);


// The syntax is the same for a destructuring assignment

function({
    incomingProperty: parameterName = defaultValue
})

// Please note that such destructuring assumes that showMenu() does not have an argument. If we want all values by default, we should specify an empty obj

showMenu({});

showMenu(); // this would give an error


// We can fix this by making {} the default for the whole destructuring this


// simplified parameters a bit for clarity

function showMenu({title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
}

showMenu(); // menu 100 200


// In the code above, the whole arguments object is {} by default, so there's always smthing to destructurize


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {

    let max = 0;
    let maxName = null;

    for( const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name
      }
    }
    return maxName;
  }

  topSalary(salaries);