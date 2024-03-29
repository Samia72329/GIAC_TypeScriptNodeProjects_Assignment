// String equality test
let msg: string = "Eat, sleep, code, repeat";
console.log("Is msg equal to 'Eat, sleep, code, repeat'? I predict true.");
console.log(msg === "Eat, sleep, code, repeat");

// String inequality test
console.log("Is msg equal to 'bug are features'? I predict false.");
console.log(msg == "bugs are features");

// Lowercase function test
let user: string = "HELLO";
console.log(`Is ${user} lowercase 'hello'? I predict true.`);
console.log(user.toLowerCase() === "hello");

// Numerical tests
let num3: number = 10;
let num4: number = 5;

console.log("Is num3 greater than num4? I predict true.");
console.log(num3 > num4);

console.log("Is num3 greater than or equal to 10? I predict false.");
console.log(num3 >= 15);

// Logical AND and OR operators
let bool3: boolean = true;
let bool4: boolean = false;

console.log("Is bool3 true and bool4 false? I predict true.");
console.log(bool3 && !bool4);

console.log("Is bool3 true or bool4 true? I predict true.");
console.log(bool3 || bool4);

// Test whether an item is in an array
let pet: string[] = ["cat", "dog", "chicken"];
let animal1: string = "cat";

console.log(`Is ${animal1} not in the pet array? I predict true.`);
console.log(!pet.includes(animal1));

// Test whether an item is not in an array
let animal2: string = "duck";

console.log(`Is ${animal2} not in the pet  array? I predict true.`);
console.log(!pet.includes(animal2));
