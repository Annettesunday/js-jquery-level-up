/*

JSON methods, toJSON

Let's say we have a complex object, which we'd like to convert into a string, to send it over a network,
or just to output it for logging purposes

We could implement the conversion like this
*/

let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: ${this.name}, age: ${this.age}}`;
    }
};

alert(user); // name: John, age: 30

/*
But in the process of development, new properties are added, old props are renamed and removed.
Updating such toString everytime is  a pain
*/


/*
JSON.stringify

The JSON(Javascript Object Notation) is a general format to represent values and objects

It is eady to use JSON for data exchange when the client uses JS and the server is written in Ruby/PHP/Java/Whatever

JS provides two methods:

JSON.stringify to convert objects into JSON
JSON.parse to convert JSON back into object

e.g here we JSON.stringify a student
*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // We've got a string

alert(json);

/* JSON encoded object:

{
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "corses": ["html", "css", "js"],
    "wife": null
}
*/


/*
The method JSON.stringify(student) takes the object and converts it into a string

The resulting json string is called JSON-encoded or serialized or stringified or marshalled object.
We are ready to send it over the wire or put it into a plain data store

NOTE: 
A JSON-encoded object has several differences from the object literal:

Strings use double quotes. No single qoutes or backticks in JSON. SO 'John' becomes "John"
Object property names are double quoted also.(Obligatory)


JSON.stringify can be applied to primitives as well

Natively supported JSON types are:

Objects {...}
Arrays [...]
Primitives - strings, numbers, boolean values, null

e.g

*/

// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

/*
JSON is data-only cross-language specification, so some JS-specific object properties are skipped by JSON.stringify.

Namely:
Function properties(methods)
Symbolic properties
Properties that store undefined
*/

let user = {
    sayHi() { // ignores
        alert("Hello")
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};

alert(JSON.stringify(user));


// Nested objects are supported and converted automatically e.g


let meetup = {
    title: "Conference", 
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

alert( JSON.stringify(meetup) );

/*
The whole structure is stringified:
{
    "title": "Conference",
    "room": {"number": 23, "participants": ["john", "ann"]}
}
*/



// IMPORTANT LIMITATION: There must be no circular references e.g

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup.place = room; //meetup references room
room.occupiedBy = meetup; // room references meetup


JSON.stringify(meetup); // Error: Converting circular structure to JSON


/*
Excluding and transforming: replacer

The full syntax of JSON.stringify is:

let json = JSON.stringify(value[, replacer, space])

value - a value to encode

replacer - Array of properties to encode or a mapping function function(key, value)

space - amount of space to use for formatting

Most of the time, JSON.stringify is used with the first argument only. But if we need to fine-tune the replacement
process, like to filter out circular references, we can use the second argument of JSON.stringify

If we pass an array of properties to it, only these properties will be encoded

For instance:
*/

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
};

room.occupiedBy = meetup // room references meetup

alert( JSON.stringify( meetup, ['title', 'participants']) )
// {"title": "Conference", "participants":[{}, {}]}


/*
he property list is applied to the whole object structure. So participants are empty, because name is not in the list.

Let’s include every property except room.occupiedBy that would cause the circular reference:
*/


let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };

  room.occupiedBy = meetup; // room references meetup

  alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
  /*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */


  /*
  Now everything except occupiedBy is serialized. But the list of properties is quite long

  Fortunately, we can use a function instead of an array as the replacer
  The function will be called for every (key, value) pair and should return the "replaced value", which will be used
  instead of the original one

  In our case, we can return value "as is" for everything except occupiedBy
 To ignore occupiedBy, the code below returns undefined

*/



let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };

  room.occupiedBy = meetup; // room references meetup

  alert( JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`); // to see what replacer gets
    return (key == 'occupiedBy') ? undefined : value;
  }));

  /* key:value pairs that come to replacer:
  :             [object Object]
  title:        Conference
  participants: [object Object],[object Object]
  0:            [object Object]
  name:         John
  1:            [object Object]
  name:         Alice
  place:        [object Object]
  number:       23
  */


  /*
  Please note that replacer function gets every key/value pair including nested objects and array items. It is applied recursively.
  The value of this inside replacer is the object that contains the current property.
  The first call is special. It is made using a special “wrapper object”: {"": meetup}. In other words, the first (key, value) pair has an empty key, and the value is the target object as a whole.
  That’s why the first line is ":[object Object]" in the example above.
  The idea is to provide as much power for replacer as possible: it has a chance to analyze and replace/skip the whole object if necessary.
  */


  /*

  Formatting: spacer

  The third argument of JSON.stringify(value, replacer, spaces) is the number of spaces to use for pretty formatting

  Previously, all stringified objects had no indents ans extra spaces.
  That's fine if we want to send an object over a network. 
  The spacer argument is used exclusively for a nice output

  Here spacer = 2 tells JS to show nested objects on multiple lines, with indentation of 2 spaces inside an object
  */


 let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };

  alert(JSON.stringify(user, null, 2));
  /* two-space indents:
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */

  /* for JSON.stringify(user, null, 4) the result would be more indented:
  {
      "name": "John",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }

  The spaces parameter is used solely for logging and nice-output purposes
  */



  /*
  Custom toJSON

  Like toString for string conversion, an object may provide method toJSON for to-JSON conversion
  JSON.stringify automatically calls it if available

  For instance
  */

 let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
  };

  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */


  /*
  Here, the date (1) becomes a string. That's because all dates have built-in toJSON method which returns
  such kind of string
  Now let's add toJSON for our object room (2)

  */

 let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };

  let meetup = {
    title: "Conference",
    room
  };

  alert( JSON.stringify(room) ); // 23

  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "room": 23
    }
  */


//   toJSON is used both for the direct call JSON.stringify(room) and for the nested object


/*
JSON.parse

To decode a JSON-string, we need JSON.parse

The syntax:

let value = JSON.parse(str[, reviver]);


str - JSON-string to parse

reviver - optional function(key, value) that will be called for each (key, value) pair and can transform the value

For instance

*/

// stringified array

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert(numbers[1]); // 1

// or for nested objects

let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

alert( user.friends[1] ); // 1


/*
Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.

There’s another format named JSON5, which allows unquoted keys, comments etc.
But this is a standalone library, not in the specification of the language.

The regular JSON is that strict not because its developers are lazy, but to allow easy, reliable and very fast implementations of the parsing algorithm.
*/


/*

Using reviver

Imagine we gor a stringified meetup object from the server
It looks like this:
*/

// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';


// …And now we need to deserialize it, to turn back into JavaScript object. Let’s do it by calling JSON.parse:

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

alert( meetup.date.getDate() ); // Error!


/*
Error because the value of meetup.star is a string not a Date object

How would JSON.parse know that it should transform that string into a Date?
Let's pass to JSON.parse the reviving function that returns all values as is, but date will become Date
*/


let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // now works!


// That works for nested objects as well

let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;

  schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });

  alert( schedule.meetups[1].date.getDate() ); // works!