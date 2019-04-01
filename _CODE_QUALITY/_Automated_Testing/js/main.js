/* Automated testing means that tests are written separately in addition to the code. 
They can be executed easily and check all of the main use cases */


// Behavioural Driven Development(BDD) - tests, documentation and examples


describe('pow', function() {

    it('raises to n-th power', function() {
        assert.equal(pow(2, 3), 8);
    });

});


/* 
A spec has 3 main building blocks:
- describe('title', function() {...}): what functionality we are describing
- it('title, function() {...}): in the title of it we in a human-readable way describe 
the particular use case, and the second argument is a function that tests it
- assert.equal(value1, value2): The code inside "it" block, if the implementation is 
correct should execute without errors
Functions assert.* are used to check whether pow works as expected. Right here we're using one of them

- assert.equal, it compares arguments and yields an error if they are not equal. Here it checks that
the result of pow(2, 3) equals 8




The Development Flow
1. An initial spec is written, with tests for the most basic functionality
2. An initial implementation is created
3. To check whether it works, we run the testing framework Mocha that runs the spec.
Errors are displayed. We make corrections until everything works
4. Now we have a working initial implementation with tests
5. We add more use cases to the spec, probably not yet supported by the implementations.Tests start to fail
6. Go to 3, update the implementation till tests give no errors
7. Repeat 3 - 6 until the functionality is ready






The spec in action
We will be using the following JS libraries for tests:
Mocha- the core framework; it provides common testing functions including describe and it and
the main functions that run tests
Chai - the library with many assertions. It allows to use a lot of different assertions
Sinon - a library to spy over functions, emulate built-in functions and more

*/


// Ways to organize the spec

describe("pow", function() {
    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(3, 4), 81);
    });
});

// OR
describe("pow", function() {
    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8)
    });
    it("3 raised to power 3 is 21", function() {
        assert.equal(pow(3, 3), 27)
    });
})

/* 
The principal difference is that when the assert triggers an error, it block immediately
terminates. So in the first variant if the first assert fails,. then we'll never see the result of the 
second assert


More tests separate is useful to get more information about what's going, so the second variant is better

*/

// One test checks one thing



function pow(x, n) {
    let result  = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}


/* To be sure that the function works well, let's test it for more values. Instead of writing 
it blocks manually, we can generate them in for*/


describe("pow", function() {
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(X);
    }
});


// Nested Describe

describe("pow", function() {
    describe("raises x to power 3", function() {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }
        for (let x = 1; x <= 5; x++) {
            makeTest(X);
        }
    });
    // ...more tests to follow here, both describe and it can be added
});

// The new describe defines a new subgroup of tests.



/* *before/after and beforeEach/afterEach 

We can setup before/after functions that execute before/after running tests, and also 
beforeEach/afterEach functions that execute before/after ever it*/


describe("test", function() {
    before(() => alert("Testing started - before all tests"));
    after(() => alert("Testing finished - after al;l tests"));

    beforeEach(() => alert("Before a test - enter a test"));
    afterEach(() => alert("After a test - exit a test"));


    it('test 1', () => alert(1));
    it('test 2', () => alert(2));
});

/* The running sequence will be:

Testing started – before all tests (before)
Before a test – enter a test (beforeEach)
1
After a test – exit a test   (afterEach)
Before a test – enter a test (beforeEach)
2
After a test – exit a test   (afterEach)
Testing finished – after all tests (after)
*/