/*
Animals: Think of at least three different animals that have a common characteristic. Store the
names of these animals in a list, and then use a for loop to print out the name of each
animal. • Modify your program to print a statement about each animal, such as A dog would
make a great pet. • Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would make a great pet!
*/
// Define an array of animal names
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of each animal
console.log("List of animals:");
for (let element of animals) {
    console.log(element);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let element of animals) {
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
