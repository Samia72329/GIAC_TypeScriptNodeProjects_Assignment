/*
 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
should be printed on the shirt. The function should print a sentence summarizing the size of
the shirt and the message printed on it. Call the function.
*/

let makeShirt = (size : string, msg : string) : void => 
{ 
     if (size == "large")
    console.log(`Size of t-shirt: Large\nMessage printed on it: ${msg}`);
    else if (size == "medium")
    console.log(`Size of t-shirt: Medium\nMessage printed on it: ${msg}`);
    else if (size == "small")
    console.log(`Size of t-shirt: Small\nMessage printed on it: ${msg}`);
    else 
    console.log("Invalid size or message");
}
makeShirt("large", "I love coding"); // function call or function invoked
                                // output : Size of t-shirt: Large
                                // Message printed on it: I love coding
makeShirt("small", "No Bugs, Just Features");
makeShirt("medium", "Code, Coffee, Sleep, Repeat");

