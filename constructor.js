/*
- Constructor Functions:
-- first letter in function name is CAPITALIZED
-- do NOT use the RETURN because the return is implicit

-- function is invoked with the 'new' operator and returns a new object 'instance'
-- a new object is created and assigned to the 'this' keyword
-- 'this' references the object
-- any properties attached to the 'this' keyword are attached to the newly created object, then the object is implicitly returned at the end of the code block
-- 'this' object's internal prototype is created / assigned when the object is created

--- constructorFunctionName.prototype is the CUSTOM internal (dunder proto) __proto__ / [[Prototype]], created when the instance is created with the 'new' keyword
// 'this' is equal to Object.create(constructorFunctionName.prototype)
*/

// EXAMPLE:
// create function, use 'this' to define properies and methods
function Person(name) {
	this.age = 0;
	this.name = name;

	// Person.prototype is automatically created
}

// to add functions to the prototype:
Person.prototype.getName = function() {
	return this.name;
};

// create a new object instance using 'new' keyword
var instanceObj = new Person('Sam');

// 'new' invokes the function, not ()
// () only needed if parameters are defined in the function
// if no parameters were defined in the function can invoke by just saying:
// var instanceObj = new Person;

console.log(instanceObj);
// OUTPUT:
// Person { age: 0, name: 'Sam' }
