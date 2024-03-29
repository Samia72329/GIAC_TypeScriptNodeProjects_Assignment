/*
14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use your list
to print a message to each person, inviting them to dinner.
*/
var guestList = ["Albert Einstein", "Jack Ma", "Jensen Huang", "Nikola Tesla", "Charles Leclerc"];
console.log("Using console function");
console.log("".concat(guestList[0], ", Would you like to join me for dinner tonight?")); //output: Albert Einstein, Would you like to join me for dinner tonight?
console.log("".concat(guestList[1], ", Would you like to join me for dinner tonight?")); //output: Jack Ma, Would you like to join me for dinner tonight?
console.log("".concat(guestList[2], ", Would you like to join me for dinner tonight?")); //output: Jensen Huang, Would you like to join me for dinner tonight?
console.log("".concat(guestList[3], ", Would you like to join me for dinner tonight?")); //output: Nikola Tesla, Would you like to join me for dinner tonight?
console.log("".concat(guestList[4], ", Would you like to join me for dinner tonight?\n")); //output: Charles Leclerc, Would you like to join me for dinner tonight?
console.log("Using simple for loop");
// simple for loop
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", Would you like to join me for dinner tonight?"));
}
console.log();
console.log("Using for of loop");
// For of loop
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var element = guestList_1[_i];
    console.log("".concat(element, ", Would you like to join me for dinner tonight?"));
}
