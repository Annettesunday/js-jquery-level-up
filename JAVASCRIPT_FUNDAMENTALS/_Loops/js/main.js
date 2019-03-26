while(condition) {
    // code
    // so called loop body
}

// while the condition is true, the code from the loop body is executed


let i = 0;

while(i<3) {
    alert(i); //shows 0, 1 and 2
    i++;
}

// A single execution of the loop body is called an iteration. The loop above makes three iterations.
// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated 
// and is converted to a boolean by while


let i = 3;

while(i){
    alert (i); //when i becomes 0, the condition becomes falsy and the loop stops
    i--;
}

// Brackets are not required for a single line body

let i = 3;
while(i); alert (i--);




// The do...while loop


do {
    //loop body
}
while(condition);

//The loop will first execute the body, and check the condition. And while the condition is truthy it will execute
// the loop body again and again


let i = 0;

do {
    alert(i);
    i++;
}
while(i < 3);


// This form of syntax should only be used when you want the loop body to be execute
// multiple times eve though the condition is falsy






// The for loop - commonly used
for (begin; condition; step) {
    //loop body
}

for(i; i<3; i++){
    alert(i)
}


// begin- i = 0 Executes once upon entering the loop
// condition i < 3 Checked before every loop iteration. If false, the loop stops
// step i++ executes after the body on each iteration but before the condition
// body alert(i) Runs again and again while the condition is truthy


// If  condition, run body and run step




// Do not do inline variable declaration here



let i = 0;
for(; i < 3;){
    alert (i++);
}


// Breaking the loop
// Normally, a loop breaks when the condition becomes falsy
// We can fore a break using the special break directive


// Break stops the loop immediately and gives control to the next line after the loop



// Continue to the next iteration

// Continue does not stop the entire loop, instead it stops the current iteration and forces loop to start a new one
// (if condition allows)





// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.
// To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

// If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

// break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.


