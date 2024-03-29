/*
 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
should be printed on the shirt. The function should print a sentence summarizing the size of
the shirt and the message printed on it. Call the function.
*/
var makeShirt = function (size, msg) {
    if (size == "xl" || size == "XL")
        console.log("Size of t-shirt: Extra Large\nMessage printed on it: ".concat(msg));
    else if (size == "l" || size == "L")
        console.log("Size of t-shirt: Large\nMessage printed on it: ".concat(msg));
    else if (size == "m" || size == "M")
        console.log("Size of t-shirt: Medium\nMessage printed on it: ".concat(msg));
    else if (size == "s" || size == "S")
        console.log("Size of t-shirt: Small\nMessage printed on it: ".concat(msg));
    else
        console.log("Invalid\nMessage printed on it: ".concat(msg));
};
makeShirt("l", "I love coding"); // function call or function invoked
// output : Size of t-shirt: 32
//          Message printed on it: I love coding
makeShirt("XL", "No Bugs, Just Features");
makeShirt("s", "Code, Coffee, Sleep, Repeat");
makeShirt("m", "Will Code for Pizza");
makeShirt("L", "I'm not a robot, I just code like one");
makeShirt("M", "Keep Calm and Code On");
