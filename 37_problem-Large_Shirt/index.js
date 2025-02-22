/*
. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
message, and a shirt of any size with a different message.
*/
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("size:", size, "message:", message);
    return { size: size, message: message };
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt("medium");
// Make a small shirt with a custom message
make_shirt("small", "I speak fluent Python!");
