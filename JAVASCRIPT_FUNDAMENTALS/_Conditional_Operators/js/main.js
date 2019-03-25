// The if statement evaluates a condition, and if the result is true, it executes a block of code


let year = prompt('In which year was ECMAScript-2015 spec published?')

if (year == 2015) {
alert('You are right!');
}

// Always use curly braces in if statements for readability



// Ternary operator using multiple '?'

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi baby' :
(age < 18) ? 'Hello':
(age < 100) ? 'Greetings':
'What an unusual age';

myNumber = prompt('Please input a number here', 20)

if (myNumber > 0 ) {
    alert(1);
}
else if (myNumber < 0) {
    alert(-1);
}
else if (myNumber == 0) {
    alert(0)
}



result = (a + b < 4) ? 'Below': 'Over';


let myMessage = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';