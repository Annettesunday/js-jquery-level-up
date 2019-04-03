/*

Memory management in JS is performed automatically and invisibly to us.
We create primitives, objects, functions. All that takes memory

What happens when something is not needed any more? How does the JS engine discover it and clean it up



Reachability

The main concept of memory management in JS is reachability
Simply put, "reachable" values are those that are accessible or usable somehow. They are guaranteed to be stored in memory

1. There's a base set of inherently reachable values that cannot be deleted for obvious reasons

For instance:
- Local variables and parameters of the current function
- Variables and parameters for other functions on the current chain of nested calls
- Global variables

These are called roots



2. Any other value is considered reachable if it;s reachable from a root by reference or by a chain of references


For instance, if there's an object in a local variable, and that object has a property referencing another object,
that object is considered reachable. And those that it references are also reachable





There's a background process in the JS engine that is called garbage collector. It monitors all objects and removes those that
have become unreachable
 */

 let user = {
     name: "John"
 };

//  The global variable user references the object John.The name prop of John stores a primitive, so it's painted inside the object


// If the value of user is overwritten, the reference is lost.

user = null;

/*
Now John becomes unreachable.
There's no way to access it, nop references to it.
The garbage collector will junk the data and free the memory */






// Two references

let user = {
    name: "John"
};

let admin = user;

user = null;

/*The object is still reachable via admin variable, so it's in memory. If we overwrite admin too, 
then it can be removed */





// Interlinked objects

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Anne"
});

// Remove two references;

delete family.father;
delete family.mother.husband;


/* Outgoing references do matter. Only incoming ones can make an object reachable
So john is now unreachable and will be removed from the memory with all of its data that also become unaccesible
*/

/*
Internal Algorithms

The basic garbage collection algorithm is called “mark-and-sweep”.

The following “garbage collection” steps are regularly performed:

The garbage collector takes roots and “marks” (remembers) them.
Then it visits and “marks” all references from them.
Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
…And so on until there are unvisited references (reachable from the roots).
All objects except marked ones are removed.
*/



// A general book “The Garbage Collection Handbook: The Art of Automatic Memory Management” (R. Jones et al) covers some of them.