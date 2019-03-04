// ToString

let value = true;
alert(typeof value);

value = String(value)
alert(typeof value)

//  When division / is applied to non numbers, numeric conversions happen automatically

alert("6" / "2");

let str = "123"
alert(typeof str)

let num = Number(str)
alert(typeof str)


/* 
Numeric conversion rules

undefined becomes NaN
null => 0
true => 1
false => 0
string => whitespaces from start and end are removed. If the remaining string is empty, the result is 0. 
Otherwise, the number is read from the string. An error gives NaN

*/

alert(Number("  123   ")); //123
alert(Number("123z")); //Nan (error readind a number at Z)



// When adding values where one is a string, the other is automatically converted to a string

alert( 1 + '2'); //12



// ToBoolean

/* 
Values that are intuitively empty like 0 , an empty string, null,undefined,
and Nan become false
Other values become true
Non empty string is true
*/

alert(Boolean("0")); //true
alert(Boolean(" ")) //true since this is an non empty string