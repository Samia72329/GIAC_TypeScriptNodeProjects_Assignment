/*
31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var users = []; //empty array
if (!users.length) {
    console.log("We need to find some users!");
}
else {
    console.log("We have some users!");
}
console.log(Array.isArray(users)); //
// Array.isArray() method finds out whether a variable is an array or not.
console.log(users.length);
console.log(Array(5));
console.log((Array(5)).length);
console.log(Array.isArray(users));
