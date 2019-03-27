/*
Backticks are extended functionality quotes.
They allow us to embed variables and expressions into a string by wrapping them in ${..} */

let name = 'John';

// embed a variable
alert( `Hello ${name}!`)

// embed an expression

alert(`The result is ${1 + 2}`)


/* 
The typeof operator

It returns the type of the argument. It's useful when we want to process values of
different types differently or just want to do a quick check

It supports two forms of syntax: 

1. As an operator typeof x
2. As a function typeof(x)
*/
