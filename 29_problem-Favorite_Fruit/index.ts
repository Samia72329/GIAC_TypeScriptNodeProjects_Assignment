/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the
fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let fav_fruits : string[] = ["apple", "kiwi", "strawberry","orange","pineapple"]; //fav_fruits  array contains my 5 favorite fruits

if (fav_fruits.includes("apple")) { //.includes() method search element in fav_fruits array
    console.log("I really like apples!");
}
if (fav_fruits.includes("mango")) {
    console.log("I really like mangoes!");
}
if (fav_fruits.includes("orange")) {
    console.log("I really like orange!");
}
if (fav_fruits.includes("pineapple")) {
    console.log("I really like pineapples!");
}
if (fav_fruits.includes("kiwi")) {
    console.log("I really like kiwis!");
}