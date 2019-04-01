/*
Babel
Babel is a transpiler which rewrites modern Javascript code into previous standard

Two parts of Babel:

1. First, the transpiler program, which rewrites the code. The developer runs it on their own computer
It rewrites the code into the older standard.
And then the code is delivered to the website for users.
Modern build system like webpack or brunch provide means to run transpiler automatically on every code change, 
so that doesn't involve any time loss from our side.

2. Second, the polyfill.
The transpiler rewrites the code, so syntax features are covered. But for new functions we need to write a special
script that implements them.
JS is a highly dynamic language, scripts may not just add new functions, but also modify built-in ones
so they behave according to the modern standard


Two interesting polyfills are :
- babel polyfil that supports a lot, but is big
- polyfill.io service that allows to load/construct polyfills on-demand, depending on the features we need



*/