/*
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the
name of the pizza. For each pizza you should have one line of output containing a simple
statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an
additional sentence, such as I really love pizza!
*/
var arrayIterate = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        console.log(element);
    }
};
var pizzaReview = function (array) {
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var element = array_2[_i];
        console.log("I like ".concat(element, " pizza"));
    }
    console.log("Pepperoni: I love the classic taste of pepperoni pizza, with its savory pepperoni slices and gooey cheese.\nBBQ Chicken: BBQ chicken pizza is a delightful mix of sweet and savory flavors that always satisfies my taste buds.\nFajita: Fajita pizza is a flavorful twist on traditional pizza, with its spicy fajita seasoning and vibrant vegetable toppings.\nMeat Lovers: Meat lovers pizza is a hearty and indulgent treat that never fails to satisfy my cravings for a meaty feast.\nI really love pizza!");
};
var pizza = ["Pepproni", "BBQ Chicken", "Fajita", "Meat Lovers"];
arrayIterate(pizza);
pizzaReview(pizza);
