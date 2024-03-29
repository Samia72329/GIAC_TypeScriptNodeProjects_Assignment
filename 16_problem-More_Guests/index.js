/*
16. More Guests: You just found a bigger dinner table, so now more space is available. Think of
three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the
end of your list. • Print a new set of invitation messages, one for each person in your list.
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
