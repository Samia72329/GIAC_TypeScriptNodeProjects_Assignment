/*
11. Names: Store the names of a few of your friends in a array called names. Print each person’s
name by accessing each element in the list, one at a time.
*/
var names = ["Elon Musk", "Isaac Newton", "Jack Ma", "Jensen Huang", "Jeff Bezos"]; // array containing names
console.log("First Name in array: ".concat(names[0])); // Output: First Name: Elon Musk
console.log("Second Name in array: ".concat(names[1])); // Output: Second Name: Isaac Newton
console.log("Third Name in array: ".concat(names[2])); // Output: Third Name: Isaac Newton
console.log("Fourth Name in array: ".concat(names[3])); // Output: Fourth Name: Isaac Newton
console.log("Fifth Name in array: ".concat(names[4])); // Output: Fifth Name: Isaac Newton
function printName(name) {
    console.log(name);
}
names.forEach(printName);
