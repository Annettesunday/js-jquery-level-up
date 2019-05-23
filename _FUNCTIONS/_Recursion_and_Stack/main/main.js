/*

Recursion and stack


Recursion is a programming pattern that is useful in situations when a task can be naturally split into several
tasks of the same kind but simpler

Or when a task can be simplified into an easy action plus a simpler variant of the same task

When a function solves a task, in the process it can call many other functions. A partial case is
when a function calls itself. That's called recursion


Two ways of thinking

Lets write a function pow(x, n) that raises x to a natural power of n

pow(n, n) = 4
pow(2, 3) = 8

There are two ways to implement it:

*/

// Iterative thinking: the for loop

function pow(x, n) {
    let result = 1;

    // multiply the result by x n times in the loop
    for (let i = 0; i < n; i++ ) {
        result *= x;
    }
    return result;
}

alert( pow(2, 3) ); // 8



// Recursive thinking: simplify the task and call itself

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert( pow(2, 3) ); // 8