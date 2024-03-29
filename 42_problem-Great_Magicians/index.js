function show_magicians(arrayOfNames) {
    for (var _i = 0, arrayOfNames_1 = arrayOfNames; _i < arrayOfNames_1.length; _i++) {
        var element = arrayOfNames_1[_i];
        console.log(element);
    }
}
function make_great(magicianNames) {
    return magicianNames.map(function (magicianNames) { return "The Great ".concat(magicianNames); });
    //Explanation:
    //map() returns a new array with the results of calling a provided function on every element of an array.
    //The function is called once for each element in the array. 
    //In this case, it takes one parameter, "magicianNames", which represents the current value being processed.
    //In this case, we are adding "The Great" to the beginning of each name using template literals.
}
var magicians = ["Maleficient", "Harry Porter", "Gandalf", "Merlin", "Doctor Strange", "The White Witch"];
show_magicians(magicians);
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
