/*
10. Adding Comments: Choose two of the programs you’ve written, and add at least one
comment to each. If you don’t have anything specific to write because your programs are too
simple at this point, just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.
*/
// following function takes 5 input parameters marks of 5 subjects and returns percentage as output
function percentageCalculator(sub1 : number, sub2 : number, sub3 : number, sub4 : number, sub5 : number) {
    return Math.round((sub1 + sub2 + sub3 + sub4 + sub5) / 500 * 100);
    // using Math.round() to round off the percentage
}

// this is a special type of function that takes no input parameter but returns output in form of string
function text(){
    console.log("Hello Earth");
    console.log("Hello Mars");
    console.log("Hello Saturn");
    console.log("Hello Jupiter");
    console.log("Hello Neptune");
    return;
  }
  

let maths: number = 95;
let physics: number = 85;
let chemistry: number = 85;
let geography: number = 55;
let art: number = 95;
console.log("percentage is", percentageCalculator(maths, physics, chemistry, geography, art),"%",);

text(); // function call