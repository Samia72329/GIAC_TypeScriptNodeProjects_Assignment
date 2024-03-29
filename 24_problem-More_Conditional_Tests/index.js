// String equality test
var msg = "Eat, sleep, code, repeat";
console.log("Is msg equal to 'Eat, sleep, code, repeat'? I predict true.");
console.log(msg === "Eat, sleep, code, repeat");
// String inequality test
console.log("Is msg equal to 'bug are features'? I predict false.");
console.log(msg == "bugs are features");
// Lowercase function test
var user = "HELLO";
console.log("Is ".concat(user, " lowercase 'hello'? I predict true."));
console.log(user.toLowerCase() === "hello");
// Numerical tests
var num3 = 10;
var num4 = 5;
console.log("Is num3 greater than num4? I predict true.");
console.log(num3 > num4);
console.log("Is num3 greater than or equal to 10? I predict false.");
console.log(num3 >= 15);
// Logical AND and OR operators
var bool3 = true;
var bool4 = false;
console.log("Is bool3 true and bool4 false? I predict true.");
console.log(bool3 && !bool4);
console.log("Is bool3 true or bool4 true? I predict true.");
console.log(bool3 || bool4);
// Test whether an item is in an array
var pet = ["cat", "dog", "chicken"];
var animal1 = "cat";
console.log("Is ".concat(animal1, " not in the pet array? I predict true."));
console.log(!pet.includes(animal1));
// Test whether an item is not in an array
var animal2 = "duck";
console.log("Is ".concat(animal2, " not in the pet  array? I predict true."));
console.log(!pet.includes(animal2));
