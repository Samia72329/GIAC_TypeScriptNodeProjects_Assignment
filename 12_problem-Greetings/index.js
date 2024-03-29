/*
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each
person’s name, print a message to them. The text of each message should be the same, but
each message should be personalized with the person’s name.
*/
var names = ["Elon Musk", "Isaac Newton", "Jack Ma", "Jensen Huang", "Jeff Bezos"];
console.log("Hello, ".concat(names[0], ", how are you today"));
console.log("Hello, ".concat(names[1], ", how are you today"));
console.log("Hello, ".concat(names[2], ", how are you today"));
console.log("Hello, ".concat(names[3], ", how are you today"));
console.log("Hello, ".concat(names[4], ", how are you today"));
console.log();
//printing using for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var element = names_1[_i];
    // using template literals for string printing
    console.log("Hello, ".concat(element, ", how are you today"));
}
