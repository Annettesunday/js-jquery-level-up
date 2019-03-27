//  || (0R) && (AND) ! (NOT)



let age;

if (age >= 14 || age <= 90) {
    alert('Yeah. You are withing that age')
}


// || (OR)
// If an operand is not boolean, it is converted to a boolean for the evaluation

// OR is used in an if statement to test if any of the given conditions is true

let hour = 9;

if (hour < 10 || hour > 18) {
    alert('The office is closed');
}

// OR finds the first truthy value

// The OR operator does the following:
// - Evaluates operands from left to right
// - For each operand, converts it to boolean. If the result id true, stops and returns the original value o that
// operand(short circuit evaluation)
// - If all operands have been evaluated(i.e all were false), returns the last operand

// A value is returned in its original form, without the conversion



let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || 'unnamed';

alert(name); ///selects John as the first truthy value



// && finds any first falsy value


//!

// - Converts the operand type: true/false
//  - Returns the inverse value


