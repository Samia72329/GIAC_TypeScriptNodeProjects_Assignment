// Define some variables for testing
/*
23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test
and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or
False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to
False.
*/

let num1: number = 5;
let num2: number = 10;
let str1: string = "code";
let str2: string = "blooded";
let bool1: boolean = true;
let bool2: boolean = false;

// Test 1: Equality check
console.log("Is num1 equal to 5? I predict true.");
console.log(num1 === 5);
// output: true

// Test 2: Inequality check
console.log("Is num1 not equal to num2? I predict true.");
console.log(num1 !== num2);
// output: true

// Test 3: String equality check
console.log("Is str1 equal to 'code'? I predict true.");
console.log(str1 === "code");
// output: true

// Test 4: String inequality check
console.log("Is str1 not equal to str2? I predict true.");
console.log(str1 !== str2);
// output: true

// Test 5: String inequality check
console.log("Is str2 equal to blooded? I predict true.");
console.log(str2 === "blooded");
// output: true

// Test 6: Logical AND operation
console.log("Is bool1 and bool2 true? I predict false.");
console.log(bool1 && bool2);
// output: true

// Test 7: Greater than check
console.log("Is num1 greater than num2? I predict false.");
console.log(num1 > num2);
// output: false

// Test 8: Less than check
console.log("Is num2 less than num1? I predict false.");
console.log(num2 < num1);
// output: false

// Test 9: Greater than or equal to check
console.log("Is num1 greater than or equal to num2? I predict false.");
console.log(num1 >= num2);
// output: false

// Test 10: Less than or equal to check
console.log("Is num2 less than or equal to 9? I predict false.");
console.log(num2 <= 5);
// output: false
