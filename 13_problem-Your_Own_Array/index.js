/*
13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements
about these items, such as “I would like to own a Honda motorcycle.”
*/
var favTransportation = ["Tesla Model S", "Harley Davidson Street Glide", "Toyota Land Cruiser", "BMW M-3", "Audi A4", "American Mustang", "Bently"];
//for of loop is used for string or arrays
for (var _i = 0, favTransportation_1 = favTransportation; _i < favTransportation_1.length; _i++) {
    var element = favTransportation_1[_i];
    console.log("I would like to own a ".concat(element));
}
