/*
22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try
to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.
*/
// Define an array
const numbers: number[] = [1, 2, 3, 4, 5];

// Try to access an element outside the array bounds
let element = numbers[10];
console.log("Element at index 10:", element);  // This will cause an IndexOutOfBoundsError

