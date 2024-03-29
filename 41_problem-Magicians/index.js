/*
Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.
*/
function show_magician(arrayOfNames) {
    for (var _i = 0, arrayOfNames_1 = arrayOfNames; _i < arrayOfNames_1.length; _i++) {
        var element = arrayOfNames_1[_i];
        console.log(element);
    }
}
var print_magician = function (arrayOfNames) {
    for (var i = 0; i < arrayOfNames.length; i++) {
        console.log("Name ".concat(i + 1, ": ").concat(arrayOfNames[i]));
    }
};
var magician_names = ["Maleficient", "Harry Porter", "Gandalf", "Merlin", "Doctor Strange", "The White Witch"];
show_magician(magician_names);
console.log();
print_magician(magician_names);
