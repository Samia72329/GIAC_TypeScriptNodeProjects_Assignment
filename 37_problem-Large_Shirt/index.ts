/*
. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
message, and a shirt of any size with a different message.
*/



function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log("size:",size,"message:",message)
    return { size, message };
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("medium")

// Make a small shirt with a custom message
make_shirt("small", "I speak fluent Python!");

