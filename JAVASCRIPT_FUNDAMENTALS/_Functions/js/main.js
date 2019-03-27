// Function declaration

function showMessage() {
    alert('Hello Everyone!')
}

showMessage(); //calling the function
showMessage();



// The function keyword goes first, then the name of the function, then the list of the parameters and finally
//  the function body inside the curly braces

// Functions avoid code duplication



// Local Variables - a variable declared inside a function is only visible within that function

function showMessage() {
    let message = 'Hello Javascript';
    alert(message);
}

showMessage(); //Hello, I'm Javascript
alert(message); //Error! The variable is local to the function




// outer variables

// A function can access an outer variable as well


let userName  = 'Annette';

function showMessage() {
    let message = 'Hello' + userName;
    alert(message);
}

showMessage(); //Hello Annette


// A function can modify an outer variable as well

let userName = 'John';

function showMessage(){
    userName = Bob;
    let message = 'Hello' + userName;
    alert(message);
}

alert(userName); //John; before function call

showMessage();
alert(userName); //Bob; the function will modify the name


// The outer variable is used if there is no outer one

// If same-named variable is declared inside a function, then it overshadows the outer one e.g
// the local variable is used below and the outer one is ignored

let userName = 'Johnny';

function showMessage() {
    let userName = 'Annette'
    let message = `Hello ${userName}`

    alert(message);
    alert(userName); //Annette; the function did not read the outer variable
}

showMessage(); //the function will create and use its own variable





// Variables declared outside a function are called global variables
// Global variable are visible from any function unless overshadowed by locals

// Usually a function declares all variables specific to its task
// Global variables only store project-level data, and its important that they are accessible from anywhere

// Modern code has few globals









// Parameters

// We can pass arbitrary data to function using parameters(function arguments)


function showMessage(from, text) {
    alert(from + ':' + text);
}

showMessage('Anne', 'Hello'); //Anne: Hello
showMessage('Anne', "what's up?"); //Anne: what's up?


// When the function is called, the given values are copied to the local variables from and text. Then the function uses them




// Default Values

// If a parameter is not provided, then its value becomes undefined e.g showMessage(from, text) can be called with a single argument


showMessage('Anne'); //Anne: undefined

// If we want to use a default text then we can specify it after



function showMessage(from, text='no text given'){
    alert(from + ':' + text);
}
showMessage('Anne'); //Anne: no text given


// If the text parameter is not passed, it will get the value "no text given"

// Here, "no text given" is a string but it can be a more complex expression, which is only evaluated and assigned
// if the parameter is missing. So the below is also possible


function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of the text
}


// Old style default parameters

function showMessage(from, text){
    if (text == undefined){
        text = 'no text given'
    }
    alert(from + ':' + text)
}

function showMessage(from, text){
    text = text || 'not given text'
    alert(from + ':' + text)
}






// Returning a value

// If you use a return without a value, it causes the function to exit immediately



function showMovie(age) {
    if (!checkAge(age)){
        return;
    }
    alert('Showing you the movie')
}

// if checkAge(age) returns false, then the function showMovie() wont proceed to alert


// An empty return is the sam e as return undefined



function doNothing(){
    return;
}

alert(doNothing() === undefined); //true


// NOTE: Never add a newline between return and a new value. JS forces a semicolon after the return



// Naming a Function
// Functions are actions and their names are usually verbs. Should be brief, accurate, and describe what the function does, so that
// someone reading the code can get a clear indication of what the function does


// It is widespread practice to start a function with a verbal prefix which vaguely describes the function




// get - return a value
// calc- calculate something
// create - create something
// check - check something and return a boolean

//  A function should do what is suggested by its name, no more


// Two independent actions usually deserve two functions, even if they are usually called together(we can make
// a third function that calls those two)

function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have parents permission to access this page?');
}

function checkAge(age){
    return (age > 18) || 'Do you have permission';
}



function getLeastNum(a,b){
    if(a < b) {
        return a;
    }
    else {
        return b
    }
}


function getLeastNum(a, b) {
    return a < b ? a: b;
}


// Function expression - Here the function is created and assigned to the variable explicitly

let sayHi = function(){
    alert('Hello');
}
alert(sayHi); //shows the function code

// Note: THe last line does not run the function because there are not paranthesis  after sayHi.
// Ther are other programming languages where any mention of a fuction namr causes its execution, but JS is not like that


// We can copy a function to another variable

// Create
function sayHi(){
    alert('Hello')
}

// Copy

let func = sayHi; ///putting paranthesis here would cause func to output the result of sayHi


func(); //run the copy, it works
sayHi(); //this still works too



// Callback functions - passing functions as values


// A function declaration is only visible inside the code block in which it resides. It is processed before the 
// code block is executed


// Function expressions are created when the execution flow reached them


// Arrow functions is always better than function expressions



let func = (arg1, arg2, ...argN) => expression;


// If we only have only one argument, the paranthesis can be omitted, making that even shorter


let double = n => n * 2;


// If there are no argurments, paranthesis should be empty but present

let sayHi = () => alert('Hello');


// The curly braces opens a multiline function

let sum  = (a, b) => {
    let result = a + b;
    return result;
};

alert(sum(1, 2))
