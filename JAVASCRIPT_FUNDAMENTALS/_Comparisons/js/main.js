//  A single = would mean assignment

// != is notation for not equal in Javascript


// A comparison result can be assigned to a variable, just like any value

let result = 5 > 4;
alert(result); // true


/*
Algorithm to compare two strings: 

1. Compare the first character of both strings
2. If the first letter from the first string is greater(or less) than the other string's then the first string is greater
or less than the second
3. Otherwise if both strings' first characters are the same, compare the second characters the same way.
If both strings end at the same length, then they are equal. Otherwise the longer string is greater
 */

 'Glow ' > 'Glee';

//  Comparison of different types

alert('2' > 1); //true, string is converted to number
alert('01' == 1); //true, '01' becomes number 1

alert( true == 1); //true
alert(false == 0); //true



// Strict equality

/*
A regular equality check == has a problem. It cannot differentiate 0 from false because operands
of different types are converted to numbers by the equality operator


A strict equality operator === checks the equality without type conversion e.g
if a and b are of different types, then a === b immediately returns false without an attempt to convert them
*/


alert(0 === false); //false, because the types are different
 

// There is also a strict non-equality !== analogous to !=




// Comparison with null and undefined

/*
These values are different because they are of different types
*/

// For strict equality check ===
alert(null === undefined); //false


// For non-strict equality check ==
alert(null == undefined); //true


/*
NOTE: For comparisons, null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN
*/



alert(null > 0); //false null has been converted to 0 on comparison
alert(null == 0); //false without any comparisons, null doesnt equal anything else other than undefined
alert(null >= 0); true