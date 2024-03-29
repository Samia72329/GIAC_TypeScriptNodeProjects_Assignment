/*
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each
person’s name, print a message to them. The text of each message should be the same, but
each message should be personalized with the person’s name.
*/



let names: string[] = ["Elon Musk", "Isaac Newton", "Jack Ma", "Jensen Huang", "Jeff Bezos"];

console.log(`Hello, ${names[0]}, how are you today`);
console.log(`Hello, ${names[1]}, how are you today`);
console.log(`Hello, ${names[2]}, how are you today`);
console.log(`Hello, ${names[3]}, how are you today`);
console.log(`Hello, ${names[4]}, how are you today`);
console.log();

//printing using for of loop
for (let element of names){
    // using template literals for string printing
    console.log(`Hello, ${element}, how are you today`);
}
