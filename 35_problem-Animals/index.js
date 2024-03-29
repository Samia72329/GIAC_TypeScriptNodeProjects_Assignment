/*
Animals: Think of at least three different animals that have a common characteristic. Store the
names of these animals in a list, and then use a for loop to print out the name of each
animal. • Modify your program to print a statement about each animal, such as A dog would
make a great pet. • Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would make a great pet!
*/
// Define an array of animal names
var animals = ["Dog", "Cat", "Rabbit"];
// Print the names of each animal
console.log("List of animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var element = animals_1[_i];
    console.log(element);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var element = animals_2[_a];
    switch (element) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat is a popular pet choice.");
            break;
        case "Rabbit":
            console.log("A rabbit can be a loving companion.");
            break;
        default:
            console.log("This animal is not recognized.");
    }
}
// Print a statement about the common characteristic
console.log("\nAny of these animals would make a great pet!");
