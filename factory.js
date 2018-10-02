/*
- Factory Functions:
-- are any functions that is not a Constructor Function or Class
-- are any functions that RETURN an object literal
-- create, set up, and return an object
-- the object returned is an instance of the factory function
-- can use Object.create() to create an instance with a CUSTOM internal (dunder proto) __proto__ / [[Prototype]]
-- MUST RETURN the object
*/

// EXAMPLE without custom internal prototype:
// - create function, do NOT use 'this'
// - can use arrow function expression
// - return the instance object {}
// - then, create an instance withOUT the 'new' keyword by assigning that function to a var
// - then, invoke functions on the object
const puppyFactory = (name, breed) => ({
	name,
	breed,

	// to add functions to the prototype:
	bark() {
		console.log('Ruff, Ruff');
	},
	sleep() {
		console.log('zzzZZZZZzzzz');
	}
});

// create a new object instance, do NOT use 'new' keyword
const donut = puppyFactory('donut', 'bulldog');

console.log(donut);
/*
// OUTPUT:
{ name: 'donut',
  breed: 'bulldog',
  bark: [Function: bark],
  sleep: [Function: sleep] }
*/

donut.sleep();
// zzzZZZZZzzzz

donut.bark();
// Ruff, Ruff

// EXAMPLE with custom internal prototype:
// - create custom prototype by creating an OBJECT
// - create a function with an instance object using the custom prototype and assign properties to it and return that instance object {}
// - then, create an instance withOUT the 'new' keyword by assigning that function to a var
// - then, invoke functions on the object
const internalPrototype = {
	bark() {
		console.log('Ruff, Ruff');
	},
	sleep() {
		console.log('zzzZZZZZzzzz');
	}
};

// Create object instance with custom internal prototype:
function puppyFactory2(name, breed) {
	// assign custom internal prototype
	const instance = Object.create(internalPrototype);

	instance.name = name;
	instance.breed = breed;

	// function MUST RETURN object
	return instance;
}

// create a new object instance
const donut2 = puppyFactory2('donut2', 'bulldog');

console.log(donut2);
// { name: 'donut2', breed: 'bulldog' }

donut2.sleep();
// zzzZZZZZzzzz

donut2.bark();
// Ruff, Ruff

//EXAMPLE using Object.assign() to create object with custom internal prototype:
// function must RETURN object
const puppyFactory3 = (name, breed) =>
	Object.assign(Object.create(internalPrototype), { name, breed });

const donut3 = puppyFactory3('donut3', 'bulldog');

console.log(donut3);
// { name: 'donut3', breed: 'bulldog' }

donut3.sleep();
// zzzZZZZZzzzz

donut3.bark();
// Ruff, Ruff
