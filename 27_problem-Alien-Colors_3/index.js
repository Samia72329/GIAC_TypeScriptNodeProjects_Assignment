/*
27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate
color alien.
*/
var alien_color = "green";
//pass the if test and if block is run
if (alien_color == "green") {
    console.log("Green!!! You just earned 5 points for shooting the alien!");
}
else if (alien_color == "yellow") {
    console.log("Yellow!!! You just earned 10 points for shooting the alien!");
}
else {
    console.log("Red!!! You just earned 15 points for shooting the alien!");
}
alien_color = "yellow";
//passed the else if test and else if block is run
if (alien_color == "green") {
    console.log("Green!!! You just earned 5 points for shooting the alien!");
}
else if (alien_color == "yellow") {
    console.log("Yellow!!! You just earned 10 points for shooting the alien!");
}
else {
    console.log("Red!!! You just earned 15 points for shooting the alien!");
}
alien_color = "red";
//passed the else if test and else if block is run
if (alien_color == "green") {
    console.log("Green!!! You just earned 5 points for shooting the alien!");
}
else if (alien_color == "yellow") {
    console.log("Yellow!!! You just earned 10 points for shooting the alien!");
}
else {
    console.log("Red!!! You just earned 15 points for shooting the alien!");
}
