/*
15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you
need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program
stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new
person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.

*/
var arrayIterate = function (arr) {
    arr.forEach(function (element) { console.log("".concat(element)); });
};
var dinnerInvite = function (arr) {
    arr.forEach(function (element) { console.log("".concat(element, ", Would you like to have a dinner with me tonight")); });
};
var guestList = ["Albert Einstein", "Jack Ma", "Jensen Huang", "Nikola Tesla", "Charles Leclerc"]; // array containing names of guest
console.log("Guest List:");
arrayIterate(guestList);
var unableToAttend = guestList.pop() || ""; // Remove the last guest from the list, using pop method on guestList
console.log("\n".concat(unableToAttend, ", can't make it to the dinner"));
console.log("Inviting Jungkook to the dinner");
guestList.push("Jungkook"); //  Add Jungkook as the replacement guest, using push method on guestList
console.log("\nNew Guest List:");
arrayIterate(guestList);
console.log("\nSending Invitations:");
dinnerInvite(guestList);
// guestList.push("Nikola Tesla"); // Add a new guest to the list
// guestList.forEach((guest) => {
//     console.log(`Dear ${guest}, I would like to invite you to dinner.`);
// });
