/*

Object.keys, values, entries

For plain objects, the following methods are available:

Object.keys(obj) - returns an array of keys
Object.values(obj) - returns an array of values
Object.values(obj) - returns an array of [key, value] pairs


Please note the distinctions(compares to map for example):

Call syntax

Map - map.keys()
Object - Object.keys(obj), but not obj.keys

Returns
Map - iterable
Object - "real" array

*/

let user = {
    name: "John",
    age: 30
  };

  /*
  Object.keys(user) = ["name", "age"]
  Object.values(user) = ["John", 30]
  Object.entries(user) = [ ["name","John"], ["age",30] ]
  */

//   Below is an example of using Object.values to loop over property values

let user = {
    name: "John",
    age: 30
  };

  // loop over values
  for (let value of Object.values(user)) {
    alert(value); // John, then 30
  }


  /*
  Note: These methods ignore properties that use Symbol(...) as keys
  If we want symbolic keys too, then there’s a separate method Object.getOwnPropertySymbols that returns an array of only symbolic keys. 
  Also, the method Reflect.ownKeys(obj) returns all keys
  */

 let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };


  function sumSalaries(salaries) {

    let sum = 0;

    for( let salary of Object.values(salaries) ) {
        sum += salary;
    }

    return sum;
  }

//   or


let salaryAmounts = Object.value(salaries);

salaryAmounts.reduce((a, b) => a + b, 0);