/*
13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements
about these items, such as “I would like to own a Honda motorcycle.”
*/
let favTransportation: string[] = ["Tesla Model S", "Harley Davidson Street Glide", "Toyota Land Cruiser", "BMW M-3", "Audi A4", "American Mustang", "Bently"];

//for of loop is used for string or arrays
for (let element of favTransportation )
{
    console.log(`I would like to own a ${element}`);
}



