# Javascript Functions

## A method is a function which is a property of an object.

### There are 2 kinds of methods:

- **Instance Methods** which are built-in tasks performed on an *object instance*

- **Static Methods** which are tasks that can be performed *without the need of an object instance*

NOTE: Javascript functions are themselves objects, so, in that context, a method is actually an object reference to a function



## Arrow function expressions and 'this'

Arrow functions do not have their own 'this' context, so they go up the chain to find 'this' declared.

Arrow function expressions are best suited for non-method functions, and cannot be used as constructors.
