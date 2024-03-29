/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for
the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you
can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time
you pop a name from your list, print a message to that person letting them know you’re sorry you
can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still
invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure
you actually have an empty list at the end of your program.
*/
//Q:15. Solution
var arrayIterate = function (arr) {
    arr.forEach(function (element) { console.log("".concat(element)); });
};
var dinnerInvite = function (arr) {
    arr.forEach(function (element) { console.log("".concat(element, ", Would you like to have a dinner with me tonight")); });
};
var guestList = ["Albert Einstein", "Jack Ma", "Gabriel", "Nikola Tesla", "Charles Leclerc"]; // array containing names of guest
console.log("Guest List:");
arrayIterate(guestList);
var unableToAttend = guestList.pop() || ""; // Remove the last guest from the list, using pop method on guestList
console.log("\n".concat(unableToAttend, ", can't make it to the dinner"));
console.log("Inviting Jungkook to the dinner");
guestList.push("Jungkook"); //  Added Jungkook as the replacement guest at the end of array, using push method on guestList
console.log("\nNew Guest List:");
arrayIterate(guestList);
console.log("\nSending Invitations:");
dinnerInvite(guestList);
//Q:16. Solution
console.log("\n---Hey! I just found a bigger table!---");
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
console.log("\n---I can invite only two people for dinner---");
// console.log(guestList.length);
/* Removing guests from list one at a time until only two names remain in list. Each time a name is popped, printing a message to that person letting them know you’re sorry you can’t invite them to dinner.*/
for (var i = guestList.length - 1; i > 1; i--) {
    var removePerson = guestList.pop();
    console.log("".concat(removePerson, ", sorry can't invite you to the dinner"));
}
// Printing a message to each of the two people still on list, letting them know they’re still invited.
console.log("\nRemaining Guest List:");
arrayIterate(guestList);
console.log("\nSending Invitations:");
dinnerInvite(guestList);
//Removing the last two names from  list,to have an empty list. 
for (var i = guestList.length - 1; i >= 0; i--) {
    var removePerson = guestList.pop();
    console.log("".concat(removePerson, ", sorry can't invite you to the dinner"));
}
// Printing  list to make sure actually have an empty list at the end of your program.
console.log("\nEmpty Guest List:");
arrayIterate(guestList);
