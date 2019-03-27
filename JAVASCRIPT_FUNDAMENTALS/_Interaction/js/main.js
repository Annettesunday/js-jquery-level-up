// Learning alert, prompt, confirm


// alert- shows a message


alert('message');
// This shows a message and pauses script execution until the user presses "OK"


alert('Hello');

/*
THe mini-window with the message is called a modal window. Modal means that the visitor cant interact
with the rest of the page, press other buttons etc etc until they have dealt with the window
*/




// prompt - shows a message asking the user to input text. Returns null if cancel is clicked
/*
The function prompt accepts two arguments
It shows a modal window  with a text mesage, an input field for thr visitor, and the buttons OK/CANCEL
title: text to show visitor
default: optional. the initial value for the input field
*/

result= prompt('title', 'Sunday');


let age = prompt('How old are you?' , 100);
alert(`You are ${age} years old!`);






// confirm - The function shows a modal window with a question and two buttons: OK and CANCEL.
// The result is true if okay, and false otherwise

// result = confirm(question);


let isBoss = confirm('Are you the boss?');

alert(isBoss); //true if OK is pressed



// All these methods are modal; they pause scriot execution and dont allow the visitor to interact with the rest of the 
//page until the window has been dismissed.
// 

// Limitation
//  - The exact location of the modal window is determined by the browser- usually in the center
// tHe exact location of the window depends on the browser





var userName = prompt('Please input your name here', 'Annette Sunday');

alert(`Your name is ${userName}`);

