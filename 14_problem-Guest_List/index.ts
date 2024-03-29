/*
14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use your list
to print a message to each person, inviting them to dinner.
*/

let  guestList : string[] = ["Albert Einstein", "Jack Ma", "Jensen Huang", "Nikola Tesla", "Charles Leclerc"];
console.log("Using console function");
console.log(`${guestList[0]}, Would you like to join me for dinner tonight?`); //output: Albert Einstein, Would you like to join me for dinner tonight?
console.log(`${guestList[1]}, Would you like to join me for dinner tonight?`); //output: Jack Ma, Would you like to join me for dinner tonight?
console.log(`${guestList[2]}, Would you like to join me for dinner tonight?`); //output: Jensen Huang, Would you like to join me for dinner tonight?
console.log(`${guestList[3]}, Would you like to join me for dinner tonight?`); //output: Nikola Tesla, Would you like to join me for dinner tonight?
console.log(`${guestList[4]}, Would you like to join me for dinner tonight?\n`); //output: Charles Leclerc, Would you like to join me for dinner tonight?

console.log("Using simple for loop");
// simple for loop
for (let i = 0; i < guestList.length ; i++)
{
    console.log(`${guestList[i]}, Would you like to join me for dinner tonight?`);
}
console.log();
console.log("Using for of loop");
// For of loop
for (let element of guestList)
{
    console.log(`${element}, Would you like to join me for dinner tonight?`);
}
