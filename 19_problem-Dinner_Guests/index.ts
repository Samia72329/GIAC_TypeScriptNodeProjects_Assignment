/*
19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a
message indicating the number of people you are inviting to dinner.
*/

//Q:15. Solution
const arrayIterate = (arr: string[]) => {
    arr.forEach((element) => { console.log(`${element}`) })
}

const dinnerInvite = (arr: string[]) => {
    arr.forEach((element) => { console.log(`${element}, Would you like to have a dinner with me tonight.`) })
}
let guestList: string[] = ["Albert Einstein", "Jack Ma", "Gabriel", "Nikola Tesla", "Charles Leclerc"];// array containing names of guest
console.log("Guest List:");
arrayIterate(guestList);

let unableToAttend: string = guestList.pop() || ""; // Remove the last guest from the list, using pop method on guestList
console.log(`\n${unableToAttend}, can't make it to the dinner`);

console.log("Inviting Jungkook to the dinner")
guestList.push("Jungkook"); //  Added Jungkook as the replacement guest at the end of array, using push method on guestList

console.log("\nNew Guest List:");
arrayIterate(guestList);
console.log("\nSending Invitations:");
dinnerInvite(guestList);
//Q:16. Solution
console.log("\n---Hey! I just found a bigger table!---")
//adding one new guest at the beginning of array
guestList.unshift("Gojo Saturo"); // //  Added Gojo Saturo at the start of array, using unshift method on guestList
//Add one new guest to the middle of your array. 
guestList.splice(2, 0, "Light Yagami"); //adds Light Yagami to index position 2 in guest list, using splice() method
// Use append() to add one new guest to the end of your list.
guestList.splice(guestList.length, 0, "Doraemon");
console.log("\nFinal New Guest List:");
arrayIterate(guestList);
console.log("\nSending Invitations:");
dinnerInvite(guestList);

//Q: 17 Solution
console.log("\n---I can invite only two people for dinner---")
// console.log(guestList.length);
/* Removing guests from list one at a time until only two names remain in list. Each time a name is popped, printing a message to that person letting them know you’re sorry you can’t invite them to dinner.*/

for (let i = guestList.length - 1; i > 1; i--) {
    let removePerson = guestList.pop();
    console.log(`${removePerson}, sorry can't invite you to the dinner`);

}
// Printing a message to each of the two people still on list, letting them know they’re still invited.
console.log("\nRemaining Guest List:");
arrayIterate(guestList);
console.log("\nSending Invitations:");
dinnerInvite(guestList);

//Removing the last two names from  list,to have an empty list. 
for (let i = guestList.length - 1; i >= 0; i--) {
    let removePerson = guestList.pop();
    console.log(`${removePerson}, sorry can't invite you to the dinner`);

}

// Printing  list to make sure actually have an empty list at the end of your program.
console.log("\nEmpty Guest List:");
arrayIterate(guestList);
// Q: 19
console.log(`\n---I am inviting ${guestList.length} number of people to the dinner :(  ---`);