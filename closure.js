/*
Closure:
--  A closure describes the ability of a function to 'remember' and 'access' its lexical environment when it is executed outside of the lexical environment it is defined in.
-- you can use a closure anywhere that you might normally use an object with a single method
-- when you create a function within another function, the inner function is a closure; the closure is returned so you can use the outer function's variables
*/

// to handle object property inside closure using 'this'
var car = {
	brand: 'Nissan',
	getBrand: function() {
		// the arrow function keeps the scope of "this" lexical
		var closure = () => console.log(this.brand);
		return closure();
	}
};

// to output object property using closure
car.getBrand();
// Nissan

// to handle parent function variable inside closure - do not use 'this'
function testBrand() {
	let car = 'Honda';
	return function testClosure() {
		console.log(car);
	};
}

// to output closure
testBrand()();
// Honda

// to output closure
let getHonda = testBrand();
getHonda();
