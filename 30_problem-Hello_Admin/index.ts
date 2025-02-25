/* 
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine
you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

let users : string[] = ["Admin", "Newton", "Tesla", "Einstein", "Curie", "Darwin"];
console.log("Names of users",users); 

console.log("by using for-each loop"); 
users.forEach((element) : void => {
    if (element == "Admin"){
        console.log(`Hello ${element}, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${element}, thank you for logging in again`);
    }
    return;
});

console.log("by using for-of loop"); 
for (let element of users){
    if (element == "Admin"){
        console.log(`Hello ${element}, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${element}, thank you for logging in again`);
    }
}
console.log("by using simple for loop"); 
for (let i = 0; i < users.length; i++){
    if (users[i] == "Admin"){
        console.log(`Hello ${users[i]}, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${users[i]}, thank you for logging in again`);
    }
}